import { DateTime } from 'luxon';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpen } from '../../redux/actions';
import { RootState } from '../../redux/reducers';

interface Props {
    day: DateTime;
}

export const DayBox = (props: Props) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        if (DateTime.now() <= DateTime.now()) {
            dispatch(setIsOpen(true));
        }
    }

    return (
        <div onClick={handleClick} className={`cursor-pointer transition-all bg-gray-100 dark:bg-gray-700 transform hover:scale-110 motion-reduce:transform-none hover:bg-gray-50 ${DateTime.now().setLocale("sv").toFormat("MM/DD/yyyy") == props.day.setLocale("sv").toFormat("MM/DD/yyyy") ? "border-green-700 border-opacity-10 border-2" : ""} h-16 md:h-28 rounded-md relative overflow-hidden`}>
            {props.day.weekdayLong === "måndag" ? <span className="ml-2 inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-gray-100 bg-gray-600 rounded-md absolute top-2 right-0">{props.day.weekNumber}</span> : <></>}
            <p className="text-gray-500 dark:text-gray-300 text-left ml-2 text-lg">{props.day.day}</p>
            {/* 
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full transition-all justify-center ${type == 0 && "bg-blue-100 dark:bg-blue-900"} ${type == 1 && "bg-red-100 dark:bg-red-900"} ${type == 2 && "bg-green-100 dark:bg-green-900"} rounded-lg p-1 flex flex-col transform ${!isOpen ? "opacity-0 scale-0" : ""}`}>
                <p className="text-sm">{currentTitle ? currentTitle : "(Ingen titel)"}</p>
                <div className="flex flex-row">
                    {currentTimeFrom ? <p className="text-xs">{currentTimeFrom}</p> : <p className="text-xs">12:00</p>} <p className="text-xs">-</p> {currentTimeFrom ? <p className="text-xs">{currentTimeTo}</p> : <p className="text-xs">12:00</p>}
                </div>
            </div>
            */}
        </div>
    )
}