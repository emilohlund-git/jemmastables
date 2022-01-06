import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TIMESLOT_TYPE } from '../../config/constants'
import { DateSlot, TimeSlot } from '../../generated/graphql'
import { setTime } from '../../redux/actions'
import { RootState } from '../../redux/reducers'
import { getBackgroundColorByTimeSlot } from '../../utils/calendar/getBackgroundColorByTimeSlot'
import DeleteTimeSlotButton from './DeleteTimeSlotButton'
import InformationPill from './InformationPill'
import MobileBookTimeForm from './MobileBookTimeForm'

interface AccordionProps {
    timeslot: TimeSlot
    dateslot: DateSlot
    bottomBar: any
    setBottomBarHeight: any
    count: number;
}

export const Accordion = (props: AccordionProps) => {
    const admin: boolean = useSelector((state: RootState) => state.admin);
    const [active, setActive] = useState(false)
    const [height, setHeight] = useState('0px')
    const [rotate, setRotate] = useState('transform duration-700 ease')
    const dispatch = useDispatch();
    const [showing, setShowing] = useState(false);

    const contentSpace = useRef(null)

    function toggleAccordion() {
        if (props.timeslot?.users && props.timeslot.users.length < 1 || props.timeslot?.type.type == TIMESLOT_TYPE['Öppen bana'] && props.timeslot?.slots! > 0) {
            setActive(active === false ? true : false)
            // @ts-ignore
            setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`)
            setRotate(active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-180')
            /* @ts-ignore */
            props.setBottomBarHeight(`${props.bottomBar.scrollHeight + contentSpace.current.scrollHeight + 1}px`)
        }
    }

    const handleClick = (e: any) => {
        dispatch(setTime({
            from: props.timeslot.from,
            to: props.timeslot.to
        }));
        setShowing(!showing);
    }

    return (
        <div className="flex flex-col">
            {admin &&
                <DeleteTimeSlotButton count={props.count} date={props.timeslot.date.date} to={props.timeslot.to} from={props.timeslot.from} />
            }
            <button
                className="appearance-none cursor-pointer focus:outline-none justify-between"
                onClick={toggleAccordion}
            >
                <div onClick={handleClick} className="transition-all transform flex flex-row justify-between hover:bg-blue-50 hover:bg-opacity-10">
                    <div className="flex flex-row items-center ml-4">
                        <div className={`w-2 h-16 ${getBackgroundColorByTimeSlot(props.timeslot)} rounded-md`}>

                        </div>
                        <div className="h-16 w-16 py-3 rounded-md items-center pl-2 text-white">
                            <p className="font-bold">{props.timeslot.from}</p>
                            <p className="text-xs">1 timma</p>
                        </div>
                        <div className="h-16 rounded-md items-center py-3 md:pl-2 text-white">
                            {props.timeslot.slots && props.timeslot!.slots! != 0 ?
                                <InformationPill textColor="text-black" backgroundColor="bg-white">
                                    {`${props.timeslot.slots} ${props.timeslot.slots === 1 ? "ledig plats" : "lediga platser"}`}
                                </InformationPill>
                                :
                                <></>
                            }
                        </div>
                    </div>
                    <div className="m-4 py-3 h-20 text-white">
                        {props.timeslot?.users && props.timeslot?.users.length > 0 ?
                            <><p className="text-sm mb-2 text-gray-400 text-right flex justify-end">{props.timeslot.type.type}</p>
                                <div className="flex text-sm justify-end"><p className="hidden">bokad av</p> {props.timeslot!.users.map((user, index) =>
                                    <InformationPill key={index} textColor="text-black" backgroundColor="bg-white">
                                        {user!.name.toLowerCase()}
                                    </InformationPill>
                                )}
                                </div></>
                            : <><p className="text-sm mb-2 text-gray-400 text-right">{props.timeslot.type.type}</p>
                                <p className="text-sm">klicka för att boka</p></>}
                    </div>
                </div>
            </button>
            <div
                ref={contentSpace}
                style={{ maxHeight: `${height}` }}
                className="overflow-auto scrollbar-none transition-max-height duration-700 ease-in-out"
            >
                <MobileBookTimeForm timeslot={props.timeslot} slots={props.timeslot!.slots!} toggleAccordion={toggleAccordion} />
            </div>
        </div>
    )
}