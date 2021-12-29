import React, { useEffect, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { SRLWrapper } from "simple-react-lightbox";
import Spinner from '../../../../components/Spinner';
import { useHorseQuery, useUpdateHorsesMutation } from '../../../../generated/graphql';
import { RootState } from '../../../../redux/reducers';
import Image from 'next/image';
import UploadControl from '../../../../components/UploadControl';
import AddHorseImage from '../../../../components/horses/AddHorseImage';

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
    const [toggler, setToggler] = useState(false);

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
        <div className="flex flex-col justify-center bg-gray-900">
            <div className="h-screen bg-gradient-to-b from-gray-900 to-gray-800">
                {!loading && data! ?
                    <div className="flex w-full">
                        <div className="text-white md:ml-10 mt-10 md:my-20 w-full">
                            <div className="hidden md:flex mb-10">
                                <p className="text-lg text-gray-600 lowercase">hästar</p>
                                <IoIosArrowForward className="mt-2 text-gray-600 text-opacity-70" />
                                <p className="text-lg text-gray-600 lowercase">{category}</p>
                                <IoIosArrowForward className="mt-2 text-gray-600 text-opacity-70" />
                                <p className="text-lg text-gray-600 lowercase">{name}</p>

                            </div>
                            <div className="flex flex-col w-full" onKeyPress={handleSubmit}>
                                <div className="flex justify-center md:justify-start w-full">
                                    <input onChange={(e) => {
                                        setFormState({
                                            ...formState,
                                            name: e.target.value
                                        })
                                    }} className="text-4xl w-full text-center md:text-left uppercase bg-black bg-opacity-0 outline-none font-thin text-white" value={formState.name || ''} />
                                </div>
                                <div className="flex justify-center md:justify-start w-full">
                                    <input onChange={(e) => {
                                        setFormState({
                                            ...formState,
                                            nickname: e.target.value
                                        })
                                    }} className="bg-black text-center md:text-left bg-opacity-0 outline-none font-thin" value={formState.nickname || ''} />
                                </div>
                                <div className="flex text-center md:text-left mt-10">
                                    <div className="flex flex-col w-full md:w-1/3">
                                        <p className="md:mr-10 text-sm text-gray-400 lowercase">kön</p>
                                        <input onChange={(e) => {
                                            setFormState({
                                                ...formState,
                                                gender: e.target.value
                                            })
                                        }} className="w-full appearance-none text-center md:text-left outline-none bg-black bg-opacity-0 text-lg font-thin" value={formState.gender || ''} />
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <p className="text-sm text-gray-400 lowercase">FÖDELSEÅR</p>
                                        <input onChange={(e) => {
                                            setFormState({
                                                ...formState,
                                                birthyear: e.target.value
                                            })
                                        }} className="w-full text-center md:text-left md:w-20 appearance-none outline-none bg-black bg-opacity-0 text-lg font-thin" value={formState.birthyear || ''} />
                                    </div>
                                </div>
                                <div className="flex flex-col mt-10">
                                    <div className="flex flex-col">
                                        <p className="md:mr-10 text-sm text-center md:text-left text-gray-400 lowercase">ägare</p>
                                        <input onChange={(e) => {
                                            setFormState({
                                                ...formState,
                                                owner: e.target.value
                                            })
                                        }} className="appearance-none text-center md:text-left outline-none bg-black bg-opacity-0 text-lg font-thin" value={formState.owner || ''} />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm text-center md:text-left text-gray-400 lowercase">efter</p>
                                        <input onChange={(e) => {
                                            setFormState({
                                                ...formState,
                                                after: e.target.value
                                            })
                                        }} className="appearance-none text-center md:text-left outline-none bg-black bg-opacity-0 text-lg font-thin" value={formState.after || ''} />
                                    </div>
                                </div>
                            </div>
                            <SRLWrapper>
                                <div className="flex mt-4">
                                    {data!.horses[0].images[0] !== "" && data!.horses[0].images.map((image, index) => {
                                        return (
                                            <div key={index} className="relative h-52 w-1/3 mr-2 cursor-pointer">
                                                <Image alt={name} src={image!} layout="fill" objectFit="cover" />
                                            </div>
                                        )
                                    })}
                                    <AddHorseImage/>
                                </div>
                            </SRLWrapper>
                        </div>
                        <div style={{ backgroundImage: `url("${data!.horses[0].profile}")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} className="w-full ml-20 hidden md:flex">
                            <UploadControl path={`/horses/${name}/profile`} currentImage={data!.horses[0].profile!.split("https://cdn.image4.io/jemmastables/")[1]} />
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
