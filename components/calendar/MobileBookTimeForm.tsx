import { DateTime } from 'luxon';
import React, { FormEvent } from 'react';
import { FiMail, FiPhone, FiUser } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { User, useUpdateUsersMutation } from '../../generated/graphql';
import { RootState } from '../../redux/reducers';

interface Props {
    toggleAccordion: any
}

const MobileBookTimeForm = (props: Props) => {
    const user: User = useSelector((state: RootState) => state.user);
    const date: DateTime = useSelector((state: RootState) => state.date);
    const time: {
        to: string,
        from: string
    } = useSelector((state: RootState) => state.time);

    const [UpdateUser] = useUpdateUsersMutation();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const { errors } = await UpdateUser({
            variables: {
                where: {
                    email: user.email
                },
                update: {
                    timeslots: [
                        {
                            connect: [
                                {
                                    where: {
                                        node: {
                                            to: time.to,
                                            from: time.from,
                                            date: {
                                                date: date.toSQLDate()
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
                cache.evict({ fieldName: "users" })
            }
        });

        if (!errors) {
            props.toggleAccordion();
        }
    }

    return (
        <div className={`m-4 pb-2 transform duration-300 transition-height}`}>
            <form onSubmit={handleSubmit} className={`transition transform origin-top duration-100 ease-in-out}`}>
                <div className="flex flex-row items-center mt-4 mb-6">
                    <FiUser className="text-gray-500 mr-2" />
                    <input value={user.name}
                        name="name" disabled className="w-full appearance-none bg-transparent text-gray-500 mr-2 py-1 px-2 leading-tight focus:outline-none transition text-sm" type="text" placeholder="Namn" />
                </div>
                <div className="flex flex-row items-center mb-6">
                    <FiPhone className="text-gray-500 mr-2" />
                    <input value={user.phonenumber} name="phonenumber" disabled className="w-full appearance-none bg-transparent text-gray-500 mr-2 py-1 px-2 leading-tight focus:outline-none transition text-sm" type="text" placeholder="Telefonnummer" />
                </div>
                <div className="flex flex-row items-center mb-3">
                    <FiMail className="text-gray-500 mr-2" />
                    <input value={user.email} name="email" disabled className="w-full appearance-none bg-transparent text-gray-500 mr-2 py-1 px-2 leading-tight focus:outline-none transition text-sm" type="email" placeholder="Epost" />
                </div>
                <div className="flex w-full justify-end">
                    <button className="transition-all w-full bg-gray-900 text-white font-bold py-2 px-4 border-none rounded-md mt-4">
                        Boka
                    </button>
                </div>
            </form>
        </div>
    )
}

export default MobileBookTimeForm
