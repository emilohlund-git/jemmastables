import { DateTime } from "luxon";
import React, { useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiPlus, FiMinus } from 'react-icons/fi';
import { useSelector } from "react-redux";
import { DateSlot, TimeSlot, useDateSlotsQuery } from "../../generated/graphql";
import { RootState } from "../../redux/reducers";
import getDaysInMonth from "../../utils/calendar/getDaysInMonth";
import getDaysInWeek from "../../utils/calendar/getDaysInWeek";
import Spinner from "../Spinner";
import { BookingModal } from "./BookingModal";
import { DayBox } from "./DayBox";
import EmptyTimeSlot from './EmptyTimeSlot';
import MobileTimeSlots from "./MobileTimeSlots";
import { AdminModal } from "./AdminModal";
import AddTimeSlotBanner from "./AddTimeSlotBanner";

interface Props {

}

const JemmaCalendar = (props: Props) => {
    const [active, setActive] = useState(false)
    const [height, setHeight] = useState('0px')
    const admin: boolean = useSelector((state: RootState) => state.admin);
    const date: DateTime = useSelector((state: RootState) => state.date);
    const [currentDate, setCurrentDate] = useState(DateTime.local());
    const [days, setDays] = useState(
        getDaysInMonth(currentDate)
    );
    const [weekDays, setWeekDays] = useState(getDaysInWeek(currentDate));
    const { data, loading } = useDateSlotsQuery();
    const bottomBarRef = useRef(null);

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
        // @ts-ignore
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
                        <div className="my-2 grid grid-cols-7 gap-1">
                            {days && !loading &&
                                days.map((day, i) => (
                                    <DayBox active={active} setActive={setActive} bottomBarRef={bottomBarRef} height={height} setHeight={setHeight} day={day} dateSlot={data?.dateSlots.filter((d) => d.date === day.toSQLDate()) as [DateSlot]} key={i} />
                                ))
                            }
                        </div>
                    </>
                    :
                    <Spinner />
                }
            </div>
            {admin &&
                <AdminModal />
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
                    {!loading && data?.dateSlots.map((dateSlot) => {
                        if (dateSlot.date === date.toSQLDate()) {
                            if (dateSlot.timeslots!.length > 0) {
                                return (
                                    dateSlot.timeslots?.map((timeslot, index) => {
                                        return (
                                            <MobileTimeSlots setBottomBarHeight={setHeight} bottomBar={bottomBarRef.current} dateslot={dateSlot as DateSlot} timeslot={timeslot as TimeSlot} key={index} />
                                        )
                                    })
                                )
                            }
                        }
                    })}
                    {!loading && data?.dateSlots!.filter((d) => d.date === date.toSQLDate()).length === 0 &&
                        <EmptyTimeSlot />}
                    {admin &&
                        <AddTimeSlotBanner />
                    }
                </div>
            </div>
        </div>
    )
}

export default JemmaCalendar
