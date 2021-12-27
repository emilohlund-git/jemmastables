import { Tab } from '@headlessui/react'
import { FiMail, FiPhone, FiUser } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useState, FormEvent } from 'react';
import { User, useUpdateUsersMutation } from '../../generated/graphql';
import { RootState } from '../../redux/reducers';
import BookedTimeSlots from './BookedTimeSlots';
import { setUser } from '../../redux/actions';

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function ProfileContent() {
    const user: User = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const [formState, setFormState] = useState({
        phonenumber: user.phonenumber,
        name: user.name
    });

    const [UpdateUser] = useUpdateUsersMutation();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const updatedUser = await UpdateUser({
            variables: {
                where: {
                    email: user.email
                },
                update: {
                    phonenumber: formState.phonenumber,
                    name: formState.name
                }
            },
            update: (cache) => {
                cache.evict({ fieldName: "users" })
            }
        })

        dispatch(setUser(updatedUser.data?.updateUsers.users[0]));
    }

    return (
        <div className="w-full max-w-md px-2 py-16 sm:px-0">
            <Tab.Group>
                <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
                    <Tab
                        key={"Bokade Tider"}
                        className={({ selected }) =>
                            classNames(
                                'w-full py-2.5 text-sm leading-5 font-medium text-gray-700 rounded-lg',
                                'focus:outline-none',
                                selected
                                    ? 'bg-white shadow'
                                    : 'text-gray-500 hover:bg-white/[0.12] hover:text-gray'
                            )
                        }
                    >
                        bokade tider
                    </Tab>
                    <Tab
                        key={"Något annat"}
                        className={({ selected }) =>
                            classNames(
                                'w-full py-2.5 text-sm leading-5 font-medium text-gray-700 rounded-lg',
                                'focus:outline-none',
                                selected
                                    ? 'bg-white shadow'
                                    : 'text-gray-500 hover:bg-white/[0.12] hover:text-gray'
                            )
                        }
                    >
                        mina uppgifter
                    </Tab>
                </Tab.List>
                <Tab.Panels className="mt-2">
                    <Tab.Panel
                        className={classNames(
                            'bg-white rounded-xl p-3',
                            'focus:outline-none'
                        )}
                    >
                        <BookedTimeSlots />
                    </Tab.Panel>
                    <Tab.Panel
                        className={classNames(
                            'bg-white rounded-xl p-3',
                            'focus:outline-none'
                        )}
                    >
                        <form onSubmit={handleSubmit} className={`transition transform origin-top duration-100 ease-in-out}`}>
                            <div className="flex flex-row items-center mt-4 mb-6">
                                <FiUser className="text-gray-500 mr-2" />
                                <input value={formState.name} onChange={(e) => setFormState({
                                    ...formState,
                                    name: e.target.value
                                })}
                                    name="name" className="w-full appearance-none bg-transparent text-gray-500 mr-2 py-1 px-2 leading-tight focus:outline-none transition text-sm" type="text" placeholder="Namn" />
                            </div>
                            <div className="flex flex-row items-center mb-6">
                                <FiPhone className="text-gray-500 mr-2" />
                                <input value={formState.phonenumber} onChange={(e) => setFormState({
                                    ...formState,
                                    phonenumber: e.target.value
                                })} name="phonenumber" className="w-full appearance-none bg-transparent text-gray-500 mr-2 py-1 px-2 leading-tight focus:outline-none transition text-sm" type="text" placeholder="Telefonnummer" />
                            </div>
                            <div className="flex flex-row items-center mb-3">
                                <FiMail className="text-gray-500 mr-2" />
                                <input value={user.email} name="email" disabled className="w-full appearance-none bg-transparent text-gray-500 mr-2 py-1 px-2 leading-tight focus:outline-none transition text-sm" type="email" placeholder="Epost" />
                            </div>
                            <div className="flex w-full justify-end">
                                <button className="transition-all w-full bg-gray-900 text-white font-bold py-2 px-4 border-none rounded-md mt-4">
                                    ändra
                                </button>
                            </div>
                        </form>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}