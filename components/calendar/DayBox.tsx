import { DateTime } from 'luxon';
import React from 'react';
import { useDispatch } from 'react-redux';
import { DateSlot } from '../../generated/graphql';
import { setDate, setIsOpen } from '../../redux/actions';
import { Timeslot } from './Timeslots';

interface Props {
    day: DateTime;
    dateSlot: [DateSlot];
}

export const DayBox = (props: Props) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        if (DateTime.now() <= DateTime.now()) {
            dispatch(setDate(props.day));
            dispatch(setIsOpen(true));
        }
    }

    console.log("DateSlot: ", props.dateSlot[0]);

    return (
        <div onClick={handleClick} className={`cursor-pointer z-20 hover:z-50 transition-all bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 glow-blue-100 transform hover:scale-110 motion-reduce:transform-none hover:bg-gray-50 ${DateTime.now().setLocale("sv").toFormat("MM/DD/yyyy") == props.day.setLocale("sv").toFormat("MM/DD/yyyy") ? "border-green-700 border-opacity-10 border-2" : ""} h-16 md:h-28 rounded-md relative overflow-x-hidden scrollbar-thumb-gray-500 scrollbar-thin scrollbar-track-gray-100`}>
            {props.day.weekdayLong === "måndag" ? <span className="ml-2 inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-gray-100 bg-gray-600 rounded-md absolute top-2 right-0">{props.day.weekNumber}</span> : <></>}
            <p className="text-gray-500 dark:text-gray-300 text-left ml-2 text-lg">{props.day.day}</p>
            <div className="">
                {props.dateSlot[0] ? <>
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