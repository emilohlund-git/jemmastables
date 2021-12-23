import React from 'react';
import { DateSlot, TimeSlot } from '../../generated/graphql';
import { getTimeSlotType } from '../../utils/calendar/getTimeSlotType';
import { Accordion } from './Accordion';
import EmptyTimeSlot from './EmptyTimeSlot';

interface Props {
    timeslot: TimeSlot
    dateslot: DateSlot
}

const MobileTimeSlots = (props: Props) => {
    return (
        <>
            {getTimeSlotType(props.timeslot) != "Träning" ?
                <Accordion timeslot={props.timeslot} dateslot={props.dateslot} />
                :
                <EmptyTimeSlot />
            }
        </>
    )
}

export default MobileTimeSlots
