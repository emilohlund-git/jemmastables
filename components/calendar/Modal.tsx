import { Dialog, Tab, Transition } from '@headlessui/react';
import { DateTime } from 'luxon';
import { Fragment, useState } from 'react';
import { FiClock } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useCreateBookedTimeMutation } from '../../generated/graphql';
import { RootState } from '../../redux/reducers';

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setCurrentTitle: React.Dispatch<React.SetStateAction<string>>;
    setCurrentTimeFrom: React.Dispatch<React.SetStateAction<string>>;
    setCurrentTimeTo: React.Dispatch<React.SetStateAction<string>>;
    setType: React.Dispatch<React.SetStateAction<number>>;
    type: number;
    setCurrentDate: React.Dispatch<React.SetStateAction<DateTime>>;
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function MyModal(props: Props) {
    const date: DateTime = useSelector((state: RootState) => state.date);
    const [timeFrom, setTimeFrom] = useState("12:00");
    const [timeTo, setTimeTo] = useState("12:00");
    const [title, setTitle] = useState("");

    const [book] = useCreateBookedTimeMutation();

    function closeModal() {
        props.setOpen(false)
    }

    const handleCurrentDate = (e: any) => {
        const numbers = e.split("-");
        const year = parseInt(numbers[0]);
        const month = parseInt(numbers[1]);
        const day = parseInt(numbers[2]);
        props.setCurrentDate(DateTime.local(year, month, day));
    }

    const handleTimeSave = async (e: any) => {
        const { errors } = await book({
            variables: {
                input: {
                    date: date.toSQLDate(),
                    type: props.type.toString(),
                    bookedTimeId: uuidv4(),
                }
            },
            update: (cache) => {
                cache.evict({ fieldName: "bookedTimes" });
            }
        })

        if (!errors) {
            closeModal();
        } else {
            console.log(errors);
        }
    }

    return (
        <>
            <Transition appear show={props.open} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto transform transition-all"
                    onClose={closeModal}
                >
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
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900 mb-6"
                                >
                                    <input className="appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400" value={title} type="text" onChange={((e) => { setTitle(e.target.value), props.setCurrentTitle(e.target.value) })} placeholder="Lägg till titel" aria-label="Title" />
                                </Dialog.Title>
                                <Tab.Group defaultIndex={props.type} onChange={(index) => props.setType(index)}>
                                    <Tab.List className="flex p-1 space-x-1 bg-blue-100 rounded-xl transform transition-all">
                                        <Tab
                                            key={1}
                                            className={({ selected }) =>
                                                classNames(
                                                    'w-full py-2.5 text-sm leading-5 font-medium text-blue-400 rounded-lg',
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
                                                    'w-full py-2.5 text-sm leading-5 font-medium text-blue-400 rounded-lg',
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
                                                    'w-full py-2.5 text-sm leading-5 font-medium text-blue-400 rounded-lg',
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
                                                <FiClock className="text-gray-500 mr-2" />
                                                <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-sm" onChange={((e) => { props.setCurrentTitle(e.target.value), handleCurrentDate(e.target.value) })} disabled type="date" value={date.toISODate()} />
                                                <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-sm" onChange={((e) => { setTimeFrom(e.target.value), props.setCurrentTimeFrom(e.target.value) })} type="time" value={timeFrom} aria-label="Title" />
                                                <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-sm" onChange={((e) => { setTimeTo(e.target.value), props.setCurrentTimeTo(e.target.value) })} type="time" value={timeTo} aria-label="Title" />
                                            </div>
                                            <div className="flex w-full justify-end">
                                                <button onClick={handleTimeSave} className="transition-all bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 border-none rounded-md mt-4">
                                                    Spara
                                                </button>
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
                                                <FiClock className="text-gray-500 mr-2" />
                                                <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-sm" onChange={((e) => { props.setCurrentTitle(e.target.value), handleCurrentDate(e.target.value) })} disabled type="date" value={date.toISODate()} />
                                                <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-sm" onChange={((e) => { setTimeFrom(e.target.value), props.setCurrentTimeFrom(e.target.value) })} type="time" value={timeFrom} aria-label="Title" />
                                                <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-sm" onChange={((e) => { setTimeTo(e.target.value), props.setCurrentTimeTo(e.target.value) })} type="time" value={timeTo} aria-label="Title" />
                                            </div>
                                            <div className="flex w-full justify-end">
                                                <button onClick={handleTimeSave} className="transition-all bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 border-none rounded-md mt-4">
                                                    Spara
                                                </button>
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
                                                <FiClock className="text-gray-500 mr-2" />
                                                <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-sm" onChange={((e) => { props.setCurrentTitle(e.target.value), handleCurrentDate(e.target.value) })} disabled type="date" value={date.toISODate()} />
                                                <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-sm" onChange={((e) => { setTimeFrom(e.target.value), props.setCurrentTimeFrom(e.target.value) })} type="time" value={timeFrom} aria-label="Title" />
                                                <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-sm" onChange={((e) => { setTimeTo(e.target.value), props.setCurrentTimeTo(e.target.value) })} type="time" value={timeTo} aria-label="Title" />
                                            </div>
                                            <div className="flex w-full justify-end">
                                                <button onClick={handleTimeSave} className="transition-all bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 border-none rounded-md mt-4">
                                                    Spara
                                                </button>
                                            </div>
                                        </Tab.Panel>
                                    </Tab.Panels>
                                </Tab.Group>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}