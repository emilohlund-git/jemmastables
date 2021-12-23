import React from 'react'
import { useSelector } from 'react-redux';
import BookedTimeSlots from '../components/profile/BookedTimeSlots'
import { User } from '../generated/graphql'
import { RootState } from '../redux/reducers';

interface Props {

}

const User = (props: Props) => {
    const user: User = useSelector((state: RootState) => state.user);
    return (
        <div className="flex flex-col bg-white bg-gradient-to-t from-gray-700 to-gray-900 divide-y-2 divide-gray-700 pt-4">
            <div className="flex flex-col self-center z-20 w-full px-2 md:w-8/12 pb-4 md:pb-20">
                <BookedTimeSlots user={user} />
            </div>
        </div>
    )
}

export default User

