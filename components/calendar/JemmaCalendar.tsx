import { DateTime } from "luxon";
import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useAvailableTimesQuery } from "../../generated/graphql";
import getDaysInMonth from "../../utils/calendar/getDaysInMonth";
import getDaysInWeek from "../../utils/calendar/getDaysInWeek";
import { DayBox } from "./DayBox";
import LoadingBox from "./LoadingBox";

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

    const [timeslots, setTimeslots] = useState();

    const { data, loading } = useAvailableTimesQuery();

    const changeCalendar = (value: string) => {
        if (value == "minus") {
            setCurrentDate(currentDate.set({ month: currentDate.month - 1 }));
        } else {
            setCurrentDate(currentDate.set({ month: currentDate.month + 1 }));
        }
    }

    useEffect(() => {
        setTimeslots(data as any);
        console.log("Querying");
    }, [data, loading])

    useEffect(() => {
        setWeekDays(getDaysInWeek(currentDate));
        setDays(getDaysInMonth(currentDate));
    }, [currentDate])

    return (
        <>
            <div className="flex flex-col w-11/12 md:w-8/12">
                <div className="mb-2">
                    <h1 className="text-black text-4xl text-center dark:text-gray-50">{currentDate.toFormat("yyyy")}</h1>
                </div>
                <div className="flex justify-center items-center gap-4 m-2">
                    <FiChevronLeft onClick={() => changeCalendar("minus")} className="cursor-pointer text-black transition transform hover:scale-125 mt-1 text-lg rounded-md" />
                    <h1 className="text-black dark:text-gray-50 text-2xl text-center">{currentDate.setLocale("sv").toFormat("LLLL")}</h1>
                    <FiChevronRight onClick={() => changeCalendar("plus")} className="cursor-pointer text-black transition transform hover:scale-125 mt-1 text-lg rounded-md" />
                </div>
                <div className="grid grid-cols-7 gap-1">
                    {weekDays ?
                        weekDays.map((day, i) => (
                            <h2 className="text-black" key={i}>{day.weekdayShort}</h2>
                        ))
                        :
                        <></>
                    }
                </div>
                <div className="my-2 grid grid-cols-7 gap-1">
                    {days ?
                        days.map((day, i) => (
                            !loading ?
                                <DayBox timeslots={timeslots} currentDate={currentDate} setCurrentDate={setCurrentDate} key={i} day={day} />
                                : <LoadingBox />
                        ))
                        :
                        <></>
                    }
                </div>
            </div>
        </>
    )
}

export default JemmaCalendar
