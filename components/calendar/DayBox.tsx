import { DateTime } from 'luxon';
import React from 'react';
import { useDispatch } from 'react-redux';
import { DateSlot } from '../../generated/graphql';
import { setDate, setIsOpen } from '../../redux/actions';

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
        <div onClick={handleClick} className={`cursor-pointer z-20 hover:z-50 transition-all bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 glow-blue-100 transform hover:scale-110 motion-reduce:transform-none hover:bg-gray-50 ${DateTime.now().setLocale("sv").toFormat("MM/DD/yyyy") == props.day.setLocale("sv").toFormat("MM/DD/yyyy") ? "border-green-700 border-opacity-10 border-2" : ""} h-16 md:h-28 rounded-md relative overflow-hidden`}>
            {props.day.weekdayLong === "måndag" ? <span className="ml-2 inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-gray-100 bg-gray-600 rounded-md absolute top-2 right-0">{props.day.weekNumber}</span> : <></>}
            <p className="text-gray-500 dark:text-gray-300 text-left ml-2 text-lg">{props.day.day}</p>
            {props.dateSlot[0] ? <>
                {props.dateSlot[0].timeslots!.map((timeslot, i) =>
                    <div key={i} className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full transition-all justify-center ${timeslot?.type.type == "Självhushållning" && "bg-blue-100 dark:bg-blue-900"} ${timeslot?.type.type == "Träning" && "bg-red-100 dark:bg-red-900"} ${timeslot?.type.type == "Öppen bana" && "bg-green-100 dark:bg-green-900"} rounded-lg p-1 flex flex-col transform`}>
                        <p className="text-sm">{"(Ingen titel)"}</p>
                        <div className="flex flex-row">
                            {props.dateSlot ? <p className="text-xs">{timeslot?.from}</p> : <p className="text-xs">12:00</p>} <p className="text-xs">-</p> {timeslot?.from ? <p className="text-xs">{timeslot?.to}</p> : <p className="text-xs">12:00</p>}
                        </div>
                    </div>
                )}
            </>
                : <></>}
        </div>
    )
}