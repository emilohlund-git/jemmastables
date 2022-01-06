import { Tab } from '@headlessui/react';
import { FormEvent, useEffect, useState } from 'react';
import { FiMail, FiPhone, FiUser } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { User, useUpdateUsersMutation, useUserQuery } from '../../generated/graphql';
import { setUser } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import Spinner from '../Spinner';
import BookedTimeSlots from './BookedTimeSlots';

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function ProfileContent() {
    const user: User = useSelector((state: RootState) => state.user);
    const [currentUser, setCurrentUser] = useState({} as User);
    const { data, loading } = useUserQuery({
        variables: {
            where: {
                uid: user.uid
            }
        }
    })
    const dispatch = useDispatch();

    useEffect(() => {
        if (!loading) {
            setCurrentUser(data?.users[0] as User);
        }
        return
    }, [loading, user])

    const [formState, setFormState] = useState({
        phonenumber: user.phonenumber,
        name: user.name,
        email: user.email
    });

    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (formState.name === user.name && formState.phonenumber === user.phonenumber && formState.email === user.email) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
        return
    }, [formState, user.name, user.phonenumber, user.email])

    const [UpdateUser] = useUpdateUsersMutation();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const { data: updatedUser, errors } = await UpdateUser({
            variables: {
                where: {
                    uid: user.uid
                },
                update: {
                    phonenumber: formState.phonenumber,
                    name: formState.name,
                    email: formState.email
                }
            },
            update: (cache) => {
                cache.evict({ fieldName: "users" })
            }
        })

        if (errors) {
            toast.error("Misslyckades att uppdatera")
        } else {
            if (updatedUser) {
                toast.success("Uppdaterad");
                dispatch(setUser(updatedUser.updateUsers!.users![0] as User));
            }
        }
    }

    return (
        <div className="w-full max-w-md px-2 sm:px-0 shadow-2xl">
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
                            'bg-white rounded-xl p-3 max-h-96 scrollbar-none overflow-y-scroll',
                            'focus:outline-none'
                        )}
                    >
                        {!loading ?
                            <BookedTimeSlots user={currentUser} />
                            :
                            <Spinner />
                        }
                    </Tab.Panel>
                    <Tab.Panel
                        className={classNames(
                            'bg-white rounded-xl p-3',
                            'focus:outline-none'
                        )}
                    >
                        <div className={`transition transform origin-top duration-100 ease-in-out}`}>
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
                                <input value={formState.phonenumber || ""} onChange={(e) => setFormState({
                                    ...formState,
                                    phonenumber: e.target.value
                                })} name="phonenumber" className="w-full appearance-none bg-transparent text-gray-500 mr-2 py-1 px-2 leading-tight focus:outline-none transition text-sm" type="text" placeholder="Telefonnummer" />
                            </div>
                            <div className="flex flex-row items-center mb-3">
                                <FiMail className="text-gray-500 mr-2" />
                                <input value={formState.email} onChange={(e) => setFormState({
                                    ...formState,
                                    email: e.target.value
                                })} name="email" className="w-full appearance-none bg-transparent text-gray-500 mr-2 py-1 px-2 leading-tight focus:outline-none transition text-sm" type="email" placeholder="Epost" />
                            </div>
                            <div className="flex w-full justify-center">
                                <button onClick={handleSubmit} disabled={disabled} className="disabled:bg-gray-300 disabled:cursor-default transition-all my-6 mb-9 shadow-sm bg-black text-white self-center rounded-3xl px-4 w-full py-2 text-sm">
                                    uppdatera
                                </button>
                            </div>
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}