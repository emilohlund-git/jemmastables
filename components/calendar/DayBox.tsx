import { DateTime } from 'luxon';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TIMESLOT_TYPE } from '../../config/constants';
import { DateSlot } from '../../generated/graphql';
import { setDate } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import { getBackgroundColorByDateSlot } from '../../utils/calendar/getBackgroundColorByDateSlot';
import { isBeforeToday } from '../../utils/calendar/isBeforeToday';
import { isToday } from '../../utils/calendar/isToday';
import { Timeslot } from './Timeslots';

interface Props {
    day: DateTime;
    dateSlot: DateSlot;
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    height: string;
    setHeight: React.Dispatch<React.SetStateAction<string>>;
    bottomBarRef: any;
}

export const DayBox = (props: Props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(props.dateSlot);
        return;
    }, [props.dateSlot])

    const handleClick = () => {
        if (!isBeforeToday(props.day)) {
            dispatch(setDate(props.day));
            setTimeout(() => {
                props.setActive(true);
                props.setHeight(`${props.bottomBarRef.current.scrollHeight}px`);
            }, 50);
        }
    }

    return (
        <div onClick={handleClick} className={`${isBeforeToday(props.day) ? "md:bg-gray-100" : "hover:bg-white"} z-20 transition-all ${props.dateSlot} md:bg-gray-50 glow-blue-100 transform ${!isBeforeToday(props.day.setLocale("sv")) ? "hover:scale-110 hover:shadow-xl" : ""} motion-reduce:transform-none  ${isToday(props.day) ? "md:border-gray-200 border-opacity-50 border-2" : ""} transition-all transform h-9 rounded-full md:h-28 hover:z-50 md:rounded-md relative overflow-hidden md:overflow-x-hidden md:scrollbar-thumb-gray-500 md:scrollbar-thin scrollbar-track-gray-100`}>
            {props.day.weekdayLong === "måndag" ? <span className="ml-2 md:inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-gray-100 bg-gray-600 rounded-md absolute top-2 right-0 hidden">{props.day.weekNumber}</span> : <></>}
            <div className="mt-2 md:mt-0">
                <p className={`${isBeforeToday(props.day) ? "text-gray-300 md:text-gray-300" : ""} text-center md:text-left md:ml-2 mt-1 md:mt-0 text-xs md:text-lg`}>{props.day.day}</p>
            </div>
            <div className="hidden md:flex md:flex-col">
                {props.dateSlot && !isBeforeToday(props.day) ? <>
                    {props.dateSlot.timeslots!.map((timeslot, i) => {
                        return (
                            timeslot?.type.type !== TIMESLOT_TYPE.Träning && timeslot?.users == null && <Timeslot type={timeslot!.type.type} to={timeslot!.to} from={timeslot!.from} key={i} />
                        )
                    }
                        /* @ts-ignore */
                    ).sort((timeslot1, timeslot2) => timeslot1.from < timeslot2.from)}
                </>
                    : <></>}
            </div>
            <div className={`h-2 w-2 ${props.dateSlot && getBackgroundColorByDateSlot(props.dateSlot)}`}></div>
        </div >
    )
}