import { DateTime } from 'luxon';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DateSlot } from '../../generated/graphql';
import { setDate, setIsOpen } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import { Timeslot } from './Timeslots';

interface Props {
    day: DateTime;
    dateSlot: [DateSlot];
}

export const DayBox = (props: Props) => {
    const admin: boolean = useSelector((state: RootState) => state.admin);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setDate(props.day));
        if (!admin) {
            if (!isBeforeToday(props.day.setLocale("sv"))) {
                dispatch(setIsOpen(true));
            }
        }
    }

    const isBeforeToday = (d1: DateTime) => {
        return DateTime.now().setLocale("sv") >= d1
    }

    return (
        <div onClick={handleClick} className={`${isBeforeToday(props.day.setLocale("sv")) ? "bg-gray-300" : "hover:bg-gray-50 cursor-pointer"} z-20 transition-all bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 glow-blue-100 transform ${props.dateSlot[0] && !isBeforeToday(props.day.setLocale("sv")) && props.dateSlot[0]!.timeslots!.every((e, x) => e!.users!.length === 0) ? "hover:scale-150 hover:shadow-xl" : ""} motion-reduce:transform-none  ${DateTime.now().setLocale("sv").toFormat("MM/DD/yyyy") == props.day.setLocale("sv").toFormat("MM/DD/yyyy") ? "border-gray-400 border-opacity-50 border-2" : ""} h-32 md:h-28 hover:z-50 rounded-md relative overflow-x-hidden scrollbar-thumb-gray-500 scrollbar-thin scrollbar-track-gray-100`}>
            {props.day.weekdayLong === "måndag" ? <span className="ml-2 inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-gray-100 bg-gray-600 rounded-md absolute top-2 right-0">{props.day.weekNumber}</span> : <></>}
            <p className="text-gray-500 dark:text-gray-300 text-left ml-2 text-lg">{props.day.day}</p>
            <div className="">
                {props.dateSlot[0] && !isBeforeToday(props.day.setLocale("sv")) && props.dateSlot[0]!.timeslots!.every((e, x) => e!.users!.length === 0) ? <>
                    {props.dateSlot[0].timeslots!.map((timeslot, i) =>
                        <Timeslot type={timeslot!.type.type} to={timeslot!.to} from={timeslot!.from} key={i} />
                        /* @ts-ignore */
                    ).sort((timeslot1, timeslot2) => timeslot1.from < timeslot2.from)}
                </>
                    : <></>}
            </div>
        </div>
    )
}