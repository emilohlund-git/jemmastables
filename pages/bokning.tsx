import React from 'react'
import JemmaCalendar from '../components/calendar/JemmaCalendar'
import { RouteGuard } from '../utils/RouteGuard';

interface Props {

}

const Bokning = (props: Props) => {
    return (
        <div className="flex flex-col justify-center dark:bg-gray-900">
            <RouteGuard>
                <JemmaCalendar />
            </RouteGuard>
        </div>
    )
}

export default Bokning
