import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TimeSlot, User } from '../../generated/graphql';
import { RootState } from '../../redux/reducers';
import { sortTimeSlotsByDayDesc } from '../../utils/calendar/sortTimeSlotsByDay';
import BookedTimeSlot from './BookedTimeSlot';

interface Props {
}

const BookedTimeSlots = (props: Props) => {
    const user: User = useSelector((state: RootState) => state.user);
    const [sortedTimeSlots, setSortedTimeSlots] = useState([] as TimeSlot[]);
    useEffect(() => {
        if (user && user.timeslots) {
            setSortedTimeSlots(sortTimeSlotsByDayDesc(user.timeslots as TimeSlot[]));
        }
    }, [user])

    return (
        <>
            {sortedTimeSlots.map((timeslot, index) => {
                return (
                    <BookedTimeSlot key={index} timeslot={timeslot!} />
                )
            })}
        </>
    )
}

export default BookedTimeSlots
