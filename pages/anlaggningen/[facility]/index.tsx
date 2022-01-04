import React, { useEffect, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { FacilityImage, useFacilityQuery, useUpdateFacilityMutation } from '../../../generated/graphql';
import { RootState } from '../../../redux/reducers';
import { SRLWrapper } from "simple-react-lightbox";
import DeleteFacilityImageButton from '../../../components/facilities/DeleteFacilityImageButton';
import Image from 'next/image';
import AddFacilityImage from '../../../components/facilities/AddFacilityImage';
import UploadControlImages from '../../../components/UploadControlImages';
import Spinner from '../../../components/Spinner';
import { withApollo } from '../../../utils/withApollo'

interface Props {

}

const Facility = (props: Props) => {
    const facility: string = useSelector((state: RootState) => state.facility);
    const admin: boolean = useSelector((state: RootState) => state.admin);
    const [profilePicture, setProfilePicture] = useState(null as any);
    const [image, setImage] = useState() as any;
    const [formState, setFormState] = useState({} as any);
    const { data, loading } = useFacilityQuery({
        variables: {
            where: {
                name: facility
            }
        }
    });

    useEffect(() => {
        if (!loading) {
            setFormState({
                name: data?.facilities[0].name,
                description: data?.facilities[0].description,
            });
            if (data?.facilities[0].images?.find((image) => image!.profile)) {
                const image = data!.facilities[0].images!.find((image) => image!.profile);
                setProfilePicture(image!.url);
            }
        }
    }, [data, loading])

    const [UpdateFacility] = useUpdateFacilityMutation();

    const handleSubmit = async (e: any) => {
        if (e.code === "Enter" && admin) {
            const { errors } = await UpdateFacility({
                variables: {
                    where: {
                        id: data?.facilities.find((f) => f.name === facility)?.id
                    },
                    update: {
                        name: formState.name,
                        description: formState.description,
                    }
                },
                update: (cache) => {
                    cache.evict({ fieldName: "facilities" });
                }
            });

            if (!errors) {
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
                                <p className="text-lg text-gray-600 lowercase">anläggnigen</p>
                                <IoIosArrowForward className="mt-2 text-gray-600 text-sm text-opacity-70" />
                                <p className="text-lg text-gray-600 lowercase">{facility}</p>
                            </div>
                            <div className="flex flex-col w-full" onKeyPress={handleSubmit}>
                                <div className="flex justify-center md:justify-start w-full">
                                    <input onChange={(e) => {
                                        setFormState({
                                            ...formState,
                                            name: e.target.value
                                        })
                                    }} disabled className="text-4xl w-full text-center md:text-left uppercase bg-black bg-opacity-0 outline-none font-thin text-white" value={formState.name || ''} />
                                </div>
                                <div className="flex justify-center md:justify-start w-full">
                                    <textarea onChange={(e) => {
                                        setFormState({
                                            ...formState,
                                            description: e.target.value
                                        })
                                    }} disabled={!admin} className="bg-black text-center md:text-left bg-opacity-0 outline-none font-thin" value={formState.description || ''} />
                                </div>
                            </div>
                            <SRLWrapper>
                                <div className="grid max-h-96 bg-gray-800 grid-cols-2 md:grid-cols-4 mt-4 overflow-y-scroll md:overscroll-contain shadow-2xl">
                                    {!loading && data!.facilities[0].images && data!.facilities[0].images.map((image, index) =>
                                        !image!.profile &&
                                        <div key={index} className={`relative w-full mr-2 cursor-pointer`}>
                                            {admin &&
                                                <DeleteFacilityImageButton image={image as FacilityImage} name={facility} />
                                            }
                                            <Image alt={facility} src={image!.url} layout="responsive" width={image!.width} height={image!.height} />
                                        </div>
                                    )}
                                    {admin &&
                                        <AddFacilityImage profile={false} />
                                    }
                                </div>
                            </SRLWrapper>
                        </div>
                        <div style={{ backgroundImage: `url("${profilePicture}")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} className="w-full h-screen ml-20 hidden md:flex">
                            {admin &&
                                <UploadControlImages id="profile_upload" path={`/horses/${name}`} profile={true}>
                                </UploadControlImages>
                            }
                        </div>
                    </div>
                    :
                    <Spinner />
                }
            </div>
        </div>
    )
}

export default withApollo({ ssr: true })(Facility)
