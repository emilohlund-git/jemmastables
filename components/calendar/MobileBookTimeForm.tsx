import React, { FormEvent, useState } from 'react'
import { FiMail, FiPhone, FiUser } from 'react-icons/fi';

interface Props {

}

const MobileBookTimeForm = (props: Props) => {
    const [formState, setFormState] = useState({
        name: '',
        phonenumber: '',
        email: ''
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    }

    return (
        <div className={`m-4 pb-2 transform duration-300 transition-height}`}>
            <form onSubmit={handleSubmit} className={`transition transform origin-top duration-100 ease-in-out}`}>
                <div className="flex flex-row items-center mt-4 mb-6">
                    <FiUser className="text-gray-500 mr-2" />
                    <input value={formState.name}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                name: e.target.value
                            })
                        } name="name" required className="w-full appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none transition text-sm" type="text" placeholder="Namn" />
                </div>
                <div className="flex flex-row items-center mb-6">
                    <FiPhone className="text-gray-500 mr-2" />
                    <input value={formState.phonenumber}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                phonenumber: e.target.value
                            })
                        } name="phonenumber" required className="w-full appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none transition text-sm" type="text" placeholder="Telefonnummer" />
                </div>
                <div className="flex flex-row items-center mb-3">
                    <FiMail className="text-gray-500 mr-2" />
                    <input value={formState.email}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                email: e.target.value
                            })
                        } name="email" required className="w-full appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none transition text-sm" type="email" placeholder="Epost" />
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
