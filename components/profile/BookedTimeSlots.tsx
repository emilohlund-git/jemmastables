import React from 'react';
import { useSelector } from 'react-redux';
import { User } from '../../generated/graphql';
import { RootState } from '../../redux/reducers';
import MobileTimeSlots from '../calendar/MobileTimeSlots';
import BookedTimeSlot from './BookedTimeSlot';

interface Props {
}

const BookedTimeSlots = (props: Props) => {
    const user: User = useSelector((state: RootState) => state.user);

    return (
        <>
            {user && user.timeslots?.map((timeslot, index) => {
                return (
                    <BookedTimeSlot key={index} timeslot={timeslot!} />
                )
            })}
        </>
    )
}

export default BookedTimeSlots
