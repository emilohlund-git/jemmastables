import React from 'react'
import JemmaCalendar from '../components/calendar/JemmaCalendar'

interface Props {

}

const bokning = (props: Props) => {
    return (
        <div className="flex justify-center">
            <JemmaCalendar />
        </div>
    )
}

export default bokning
