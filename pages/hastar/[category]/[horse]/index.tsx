import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import HorseGallery from '../../../../components/horses/HorseGallery';
import HorseGalleryImage from '../../../../components/horses/HorseGalleryImage';
import Spinner from '../../../../components/Spinner';
import { useHorseQuery, useUpdateHorsesMutation } from '../../../../generated/graphql';
import { RootState } from '../../../../redux/reducers';

interface Props {

}

const Horse = (props: Props) => {
    const category: string = useSelector((state: RootState) => state.category);
    const name: string = useSelector((state: RootState) => state.horse);
    const { data, loading } = useHorseQuery({
        variables: {
            horsesWhere: {
                name: name
            }
        }
    });
    const [UpdateHorse] = useUpdateHorsesMutation();
    const [formState, setFormState] = useState({} as any);

    useEffect(() => {
        if (!loading) {
            setFormState({
                name: data?.horses[0].name,
                nickname: data?.horses[0].nickname,
                gender: data?.horses[0].gender,
                birthyear: data?.horses[0].birthyear,
                owner: data?.horses[0].owner,
                after: data?.horses[0].after
            });
        }
    }, [data, loading])

    const handleSubmit = async (e: any) => {
        if (e.code === "Enter") {
            const { errors } = await UpdateHorse({
                variables: {
                    where: {
                        name: formState.name
                    },
                    update: {
                        name: formState.name,
                        nickname: formState.nickname,
                        gender: formState.gender,
                        birthyear: formState.birthyear,
                        owner: formState.owner,
                        after: formState.after
                    }
                },
                update: (cache) => {
                    cache.evict({ fieldName: "horses" });
                }
            });

            if (!errors) {
              alert("Saved");
            } else {

            }
        }
    }

    return (
        <div className="bg-gray-900">
            <div className="flex h-screen bg-gradient-to-b from-gray-900 to-gray-800">
                {!loading && data! ?
                    <div className="flex w-full">
                        <div className="text-white ml-10 mt-10 md:my-20 w-full">
                            <div className="flex mb-10">
                                {/* 
                                <p className="text-lg text-gray-600 uppercase">hästar</p>
                                <IoIosArrowForward className="mt-2 text-yellow-500 text-opacity-70" />
                                <p className="text-lg text-gray-600 uppercase">{category}</p>
                                <IoIosArrowForward className="mt-2 text-yellow-500 text-opacity-70" />
                                <p className="text-lg text-gray-600 uppercase">{name}</p>
                                */}
                            </div>
                            <form onKeyPress={handleSubmit}>
                                <div className="flex">
                                    <input onChange={(e) => {
                                        setFormState({
                                            ...formState,
                                            name: e.target.value
                                        })
                                    }} className="text-3xl uppercase bg-black bg-opacity-0 outline-none text-white text-opacity-70 font-semibold" value={formState.name || ''} />&nbsp;
                                </div>
                                <input onChange={(e) => {
                                    setFormState({
                                        ...formState,
                                        nickname: e.target.value
                                    })
                                }} className="bg-black bg-opacity-0 outline-none" value={formState.nickname || ''} />
                                <div className="flex mt-10">
                                    <div className="flex flex-col">
                                        <p className="mr-10 text-sm text-gray-400 lowercase">kön</p>
                                        <input onChange={(e) => {
                                            setFormState({
                                                ...formState,
                                                gender: e.target.value
                                            })
                                        }} className="appearance-none outline-none bg-black bg-opacity-0 text-lg font-semibold" value={formState.gender || ''} />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm text-gray-400 lowercase">FÖDELSEÅR</p>
                                        <input onChange={(e) => {
                                            setFormState({
                                                ...formState,
                                                birthyear: e.target.value
                                            })
                                        }} className="appearance-none outline-none bg-black bg-opacity-0 text-lg font-semibold" value={formState.birthyear || ''} />
                                    </div>
                                </div>
                                <div className="flex flex-col mt-10">
                                    <div className="flex flex-col">
                                        <p className="mr-10 text-sm text-gray-400 lowercase">ägare</p>
                                        <input onChange={(e) => {
                                            setFormState({
                                                ...formState,
                                                owner: e.target.value
                                            })
                                        }} className="appearance-none outline-none bg-black bg-opacity-0 text-lg font-semibold" value={formState.owner || ''} />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm text-gray-400 lowercase">efter</p>
                                        <input onChange={(e) => {
                                            setFormState({
                                                ...formState,
                                                after: e.target.value
                                            })
                                        }} className="appearance-none outline-none bg-black bg-opacity-0 text-lg font-semibold" value={formState.after || ''} />
                                    </div>
                                </div>
                            </form>
                            <div className="self-end">
                                <HorseGallery>
                                    {data!.horses[0].images.map((image, index) => {
                                        return (
                                            <HorseGalleryImage key={index} image={image as string} />
                                        )
                                    })}
                                </HorseGallery>
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url("${data!.horses[0].images[0]}")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} className="w-full ml-20">
                        </div>
                    </div>
                    :
                    <Spinner />
                }
            </div>
        </div>
    )
}

export default Horse
