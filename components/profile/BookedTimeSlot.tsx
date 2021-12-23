import React from 'react'
import { useSelector } from 'react-redux';
import { TimeSlot, User } from '../../generated/graphql'
import { RootState } from '../../redux/reducers';
import { getBackgroundColorByTimeSlot } from '../../utils/calendar/getBackgroundColorByTimeSlot'

interface Props {
    timeslot: TimeSlot;
}

const BookedTimeSlot = (props: Props) => {
    const user: User = useSelector((state: RootState) => state.user);
    return (
        <div>
            <div className="transition-all transform flex flex-row justify-between hover:bg-blue-50 hover:bg-opacity-10">
                <div className="flex flex-row items-center ml-4">
                    <div className={`w-2 h-16 ${getBackgroundColorByTimeSlot(props.timeslot)} rounded-md`}>

                    </div>
                    <div className="h-16 rounded-md items-center py-3 pl-2 text-white">
                        <p className="font-bold">{props.timeslot.from}</p>
                        <p className="text-xs">1 timma</p>
                    </div>
                </div>
                <div className="m-4 py-2 text-white">
                    {user &&
                        <>
                            <p className="text-xs text-gray-400 text-right">{props.timeslot.type.type}</p>
                            <p>bokad av {user.name}</p>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default BookedTimeSlot
