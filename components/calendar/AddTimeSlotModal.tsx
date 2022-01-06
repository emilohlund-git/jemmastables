import { Dialog, Tab, Transition } from '@headlessui/react';
import { DateTime } from 'luxon';
import React, { Dispatch, Fragment, SetStateAction, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TIMESLOT_TYPE } from '../../config/constants';
import { useCreateDateSlotsMutation, useDateSlotQuery, useUpdateDateSlotsMutation } from '../../generated/graphql';
import { setIsOpen, setType } from '../../redux/actions';
import { RootState } from '../../redux/reducers';

interface Props {
    setActive: any;
    setHeight: any;
    bottomBarRef: any;
    active: any;
    height: any;
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const AdminModal = React.memo((props: Props) => {
    const date: DateTime = useSelector((state: RootState) => state.date);
    const open: Boolean = useSelector((state: RootState) => state.isOpen);
    const type: string = useSelector((state: RootState) => state.type);
    const cancelButtonRef = useRef<HTMLButtonElement>(null);

    const { data, loading } = useDateSlotQuery({
        variables: {
            where: { date: date.toSQLDate() }
        }
    });

    const dispatch = useDispatch();

    const [timeTo, setTimeTo] = useState("12:00");
    const [timeFrom, setTimeFrom] = useState("12:00");
    const [slots, setSlots]: [
        slots: number,
        setSlots: Dispatch<SetStateAction<number>>
    ] = useState(1);

    const [CreateDateSlot] = useCreateDateSlotsMutation();
    const [UpdateDateSlot] = useUpdateDateSlotsMutation();

    function closeModal() {
        dispatch(setIsOpen(false));
    }

    const handleCurrentDate = (e: any) => {

    }

    const createDateSlot = async (e: any) => {
        if (!loading && data!.dateSlots.length === 0 || !loading && data!.dateSlots.length > 0 && data!.dateSlots.find((d) => d.timeslots!.length === 0) != null) {
            const { errors, data } = await CreateDateSlot({
                variables: {
                    input: {
                        date: date.toSQLDate(),
                        timeslots: {
                            create: [
                                {
                                    node: {
                                        to: timeTo,
                                        from: timeFrom,
                                        slots: type === TIMESLOT_TYPE['Öppen bana'] ? slots : null,
                                        type: {
                                            connect: {
                                                where: {
                                                    node: {
                                                        type: type
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        },
                    }
                },
                update: (cache) => {
                    cache.evict({ fieldName: "dateSlots" });
                    cache.evict({ fieldName: "timeSlots" });
                    cache.evict({ fieldName: "users" });
                }
            });

            if (!errors) {
                closeModal();
                setTimeout(() => {
                    props.setActive(true);
                    /* @ts-ignore */
                    props.setHeight(`${props.bottomBarRef.current.scrollHeight}px`);
                }, 500);
            } else {
                console.log(errors);
            }
        } else {
            const { errors, data } = await UpdateDateSlot({
                variables: {
                    where: { date: date.toSQLDate() },
                    update: {
                        timeslots: [
                            {
                                create: [
                                    {
                                        node: {
                                            to: timeTo,
                                            from: timeFrom,
                                            slots: type === TIMESLOT_TYPE['Öppen bana'] ? slots : null,
                                            type: {
                                                connect: {
                                                    where: {
                                                        node: {
                                                            type: type
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                },
                update: (cache) => {
                    cache.evict({ fieldName: "dateSlots" });
                    cache.evict({ fieldName: "timeSlots" });
                    cache.evict({ fieldName: "users" });
                }
            });

            if (!errors) {
                closeModal();
                setTimeout(() => {
                    props.setActive(true);
                    /* @ts-ignore */
                    props.setHeight(`${props.bottomBarRef.current.scrollHeight}px`);
                }, 500);
            } else {
                console.log(errors);
            }
        }
    }

    return (
        <>
            <Transition appear show={open ? true : false} as={Fragment}>
                <Dialog
                    initialFocus={cancelButtonRef}
                    as="div"
                    className="fixed inset-0 z-50 overflow-y-auto transform transition-all"
                    onClose={closeModal}
                >
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
                    <div className="min-h-screen px-4 text-center transform transition-all">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl">
                                <Dialog.Title
                                    as="h3"
                                    className="md:text-lg font-medium leading-6 text-gray-900 mb-6"
                                >
                                    <div className="appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none transition focus:border-blue-400" aria-label="Title">Lägg till tid</div>
                                </Dialog.Title>
                                <Tab.Group defaultIndex={1} onChange={(index) => {
                                    if (index === 0) dispatch(setType("Självhushållning"))
                                    if (index === 1) dispatch(setType("Träning"))
                                    if (index === 2) dispatch(setType("Öppen bana"))
                                }}>
                                    <Tab.List className="flex p-1 space-x-1 bg-blue-100 transform transition-all">
                                        <Tab
                                            key={1}
                                            className={({ selected }) =>
                                                classNames(
                                                    'w-full py-2.5 text-xs md:text-sm leading-5 font-medium text-blue-400',
                                                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
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
                                                    'w-full py-2.5 text-xs md:text-sm leading-5 font-medium text-blue-400',
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
                                                    'w-full py-2.5 text-xs md:text-sm leading-5 font-medium text-blue-400',
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
                                                'bg-white p-3',
                                                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                                            )}
                                        >
                                            <div className="flex flex-row items-center">
                                                <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-xs md:text-sm" onChange={((e) => { handleCurrentDate(e.target.value) })} disabled type="date" value={date.toISODate()} />
                                                <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-xs md:text-sm flex flex-grow" onChange={((e) => { setTimeFrom(e.target.value) })} type="time" value={timeFrom} aria-label="Title" />
                                                <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-xs md:text-sm flex flex-grow" onChange={((e) => { setTimeTo(e.target.value) })} type="time" value={timeTo} aria-label="Title" />
                                            </div>
                                        </Tab.Panel>
                                        <Tab.Panel
                                            key={2}
                                            className={classNames(
                                                'bg-white p-3',
                                                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                                            )}
                                        >
                                            <div className="flex flex-row items-center">
                                                <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-xs md:text-sm" onChange={((e) => { handleCurrentDate(e.target.value) })} disabled type="date" value={date.toISODate()} />
                                                <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-xs md:text-sm flex flex-grow" onChange={((e) => { setTimeFrom(e.target.value) })} type="time" value={timeFrom} aria-label="Title" />
                                                <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-xs md:text-sm flex flex-grow" onChange={((e) => { setTimeTo(e.target.value) })} type="time" value={timeTo} aria-label="Title" />
                                            </div>
                                        </Tab.Panel>
                                        <Tab.Panel
                                            key={3}
                                            className={classNames(
                                                'bg-white p-3',
                                                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                                            )}
                                        >
                                            <div className="flex flex-row items-center">
                                                <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-xs md:text-sm" onChange={((e) => { handleCurrentDate(e.target.value) })} disabled type="date" value={date.toISODate()} />
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
                                        <button ref={cancelButtonRef} onClick={createDateSlot} className="transition-all bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 border-none rounded-md mt-4">
                                            Spara
                                        </button>
                                    </div>
                                </Tab.Group>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
});

AdminModal.displayName = "AdminModal";
export default AdminModal;