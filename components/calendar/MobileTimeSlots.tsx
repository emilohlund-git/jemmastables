import React from 'react'
import { getBackgroundColorByTimeSlot } from '../../utils/calendar/getBackgroundColorByTimeSlot'

interface Props {
    timeslot: any
    dateslot: any
}

const MobileTimeSlots = (props: Props) => {
    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center ml-4">
                <div className={`w-2 h-16 ${getBackgroundColorByTimeSlot(props.timeslot)} rounded-md`}>

                </div>
                <div className="h-16 rounded-md items-center py-3 pl-2 text-white">
                    <p className="font-bold">{props.timeslot.from}</p>
                    <p className="text-xs">1 timma</p>
                </div>
            </div>
            <div className="m-4 py-2 text-white">
                {props.timeslot.users ?
                    <><p className="text-xs text-gray-400 text-right">bokad av {props.timeslot!.users.name}</p>
                        <p>bokad av {props.timeslot!.users.name}</p></>
                    : <><p className="text-xs text-gray-400 text-right">ledig tid!</p>
                        <p>klicka för att boka</p></>}
            </div>
        </div>
    )
}

export default MobileTimeSlots
