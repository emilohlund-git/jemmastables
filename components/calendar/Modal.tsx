import { Dialog, Transition, Tab } from '@headlessui/react'
import { DateTime } from 'luxon';
import { Fragment, useState } from 'react'
import { FiClock } from 'react-icons/fi';

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    day: DateTime;
    currentTitle: any;
    currentTimeFrom: any;
    currentTimeTo: any;
    setType: any;
    type: any;
    setCurrentDate: any;
}

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function MyModal(props: Props) {
    const [date, setDate] = useState(props.day.toISODate());
    const [timeFrom, setTimeFrom] = useState("12:00");
    const [timeTo, setTimeTo] = useState("12:00");
    const [title, setTitle] = useState("");

    function closeModal() {
        props.setOpen(false)
    }

    const handleSave = (e: any) => {
        closeModal();
    }

    const handleCurrentDate = (e: any) => {
        const numbers = e.split("-");
        const year = parseInt(numbers[0]);
        const month = parseInt(numbers[1]);
        const day = parseInt(numbers[2]);
        props.setCurrentDate(DateTime.local(year, month, day));
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
                                    <input className="appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400" value={title} type="text" onChange={((e) => { setTitle(e.target.value), props.currentTitle(e.target.value) })} placeholder="Lägg till titel" aria-label="Title" />
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
                                                <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-sm" onChange={((e) => { setDate(e.target.value), props.currentTitle(e.target.value), handleCurrentDate(e.target.value) })} disabled type="date" value={date} />
                                                <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-sm" onChange={((e) => { setTimeFrom(e.target.value), props.currentTimeFrom(e.target.value) })} type="time" value={timeFrom} aria-label="Title" />
                                                <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-sm" onChange={((e) => { setTimeTo(e.target.value), props.currentTimeTo(e.target.value) })} type="time" value={timeTo} aria-label="Title" />
                                            </div>
                                            <div className="flex w-full justify-end">
                                                <button className="transition-all bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 border-none rounded-md mt-4" onClick={handleSave}>
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