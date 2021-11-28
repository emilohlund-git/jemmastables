import { DateTime, Interval } from 'luxon'
import React, { useState } from 'react'
import MyModal from './Modal';

interface Props {
    day: DateTime;
}

const DayBox = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div onClick={handleClick} className={`${DateTime.now() >= props.day ? "bg-gray-200" : "cursor-pointer transition-all bg-gray-100 transform hover:scale-110 motion-reduce:transform-none hover:bg-gray-50"} h-16 md:h-28 rounded-md relative`}>
            {props.day.weekdayLong === "måndag" ? <span className="ml-2 inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-gray-100 bg-gray-600 rounded-md absolute top-2 right-0">{props.day.weekNumber}</span> : <></>}
            <p className="text-gray-500 text-left ml-2 text-lg">{props.day.day}</p>
            <MyModal day={props.day} setOpen={setIsOpen} open={isOpen} />
        </div>
    )
}

export default DayBox
