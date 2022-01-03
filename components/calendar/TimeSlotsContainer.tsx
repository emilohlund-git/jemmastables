import { DateTime } from 'luxon'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { DateSlot, TimeSlot } from '../../generated/graphql'
import { RootState } from '../../redux/reducers'
import { isTodaySQL } from '../../utils/calendar/isTodaySQL'
import EmptyTimeSlot from './EmptyTimeSlot'
import MobileTimeSlots from './MobileTimeSlots'

interface Props {
    dateSlot: DateSlot;
    setHeight: any;
    bottomBar: any;
    count: number;
    setCount: any;
}

const TimeSlotsContainer = (props: Props) => {
    const date: DateTime = useSelector((state: RootState) => state.date);

    useEffect(() => {
        props.setCount(props.dateSlot!.timeslots!.length);
    }, [props])

    return (
        <>
            {isTodaySQL(props.dateSlot, date) && props.dateSlot.timeslots!.length > 0 ?
                props.dateSlot.timeslots?.map((timeslot, index: number) =>
                    <MobileTimeSlots count={props.count} setBottomBarHeight={props.setHeight} bottomBar={props.bottomBar.current} dateslot={props.dateSlot as DateSlot} timeslot={timeslot as TimeSlot} key={index} />
                )
                : <EmptyTimeSlot />}
        </>
    )
}

export default TimeSlotsContainer
