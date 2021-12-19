import { DateTime } from "luxon";
import { delLocale } from "next/dist/shared/lib/router/router";
import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useSelector } from "react-redux";
import { DateSlot, useDateSlotsQuery } from "../../generated/graphql";
import { RootState } from "../../redux/reducers";
import getDaysInMonth from "../../utils/calendar/getDaysInMonth";
import getDaysInWeek from "../../utils/calendar/getDaysInWeek";
import { isToday } from "../../utils/calendar/isToday";
import { BookingModal } from "./BookingModal";
import { DayBox } from "./DayBox";
import MobileTimeSlots from "./MobileTimeSlots";
import { MyModal } from "./Modal";

interface Props {

}

const JemmaCalendar = (props: Props) => {
    const date: DateTime = useSelector((state: RootState) => state.date);
    const [currentDate, setCurrentDate] = useState(DateTime.local());
    const [days, setDays] = useState(
        getDaysInMonth(currentDate)
    );
    const [weekDays, setWeekDays] = useState(getDaysInWeek(currentDate));
    const { data, loading } = useDateSlotsQuery();

    const changeCalendar = (value: string) => {
        if (value == "minus") {
            setCurrentDate(currentDate.set({ month: currentDate.month - 1 }));
        } else {
            setCurrentDate(currentDate.set({ month: currentDate.month + 1 }));
        }
    }

    console.log(data);

    useEffect(() => {
        setWeekDays(getDaysInWeek(currentDate));
        setDays(getDaysInMonth(currentDate));
    }, [currentDate])

    return (
        <div className="flex flex-col bg-gray-900 md:bg-white">
            <div className="flex flex-col self-center z-20 w-full px-2 md:w-8/12 pb-4 md:pb-20 bg-gradient-to-b from-white via-gray-50 to-gray-50 rounded-b-3xl md:bg-none shadow-md md:shadow-none">
                <div className="flex flex-col md:flex-col">
                    <div className="mb-2 mt-4">
                        <h1 className="text-black text-xl pl-2 md:text-4xl md:text-center dark:text-gray-50">{currentDate.toFormat("yyyy")}</h1>
                    </div>
                    <div className="flex justify-around md:justify-center items-center md:gap-0 mb-4 md:m-2">
                        <div className="w-1/4 h-12 flex items-center md:justify-end">
                            <FiChevronLeft onClick={() => changeCalendar("minus")} className="cursor-pointer text-black dark:text-gray-50 transition transform hover:scale-125 mt-1 text-lg rounded-md" />
                        </div>
                        <div className="w-1/4 h-12 flex justify-center items-center">
                            <h1 className="text-black font-bold md:font-normal dark:text-gray-50 text-2xl text-center">{currentDate.setLocale("sv").toFormat("LLLL")}</h1>
                        </div>
                        <div className="w-1/4 h-12 flex items-center justify-end md:justify-start">
                            <FiChevronRight onClick={() => changeCalendar("plus")} className="cursor-pointer text-black dark:text-gray-50 transition transform hover:scale-125 mt-1 text-lg rounded-md" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-7 gap-1">
                    {weekDays ?
                        weekDays.map((day, i) => (
                            <h2 className="md:text-black text-gray-400 dark:text-gray-50 text-center" key={i}>{day.weekdayShort}</h2>
                        ))
                        :
                        <></>
                    }
                </div>
                <div className="my-2 grid grid-cols-7 gap-1">
                    {days && !loading ?
                        days.map((day, i) => (
                            <DayBox day={day} dateSlot={data?.dateSlots.filter((d) => d.date === day.toSQLDate()) as [DateSlot]} key={i} />
                        ))
                        :
                        <></>
                    }
                </div>
            </div>
            <BookingModal />
            <div className="bg-gradient-to-t from-gray-700 to-gray-900 divide-y-2 divide-gray-700 pb-4">
                <div className="flex justify-between text-gray-400 text-sm">
                    <div className="m-4">
                        <h2>{date.setLocale("sv").toFormat("yyyy LLL dd")}</h2>
                    </div>
                    <div className="m-4">
                        <p>{isToday(date) ? "idag" : ""}</p>
                    </div>
                </div>
                {!loading && data?.dateSlots.map((dateSlot) => {
                    if (dateSlot.date === date.toSQLDate()) {
                        if (dateSlot.timeslots!.length > 0) {
                            return (
                                dateSlot.timeslots?.map((timeslot, index) => {
                                    return (
                                        <MobileTimeSlots dateslot={dateSlot as any} timeslot={timeslot as any} key={index} />
                                    )
                                })
                            )
                        }
                    }
                })}
                {!loading && data?.dateSlots!.filter((d) => d.date === date.toSQLDate()).length === 0 ?
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center ml-4">
                            <div className={`w-2 h-16 bg-white rounded-md`}>
                            </div>
                            <div className="h-16 rounded-md items-center py-3 pl-2 text-white">
                                <p className="font-bold">inga tider</p>
                                <p className="text-xs">tomt idag</p>
                            </div>
                        </div>
                        <div className="m-4 py-2 text-white">
                            <p className="text-xs text-gray-400 text-right">synd</p>
                            <p>så kan det gå!</p>
                        </div>
                    </div> : <></>}
            </div>
        </div>
    )
}

export default JemmaCalendar
