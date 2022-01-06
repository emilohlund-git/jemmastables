import { DateTime } from "luxon";
import React, { useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiMinus, FiPlus } from 'react-icons/fi';
import { useSelector } from "react-redux";
import { useSwipeable } from 'react-swipeable';
import { toast } from "react-toastify";
import { DateSlot, useDateSlotsQuery, useDeleteDateSlotsMutation } from "../../generated/graphql";
import { RootState } from "../../redux/reducers";
import getDaysInMonth from "../../utils/calendar/getDaysInMonth";
import getDaysInWeek from "../../utils/calendar/getDaysInWeek";
import { isBeforeTodaySQL } from "../../utils/calendar/isBeforeTodaySQL";
import Spinner from "../Spinner";
import AddTimeSlotBanner from "./AddTimeSlotBanner";
import AddTimeSlotModal from "./AddTimeSlotModal";
import { BookingModal } from "./BookingModal";
import { DayBox } from "./DayBox";
import TimeSlotsContainer from "./TimeSlotsContainer";

interface Props {

}

const JemmaCalendar = (props: Props) => {
    const [active, setActive] = useState(false)
    const [height, setHeight] = useState('0px')
    const [DeleteOldDates] = useDeleteDateSlotsMutation();
    const [currentDate, setCurrentDate] = useState(DateTime.local());
    const [days, setDays] = useState(
        getDaysInMonth(currentDate)
    );
    const admin: boolean = useSelector((state: RootState) => state.admin);
    const date: DateTime = useSelector((state: RootState) => state.date);
    const [weekDays, setWeekDays] = useState(getDaysInWeek(currentDate));
    const { data, loading } = useDateSlotsQuery();
    const bottomBarRef = useRef<HTMLDivElement>(null);
    const [count, setCount] = useState(0);
    const handlers = useSwipeable({
        onSwipedRight: (eventData) => setCurrentDate(currentDate.set({ month: currentDate.month - 1 })),
        onSwipedLeft: (eventData) => setCurrentDate(currentDate.set({ month: currentDate.month + 1 })),
        delta: 10,
        trackMouse: true,
        preventDefaultTouchmoveEvent: false,
        trackTouch: true,
    })

    useEffect(() => {
        const deleteDateSlots = data?.dateSlots.filter((dateSlot) => isBeforeTodaySQL(dateSlot.date));
        if (deleteDateSlots && deleteDateSlots.length > 0) {
            deleteDateSlots?.forEach(async (dateSlot) => {
                toast.promise(
                    DeleteOldDates({
                        variables: {
                            delete: {
                                timeslots: [
                                    {
                                        where: {
                                            node: {
                                                date: {
                                                    date: dateSlot.date
                                                }
                                            }
                                        }
                                    }
                                ]
                            },
                            where: {
                                date: dateSlot.date
                            },
                        },
                        update: (cache) => {
                            cache.evict({ fieldName: "dateSlots" });
                        }
                    }),
                    {
                        pending: "Raderar gamla tider",
                        success: "Raderade gamla tider",
                        error: "Kunde inte radera gamla tider"
                    }
                )
            });
        }
    }, [data])

    const changeCalendar = (value: string) => {
        if (value == "minus") {
            setCurrentDate(currentDate.set({ month: currentDate.month - 1 }));
        } else {
            setCurrentDate(currentDate.set({ month: currentDate.month + 1 }));
        }
    }

    useEffect(() => {
        setWeekDays(getDaysInWeek(currentDate));
        setDays(getDaysInMonth(currentDate));
    }, [currentDate])

    const hideBottomBar = () => {
        setActive(active === false ? true : false)
        if (bottomBarRef.current !== null)
            setHeight(active ? '0px' : `${bottomBarRef.current.scrollHeight + 1}px`)
    }

    return (
        <div className="flex flex-col bg-gray-900 md:bg-white">
            <div className="flex flex-col self-center z-20 w-full px-2 md:w-8/12 pb-4 md:pb-20 bg-gradient-to-b from-white via-gray-50 to-gray-50 rounded-b-3xl md:bg-none shadow-md md:shadow-none">
                <div className="flex flex-col md:flex-col">
                    <div className="mb-2 mt-4 flex justify-between">
                        <h1 className="text-black text-xl pl-2 md:text-4xl md:text-center">{currentDate.toFormat("yyyy")}</h1>
                    </div>
                    <div className="flex justify-around md:justify-center items-center md:gap-0 mb-4 md:m-2">
                        <div className="w-1/4 h-12 flex items-center md:justify-end">
                            <FiChevronLeft onClick={() => changeCalendar("minus")} className="cursor-pointer text-black transition transform hover:scale-125 mt-1 text-lg rounded-md" />
                        </div>
                        <div className="w-1/4 h-12 flex justify-center items-center">
                            <h1 className="text-black font-bold md:font-normal text-2xl text-center">{currentDate.setLocale("sv").toFormat("LLLL")}</h1>
                        </div>
                        <div className="w-1/4 h-12 flex items-center justify-end md:justify-start">
                            <FiChevronRight onClick={() => changeCalendar("plus")} className="cursor-pointer text-black transition transform hover:scale-125 mt-1 text-lg rounded-md" />
                        </div>
                    </div>
                </div>
                {!loading ?
                    <>
                        <div className="grid grid-cols-7 gap-1">
                            {weekDays &&
                                weekDays.map((day, i) => (
                                    <h2 className="md:text-black text-gray-400 text-center" key={i}>{day.weekdayShort}</h2>
                                ))
                            }
                        </div>
                        <div {...handlers} style={{ touchAction: "pan-x" }} className="my-2 grid grid-cols-7 gap-1">
                            {days && !loading &&
                                days.map((day, i) => (
                                    <DayBox active={active} setActive={setActive} bottomBarRef={bottomBarRef} height={height} setHeight={setHeight} day={day} dateSlot={data?.dateSlots.find((d) => d.date === day.toSQLDate()) as DateSlot} key={i} />
                                ))
                            }
                        </div>
                    </>
                    :
                    <Spinner />
                }
            </div>
            {admin &&
                <AddTimeSlotModal height={height} active={active} bottomBarRef={bottomBarRef} setActive={setActive} setHeight={setHeight} />
            }
            <BookingModal />
            <div className="bg-gradient-to-t md:fixed md:bottom-0 md:w-full md:z-50 from-gray-800 to-gray-900 divide-y-2 divide-gray-700 pb-4 md:pb-0">
                <div className="flex justify-between text-gray-400 text-sm">
                    <div className="m-4">
                        <h2>{date.setLocale("sv").toFormat("yyyy LLL dd")}</h2>
                    </div>
                    <div className="m-4 flex">
                        <p className="mr-4">v.{date.weekNumber}</p>
                        <div className="hidden md:flex">
                            {!active ?
                                <FiPlus onClick={hideBottomBar} className="cursor-pointer text-white transition transform hover:scale-125 text-lg rounded-md" />
                                :
                                <FiMinus onClick={hideBottomBar} className="cursor-pointer text-white transition transform hover:scale-125 text-lg rounded-md" />
                            }
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden scrollbar-none md:transition-max-height md:duration-700 md:ease-in-out" style={{ maxHeight: `${height}` }} ref={bottomBarRef} >
                    {!loading && data!.dateSlots!.length > 0 && data!.dateSlots!.map((dateSlot, index) => {
                        return (
                            <TimeSlotsContainer count={count} setCount={setCount} key={index} setHeight={setHeight} bottomBar={bottomBarRef} dateSlot={dateSlot as DateSlot} />
                        )
                    }
                    )}
                    {admin &&
                        <AddTimeSlotBanner />
                    }
                </div>
            </div>
        </div>
    )
}

export default JemmaCalendar
