import React from 'react';

interface Props {
    type: string;
    to: string;
    from: string;
}

// eslint-disable-next-line react/display-name
export const Timeslot = (props: Props) => {
    return (
        <div className={`mt-1 h-1 md:h-5 w-full transition-all transform ${props.type == "Självhushållning" ? "bg-blue-100" : ""} ${props.type == "Träning" ? "bg-red-100" : ""} ${props.type == "Öppen bana" ? "bg-green-100" : ""} rounded-full hover:scale-110 text-xs text-center`}><p className="leading-5">{props.from + " - " + props.to}</p></div>
    )
}