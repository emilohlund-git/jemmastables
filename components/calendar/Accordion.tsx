import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setTime } from '../../redux/actions'
import { getBackgroundColorByTimeSlot } from '../../utils/calendar/getBackgroundColorByTimeSlot'
import MobileBookTimeForm from './MobileBookTimeForm'

interface AccordionProps {
    timeslot: any
    dateslot: any
}

export const Accordion = (props: AccordionProps) => {
    const [active, setActive] = useState(false)
    const [height, setHeight] = useState('0px')
    const [rotate, setRotate] = useState('transform duration-700 ease')
    const dispatch = useDispatch();
    const [showing, setShowing] = useState(false);

    const contentSpace = useRef(null)

    function toggleAccordion() {
        if (!props.timeslot?.users) {
            setActive(active === false ? true : false)
            // @ts-ignore
            setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`)
            setRotate(active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-180')
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
            <button
                className="appearance-none cursor-pointer focus:outline-none justify-between"
                onClick={toggleAccordion}
            >
                <div onClick={handleClick} className="transition-all transform flex flex-row justify-between hover:bg-blue-50 hover:bg-opacity-10">
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
                            <><p className="text-xs text-gray-400 text-right">{props.timeslot.type.type}</p>
                                <p>bokad av {props.timeslot!.users.name}</p></>
                            : <><p className="text-xs text-gray-400 text-right">{props.timeslot.type.type}</p>
                                <p>klicka för att boka</p></>}
                    </div>
                </div>
            </button>
            <div
                ref={contentSpace}
                style={{ maxHeight: `${height}` }}
                className="overflow-auto transition-max-height duration-700 ease-in-out"
            >
                <MobileBookTimeForm />
            </div>
        </div>
    )
}