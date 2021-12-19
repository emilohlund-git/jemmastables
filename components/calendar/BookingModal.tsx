import { Dialog, Transition } from '@headlessui/react';
import { DateTime } from 'luxon';
import React, { Fragment, useState } from 'react';
import { FiClock, FiMail, FiPhone, FiUser } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useUpdateTimeSlotsMutation, useUpdateUsersMutation, useUsersQuery } from '../../generated/graphql';
import { setBookingIsOpen } from '../../redux/actions';
import { RootState } from '../../redux/reducers';

interface Props {

}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

// eslint-disable-next-line react/display-name
export const BookingModal = React.memo((props: Props) => {
    const date: DateTime = useSelector((state: RootState) => state.date);
    const time: { to: string, from: string } = useSelector((state: RootState) => state.time);
    const bookingOpen: Boolean = useSelector((state: RootState) => state.bookingIsOpen);
    const [formState, setFormState] = useState({
        name: '',
        phonenumber: '',
        email: ''
    });

    const dispatch = useDispatch();

    function closeModal() {
        dispatch(setBookingIsOpen(false));
    }

    const [UpdateTimeSlot] = useUpdateTimeSlotsMutation();
    const [UpdateUser] = useUpdateUsersMutation();
    const { data, loading } = useUsersQuery();

    const bookTimeSlot = async (e: any) => {
        e.preventDefault();
        if (data!.users[0].email != formState.email && !loading) {
            const { errors } = await UpdateTimeSlot({
                variables: {
                    where: {
                        to: time.to,
                        from: time.from,
                        date: { date: date.toSQLDate() }
                    },
                    update: {
                        users: [
                            {
                                create: [
                                    {
                                        node: {
                                            name: formState.name,
                                            phonenumber: formState.phonenumber,
                                            email: formState.email
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                },
                update: (cache) => {
                    cache.evict({ fieldName: "dateSlots" });
                }
            });
            if (!errors) {
                closeModal();
            } else {
                console.log(errors);
            }
        } else {
            const { errors } = await UpdateTimeSlot({
                variables: {
                    where: {
                        to: time.to,
                        from: time.from,
                        date: { date: date.toSQLDate() }
                    },
                    update: {
                        users: [
                            {
                                connect: [
                                    {
                                        where: {
                                            node: {
                                                email: formState.email
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
                }
            });
            if (!errors) {
                closeModal();
            } else {
                console.log(errors);
            }
        }
    }

    return (
        <>
            <Transition appear show={bookingOpen ? true : false} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-50 overflow-y-auto transform transition-all"
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
                                <div className={classNames(
                                    'bg-white rounded-xl p-3',
                                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                                )}>
                                    <div className="flex flex-row items-center mb-4">
                                        <FiClock className="text-gray-500 mr-2" />
                                        <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-sm" disabled type="date" value={date.toISODate()} />
                                        <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-sm" disabled type="time" value={time.from} aria-label="Title" />
                                        <input className="appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-sm" disabled type="time" value={time.to} aria-label="Title" />
                                    </div>
                                    <form onSubmit={bookTimeSlot}>
                                        <div className="flex flex-row items-center mb-4">
                                            <FiUser className="text-gray-500 mr-2" />
                                            <input value={formState.name}
                                                onChange={(e) =>
                                                    setFormState({
                                                        ...formState,
                                                        name: e.target.value
                                                    })
                                                } className="w-full appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-sm" type="text" placeholder="Namn" />
                                        </div>
                                        <div className="flex flex-row items-center mb-4">
                                            <FiPhone className="text-gray-500 mr-2" />
                                            <input value={formState.phonenumber}
                                                onChange={(e) =>
                                                    setFormState({
                                                        ...formState,
                                                        phonenumber: e.target.value
                                                    })
                                                } className="w-full appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-sm" type="text" placeholder="Telefonnummer" />
                                        </div>
                                        <div className="flex flex-row items-center mb-4">
                                            <FiMail className="text-gray-500 mr-2" />
                                            <input value={formState.email}
                                                onChange={(e) =>
                                                    setFormState({
                                                        ...formState,
                                                        email: e.target.value
                                                    })
                                                } className="w-full appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-sm" type="email" placeholder="Epost" />
                                        </div>
                                        <div className="flex w-full justify-end">
                                            <button className="transition-all bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 border-none rounded-md mt-4">
                                                Spara
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
});