import { DateTime } from 'luxon'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import MyModal from './Modal';
import { setDate } from '../../redux/actions';

interface Props {
    day: DateTime;
    setCurrentDate: React.Dispatch<React.SetStateAction<DateTime>>;
    currentDate: DateTime;
}

const DayBox = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentTitle, setCurrentTitle] = useState("");
    const [currentTimeFrom, setCurrentTimeFrom] = useState("");
    const [currentTimeTo, setCurrentTimeTo] = useState("");
    const [type, setType] = useState(0);
    const dispatch = useDispatch();

    const handleClick = () => {
        if (DateTime.now() <= props.day) {
            dispatch(setDate(props.day));
            setIsOpen(!isOpen);
        }
    }

    return (
        <div onClick={handleClick} className={`${DateTime.now().setLocale("sv") >= props.day ? "bg-gray-200" : "cursor-pointer transition-all bg-gray-100 transform hover:scale-110 motion-reduce:transform-none hover:bg-gray-50"} ${props.day.toFormat("MM/DD/yyyy") == DateTime.now().setLocale("sv").toFormat("MM/DD/yyyy") ? "border-green-700 border-opacity-10 border-2" : ""} h-16 md:h-28 rounded-md relative`}>
            {props.day.weekdayLong === "måndag" ? <span className="ml-2 inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-gray-100 bg-gray-600 rounded-md absolute top-2 right-0">{props.day.weekNumber}</span> : <></>}
            <p className="text-gray-500 text-left ml-2 text-lg">{props.day.day}</p>
            <div className={`transition-all justify-center ${type == 0 && "bg-blue-100"} ${type == 1 && "bg-red-100"} ${type == 2 && "bg-green-100"} rounded-lg p-1 mt-3 flex flex-col transform ${!isOpen ? "opacity-0 scale-0" : ""}`}>
                <p className="text-sm">{currentTitle ? currentTitle : "(Ingen titel)"}</p>
                <div className="flex flex-row">
                    {currentTimeFrom ? <p className="text-xs">{currentTimeFrom}</p> : <p className="text-xs">12:00</p>} <p className="text-xs">-</p> {currentTimeFrom ? <p className="text-xs">{currentTimeTo}</p> : <p className="text-xs">12:00</p>}
                </div>
            </div>
            <MyModal setCurrentDate={props.setCurrentDate} type={type} setType={setType} setCurrentTitle={setCurrentTitle} setCurrentTimeTo={setCurrentTimeTo} setCurrentTimeFrom={setCurrentTimeFrom} setOpen={setIsOpen} open={isOpen} />
        </div>
    )
}

export default DayBox
