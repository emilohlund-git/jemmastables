import { DateTime } from "luxon";
import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { DateSlot, useDateSlotsQuery } from "../../generated/graphql";
import getDaysInMonth from "../../utils/calendar/getDaysInMonth";
import getDaysInWeek from "../../utils/calendar/getDaysInWeek";
import { BookingModal } from "./BookingModal";
import { DayBox } from "./DayBox";
import { MyModal } from "./Modal";

interface Props {

}

/**
 * TODO:
 * Find a way to improve component rendering issues,
 * ex. Each day is loading the modal component & every single timeslot.
 * Maybe better to find a way where modal component is top hierarchy and data fetched
 * via redux or similar. (It kind of already works like that, just have to move it)
 */

const JemmaCalendar = (props: Props) => {
    const [currentDate, setCurrentDate] = useState(DateTime.local());
    const [days, setDays] = useState(
        getDaysInMonth(currentDate)
    );
    const [weekDays, setWeekDays] = useState(getDaysInWeek(currentDate));
    const [open, setOpen] = useState(false);

    const { data, loading } = useDateSlotsQuery();

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

    return (
        <>
            <div className="flex flex-col w-11/12 md:w-8/12 pb-20">
                <div className="mb-2">
                    <h1 className="text-black text-4xl text-center dark:text-gray-50">{currentDate.toFormat("yyyy")}</h1>
                </div>
                <div className="flex justify-center items-center gap-4 m-2">
                    <FiChevronLeft onClick={() => changeCalendar("minus")} className="cursor-pointer text-black dark:text-gray-50 transition transform hover:scale-125 mt-1 text-lg rounded-md" />
                    <h1 className="text-black dark:text-gray-50 text-2xl text-center">{currentDate.setLocale("sv").toFormat("LLLL")}</h1>
                    <FiChevronRight onClick={() => changeCalendar("plus")} className="cursor-pointer text-black dark:text-gray-50 transition transform hover:scale-125 mt-1 text-lg rounded-md" />
                </div>
                <div className="grid grid-cols-7 gap-1">
                    {weekDays ?
                        weekDays.map((day, i) => (
                            <h2 className="text-black dark:text-gray-50 text-center" key={i}>{day.weekdayShort}</h2>
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
        </>
    )
}

export default JemmaCalendar
