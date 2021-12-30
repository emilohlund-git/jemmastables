import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useCreateHorseMutation, useCreatePartnerMutation, useHorsesQuery } from '../../generated/graphql';
import { RootState } from '../../redux/reducers';
import { HORSE_CATEGORIES } from '../../utils/constants';

interface Props {
    modalOpen: boolean;
    setModalOpen: any;
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

// eslint-disable-next-line react/display-name
export const AddPartnerModal = React.memo((props: Props) => {
    const [image, setImage] = useState() as any;

    const [CreatePartner] = useCreatePartnerMutation();

    const [formState, setFormState] = useState({
        name: '',
        description: '',
        website: '',
        logo: image
    });

    function closeModal() {
        props.setModalOpen(false);
    }

    const addPartner = async (e: any) => {
        e.preventDefault();

        const path = `/partners/${formState.name}`;

        const body = new FormData();
        body.append("file", image);
        body.append("path", path);

        const response = await fetch("http://localhost:4000/image4io/image", {
            method: "POST",
            body
        })
        const json = await response.json();

        await CreatePartner({
            variables: {
                input: [
                    {
                        name: formState.name,
                        description: formState.description,
                        website: formState.website,
                        logo: {
                            create: {
                                node: {
                                    url: json.uploadedFiles[0].url,
                                    path: json.uploadedFiles[0].imagePath,
                                    width: json.uploadedFiles[0].width,
                                    height: json.uploadedFiles[0].height,
                                }
                            }
                        }
                    }
                ]
            },
            update: (cache) => {
                cache.evict({ fieldName: "partners" });
            }
        })

        closeModal();
    }

    const invalidHandler = (e: any) => {
        console.log(e.target.name);
    }

    return (
        <>
            <Transition appear show={props.modalOpen ? true : false} as={Fragment}>
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
                                    <Dialog.Title
                                        as="h1"
                                        className="text-lg font-medium leading-6 text-gray-900 mb-6"
                                    >
                                        <div className="appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none transition focus:border-blue-400" aria-label="Title">Lägg till partner</div>
                                    </Dialog.Title>
                                    <form onInvalid={invalidHandler} onSubmit={addPartner}>
                                        <div className="flex flex-row items-center mb-6">
                                            <input value={formState.name}
                                                onChange={(e) =>
                                                    setFormState({
                                                        ...formState,
                                                        name: e.target.value
                                                    })
                                                } name="name" required className="w-full appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-sm" type="text" placeholder="Namn" />
                                        </div>
                                        <div className="flex flex-row items-center mb-6">
                                            <textarea value={formState.description}
                                                onChange={(e) =>
                                                    setFormState({
                                                        ...formState,
                                                        description: e.target.value
                                                    })
                                                } name="description" className="w-full appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-sm" placeholder="Beskrivning" />
                                        </div>
                                        <div className="flex flex-row items-center mb-6">
                                            <input value={formState.website}
                                                onChange={(e) =>
                                                    setFormState({
                                                        ...formState,
                                                        website: e.target.value
                                                    })
                                                } name="website" className="w-full appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-sm" type="text" placeholder="Hemsida" />
                                        </div>
                                        <div className="flex flex-row items-center mb-6">
                                            <label>Logo</label>
                                            <input onChange={(e) =>
                                                setImage(e.target.files![0]!)
                                            } name="logo" className="w-full appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-sm" type="file" placeholder="Logotyp" />
                                        </div>
                                        <div className="flex w-full justify-end">
                                            <button className="transition-all bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 border-none rounded-md mt-4">
                                                Lägg till
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