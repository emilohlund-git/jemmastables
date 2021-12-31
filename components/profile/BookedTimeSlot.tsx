import React from 'react';
import { useSelector } from 'react-redux';
import { TimeSlot, User } from '../../generated/graphql';
import { RootState } from '../../redux/reducers';
import { DateTime } from 'luxon';

interface Props {
    timeslot: TimeSlot;
}

const BookedTimeSlot = (props: Props) => {
    const user: User = useSelector((state: RootState) => state.user);
    return (
        <div>
            <div className="shadow-sm transition-all transform flex mb-4 flex-row hover:bg-blue-50 hover:bg-opacity-10 rounded-md">
                <div className="flex flex-row items-center">
                    <div className={`w-20 h-full bg-gradient-to-r flex justify-center items-center from-green-300 to-green-500 rounded-l-lg`}>
                        <div className="h-16 py-2 rounded-md text-center text-white">
                            <p className="font-bold text-2xl">{props.timeslot.date.date.split("-")[2]}</p>
                            <p className="text-xs">{DateTime.fromSQL(props.timeslot.date.date).setLocale("sv").monthLong.toLowerCase()}</p>
                        </div>
                    </div>
                </div>
                <div className="m-4 text-white">
                    {user &&
                        <>
                            <p className="text-sm font-bold text-gray-700 text-left">{props.timeslot.type.type.toLowerCase()}</p>
                            <p className="text-gray-500 text-xs">{props.timeslot.from} - {props.timeslot.to}</p>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default BookedTimeSlot
