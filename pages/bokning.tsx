import React from 'react'
import JemmaCalendar from '../components/calendar/JemmaCalendar'
import { withApollo } from '../utils/withApollo'

interface Props {

}

const bokning = (props: Props) => {
    return (
        <div className="flex justify-center">
            <JemmaCalendar />
        </div>
    )
}

export default withApollo({ ssr: true })(bokning)
