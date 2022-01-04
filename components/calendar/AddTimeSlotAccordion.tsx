import { Tab } from '@headlessui/react'
import { DateTime } from 'luxon'
import React, { Dispatch, SetStateAction, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setType } from '../../redux/actions'
import { RootState } from '../../redux/reducers'

interface AccordionProps {

}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export const AddTimeSlotAccordion = (props: AccordionProps) => {
    const date: DateTime = useSelector((state: RootState) => state.date);
    const type: string = useSelector((state: RootState) => state.type);
    const [active, setActive] = useState(false)
    const [height, setHeight] = useState('0px')
    const [rotate, setRotate] = useState('transform duration-700 ease')
    const dispatch = useDispatch();
    const [showing, setShowing] = useState(false);
    const [timeTo, setTimeTo] = useState("12:00");
    const [timeFrom, setTimeFrom] = useState("12:00");
    const contentSpace = useRef(null)

    const [slots, setSlots]: [
        slots: number,
        setSlots: Dispatch<SetStateAction<number>>
    ] = useState(1);

    function toggleAccordion() {
        setActive(active === false ? true : false)
        // @ts-ignore
        setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`)
        setRotate(active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-180')
        /* @ts-ignore */
    }

    const handleClick = (e: any) => {
        setShowing(!showing);
    }

    const createDateSlot = async (e: any) => {
    }

    return (
        <div className="flex flex-col">
            <div
                className="overflow-auto scrollbar-none transition-max-height duration-700 ease-in-out"
            >
                <Tab.Group defaultIndex={1} onChange={(index) => {
                    if (index === 0) dispatch(setType("Självhushållning"))
                    if (index === 1) dispatch(setType("Träning"))
                    if (index === 2) dispatch(setType("Öppen bana"))
                }}>
                    <Tab.List className="flex p-1 space-x-1 bg-gray-800 rounded-xl transform transition-all">
                        <Tab
                            key={1}
                            className={({ selected }) =>
                                classNames(
                                    'w-full py-2.5 text-xs md:text-sm leading-5 font-medium text-gray-400 rounded-lg',
                                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-900 ring-black ring-opacity-60',
                                    selected
                                        ? 'bg-white shadow'
                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            Självhushållning
                        </Tab>
                        <Tab
                            key={2}
                            className={({ selected }) =>
                                classNames(
                                    'w-full py-2.5 text-xs md:text-sm leading-5 font-medium text-gray-400 rounded-lg',
                                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                                    selected
                                        ? 'bg-white shadow'
                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            Träning
                        </Tab>
                        <Tab
                            key={3}
                            className={({ selected }) =>
                                classNames(
                                    'w-full py-2.5 text-xs md:text-sm leading-5 font-medium text-gray-400 rounded-lg',
                                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                                    selected
                                        ? 'bg-white shadow'
                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            Öppen bana
                        </Tab>
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                        <Tab.Panel
                            key={1}
                            className={classNames(
                                'bg-white rounded-xl p-3',
                                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                            )}
                        >
                            <div className="flex flex-row items-center">
                                <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-xs md:text-sm" disabled type="date" value={date.toISODate()} />
                                <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-xs md:text-sm flex flex-grow" onChange={((e) => { setTimeFrom(e.target.value) })} type="time" value={timeFrom} aria-label="Title" />
                                <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-xs md:text-sm flex flex-grow" onChange={((e) => { setTimeTo(e.target.value) })} type="time" value={timeTo} aria-label="Title" />
                            </div>
                        </Tab.Panel>
                        <Tab.Panel
                            key={2}
                            className={classNames(
                                'bg-white rounded-xl p-3',
                                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                            )}
                        >
                            <div className="flex flex-row items-center">
                                <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-xs md:text-sm" disabled type="date" value={date.toISODate()} />
                                <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-xs md:text-sm flex flex-grow" onChange={((e) => { setTimeFrom(e.target.value) })} type="time" value={timeFrom} aria-label="Title" />
                                <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-xs md:text-sm flex flex-grow" onChange={((e) => { setTimeTo(e.target.value) })} type="time" value={timeTo} aria-label="Title" />
                            </div>
                        </Tab.Panel>
                        <Tab.Panel
                            key={3}
                            className={classNames(
                                'bg-white rounded-xl p-3',
                                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                            )}
                        >
                            <div className="flex flex-row items-center">
                                <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-xs md:text-sm" disabled type="date" value={date.toISODate()} />
                                <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-xs md:text-sm flex flex-grow" onChange={((e) => { setTimeFrom(e.target.value) })} type="time" value={timeFrom} aria-label="Title" />
                                <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-xs md:text-sm flex flex-grow" onChange={((e) => { setTimeTo(e.target.value) })} type="time" value={timeTo} aria-label="Title" />
                            </div>
                            <div className="flex flex-row items-center mt-4">
                                <label className="text-sm" htmlFor="">Antal platser: </label>
                                <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-xs md:text-sm flex flex-grow" type="number" onChange={((e) => { setSlots(parseInt(e.target.value)) })} value={slots} min="1" />
                            </div>

                        </Tab.Panel>
                    </Tab.Panels>
                    <div className="flex w-full justify-end">
                        <button onClick={createDateSlot} className="transition-all bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 border-none rounded-md mt-4">
                            Spara
                        </button>
                    </div>
                </Tab.Group>
            </div>
        </div>
    )
}