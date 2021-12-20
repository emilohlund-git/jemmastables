import React from 'react'
import JemmaCalendar from '../components/calendar/JemmaCalendar'
import { withApollo } from '../utils/withApollo'

interface Props {

}

const bokning = (props: Props) => {
    return (
        <div className="flex flex-col justify-center dark:bg-gray-900">
            <JemmaCalendar />
        </div>
    )
}

export default withApollo({ ssr: false })(bokning)
