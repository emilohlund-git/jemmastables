import React from 'react';
import { getTimeSlotType } from '../../utils/calendar/getTimeSlotType';
import { Accordion } from './Accordion';
import { TIMESLOT_TYPE } from '../../config/constants'

interface Props {
    timeslot: any
    dateslot: any
}

const MobileTimeSlots = (props: Props) => {
    return (
        <>
            <Accordion timeslot={props.timeslot} dateslot={props.dateslot} />
        </>
    )
}

export default MobileTimeSlots
