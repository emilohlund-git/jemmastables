import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useCreateHorseMutation } from '../../generated/graphql';
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
export const AddHorseModal = React.memo((props: Props) => {
    const [image, setImage] = useState() as any;
    const category: string = useSelector((state: RootState) => state.category);

    const [formState, setFormState] = useState({
        name: '',
        nickname: '',
        movie: '',
        profile: image,
        images: null,
        owner: '',
        after: '',
        birthyear: '',
        gender: '',
        color: '',
        category: category
    });

    useEffect(() => {
        setFormState({
            ...formState,
            category: category
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category])

    const [CreateHorse] = useCreateHorseMutation();

    function closeModal() {
        props.setModalOpen(false);
    }

    const addHorse = async (e: any) => {
        e.preventDefault();

        const body = new FormData();
        body.append("file", image);
        body.append("path", "/horses/" + formState.name);
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/image4io/image`, {
            method: "POST",
            body
        })
        const json = await response.json();
        const _image = {
            url: json.uploadaedFiles[0].url,
            path: json.uploadedFiles[0].imagePath,
            width: json.uploadedFiles[0].width,
            height: json.uploadedFiles[0].height,
            profile: true
        }
        const { errors } = await CreateHorse({
            variables: {
                input: {
                    name: formState.name,
                    nickname: formState.nickname,
                    movie: formState.movie,
                    images: {
                        create: [
                            {
                                node: _image
                            }
                        ]
                    },
                    owner: formState.owner,
                    after: formState.after,
                    birthyear: formState.birthyear,
                    gender: formState.gender,
                    color: formState.color,
                    category: {
                        connect: {
                            where: {
                                node: {
                                    category: formState.category
                                }
                            }
                        }
                    }
                }
            },
            update: (cache) => {
                cache.evict({ fieldName: "horses" });
            }
        });

        if (!errors) {
            closeModal();
        } else {
            console.log(errors);
        }
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
                                <div className={classNames(
                                    'bg-white p-3',
                                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                                )}>
                                    <Dialog.Title
                                        as="h1"
                                        className="text-lg font-medium leading-6 text-gray-900 mb-6"
                                    >
                                        <div className="appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none transition focus:border-blue-400" aria-label="Title">Lägg till häst</div>
                                    </Dialog.Title>
                                    <form onInvalid={invalidHandler} onSubmit={addHorse}>
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
                                            <input value={formState.nickname}
                                                onChange={(e) =>
                                                    setFormState({
                                                        ...formState,
                                                        nickname: e.target.value
                                                    })
                                                } name="nickname" className="w-full appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-sm" type="text" placeholder="Smeknamn" />
                                        </div>
                                        <div className="flex flex-row items-center mb-6">
                                            <input value={formState.movie}
                                                onChange={(e) =>
                                                    setFormState({
                                                        ...formState,
                                                        movie: e.target.value
                                                    })
                                                } name="movie" className="w-full appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-sm" type="text" placeholder="Film" />
                                        </div>
                                        <div className="flex flex-row items-center mb-6">
                                            <label>Profilbild</label>
                                            <input onChange={(e) =>
                                                setImage(e.target.files![0]!)
                                            } name="profile" className="w-full appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-sm" type="file" placeholder="Profilbild" />
                                        </div>
                                        <div className="flex flex-row items-center mb-6">
                                            <input value={formState.owner}
                                                onChange={(e) =>
                                                    setFormState({
                                                        ...formState,
                                                        owner: e.target.value
                                                    })
                                                } name="owner" className="w-full appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-sm" type="text" placeholder="Ägare" />
                                        </div>
                                        <div className="flex flex-row items-center mb-6">
                                            <input value={formState.after}
                                                onChange={(e) =>
                                                    setFormState({
                                                        ...formState,
                                                        after: e.target.value
                                                    })
                                                } name="after" className="w-full appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-sm" type="text" placeholder="Efter" />
                                        </div>
                                        <div className="flex flex-row items-center mb-6">
                                            <input value={formState.birthyear}
                                                onChange={(e) =>
                                                    setFormState({
                                                        ...formState,
                                                        birthyear: e.target.value
                                                    })
                                                } name="birthyear" className="w-full appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-sm" type="text" placeholder="Födelseår" />
                                        </div>
                                        <div className="flex flex-row items-center mb-6">
                                            <input value={formState.gender}
                                                onChange={(e) =>
                                                    setFormState({
                                                        ...formState,
                                                        gender: e.target.value
                                                    })
                                                } name="gender" className="w-full appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-sm" type="text" placeholder="Kön" />
                                        </div>
                                        <div className="flex flex-row items-center mb-6">
                                            <input value={formState.color}
                                                onChange={(e) =>
                                                    setFormState({
                                                        ...formState,
                                                        color: e.target.value
                                                    })
                                                } name="color" className="w-full appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-sm" type="text" placeholder="Färg" />
                                        </div>
                                        <div className="flex flex-row items-center mb-6">
                                            <select value={formState.category}
                                                onChange={(e) =>
                                                    setFormState({
                                                        ...formState,
                                                        category: e.target.value
                                                    })
                                                } name="color" className="w-full appearance-none bg-transparent text-gray-700 mr-2 py-1 px-2 leading-tight focus:outline-none border-b-2 transition focus:border-blue-400 text-sm">
                                                <option value={HORSE_CATEGORIES.Tävlingshästar}>Tävlingshäst</option>
                                                <option value={HORSE_CATEGORIES.Unghästar}>Unghäst</option>
                                                <option value={HORSE_CATEGORIES.Avelsto}>Avelsto</option>
                                            </select>
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