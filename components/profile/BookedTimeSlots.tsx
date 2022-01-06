import React, { useEffect, useState } from 'react';
import { TimeSlot, User } from '../../generated/graphql';
import { sortTimeSlotsByDayDesc } from '../../utils/calendar/sortTimeSlotsByDay';
import BookedTimeSlot from './BookedTimeSlot';

interface Props {
    user: User
}

const BookedTimeSlots = (props: Props) => {
    const [sortedTimeSlots, setSortedTimeSlots] = useState([] as TimeSlot[]);
    useEffect(() => {
        if (props.user && props.user.timeslots) {
            setSortedTimeSlots(sortTimeSlotsByDayDesc(props.user.timeslots as TimeSlot[]));
        }
    }, [props.user])

    return (
        <>
            {sortedTimeSlots.length === 0 &&
                <p className="text-center text-md mb-8 mt-6">inga bokade tider</p>
            }
            {sortedTimeSlots.map((timeslot, index) => {
                return (
                    <BookedTimeSlot key={index} timeslot={timeslot!} />
                )
            })}
        </>
    )
}

export default BookedTimeSlots
