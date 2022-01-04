import React from 'react';
import { DateSlot, TimeSlot } from '../../generated/graphql';
import { getTimeSlotType } from '../../utils/calendar/getTimeSlotType';
import { Accordion } from './Accordion';

interface Props {
    timeslot: TimeSlot
    dateslot: DateSlot
    bottomBar: any
    setBottomBarHeight: any
    count: number
}

const MobileTimeSlots = (props: Props) => {
    return (
        <>
            {getTimeSlotType(props.timeslot) != "Träning" &&
                <Accordion count={props.count} setBottomBarHeight={props.setBottomBarHeight} bottomBar={props.bottomBar} timeslot={props.timeslot} dateslot={props.dateslot} />
            }
        </>
    )
}

export default MobileTimeSlots
