import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setBookingIsOpen, setTime } from '../../redux/actions';

interface Props {
    type: string;
    to: string;
    from: string;
}

// eslint-disable-next-line react/display-name
export const Timeslot = (props: Props) => {
    const dispatch = useDispatch();

    const handleClick = (e: FormEvent) => {
        e.preventDefault();
        dispatch(setBookingIsOpen(true));
        dispatch(setTime({
            from: props.from,
            to: props.to
        }))
        e.stopPropagation();
    }

    return (
        <div onClick={handleClick} className={`cursor-pointer mt-1 h-1 md:h-5 w-full transition-all transform ${props.type == "Självhushållning" ? "bg-blue-100 hover:bg-blue-200" : ""} ${props.type == "Träning" ? "bg-red-100 hover:bg-red-200" : ""} ${props.type == "Öppen bana" ? "bg-green-100 hover:bg-green-200" : ""} rounded-full hover:scale-110 text-xs text-center`}><p className="leading-5">{props.from + " - " + props.to}</p></div>
    )
}