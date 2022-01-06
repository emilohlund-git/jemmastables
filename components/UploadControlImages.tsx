import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { FacilityImage, HorseImage, useCreateFacilityImagesMutation, useCreateHorseImagesMutation, useDeleteFacilityImagesMutation, useDeleteHorseImagesMutation } from '../generated/graphql';
import { RootState } from '../redux/reducers';
import axois from 'axios';
import axios from 'axios';

interface Props {
    children: any
    path: string
    profile: boolean
    id: string
    type?: string
    horseImage?: HorseImage
    facilityImage?: FacilityImage
}

const UploadControlImages = ({ children, path, profile, id, type, facilityImage, horseImage }: Props) => {
    const [CreateHorseImages] = useCreateHorseImagesMutation();
    const [DeleteHorseImages] = useDeleteHorseImagesMutation();
    const [CreateFacilityImages] = useCreateFacilityImagesMutation();
    const [DeleteFacilityImages] = useDeleteFacilityImagesMutation();
    const name: string = useSelector((state: RootState) => state.horse);
    const facility: string = useSelector((state: RootState) => state.facility);

    const handleUpload = async (e: any) => {
        console.log(profile);

        if (e.target.files.length > 0) {
            // Delete image from Image4IO if there are any:
            if (profile) {
                let deletePath = '';
                if (facilityImage)
                    deletePath = facilityImage.path;
                if (horseImage)
                    deletePath = horseImage.path;
                await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/image4io/image`, {
                    data: {
                        path: deletePath
                    }
                })
            }

            const body = new FormData();

            body.append("file", e.target.files[0]);
            body.append("path", path);

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/image4io/image`, {
                method: "POST",
                body
            })
            const json = await response.json();

            console.log(json);

            if (type !== "facility") {
                if (profile) {
                    toast.promise(
                        DeleteHorseImages({
                            variables: {
                                where: {
                                    owner: {
                                        name: name
                                    },
                                    AND: [
                                        {
                                            profile: true
                                        }
                                    ]
                                }
                            }
                        }),
                        {
                            pending: 'Tar bort föregående bild...',
                            success: 'Föregående bild borttagen 👌',
                            error: 'Misslyckades 🤯'
                        }
                    )
                }

                toast.promise(
                    CreateHorseImages({
                        variables: {
                            input: [
                                {
                                    url: json.uploadedFiles[0].url,
                                    path: json.uploadedFiles[0].imagePath,
                                    width: json.uploadedFiles[0].width,
                                    height: json.uploadedFiles[0].height,
                                    profile: profile,
                                    owner: {
                                        connect: {
                                            where: {
                                                node: {
                                                    name: name
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        },
                        update: (cache) => {
                            cache.evict({ fieldName: "horses" });
                        }
                    }),
                    {
                        pending: 'Laddar upp bild...',
                        success: 'Bild uppladdad 👌',
                        error: 'Misslyckades 🤯'
                    }
                )
            } else if (type === "facility") {
                if (profile) {
                    toast.promise(
                        DeleteFacilityImages({
                            variables: {
                                where: {
                                    owner: {
                                        name: facility
                                    },
                                    AND: [
                                        {
                                            profile: true
                                        }
                                    ]
                                }
                            }
                        }),
                        {
                            pending: 'Tar bort föregående bild...',
                            success: 'Föregående bild borttagen 👌',
                            error: 'Misslyckades 🤯'
                        }
                    )
                }

                toast.promise(
                    CreateFacilityImages({
                        variables: {
                            input: [
                                {
                                    url: json.uploadedFiles[0].url,
                                    path: json.uploadedFiles[0].imagePath,
                                    width: json.uploadedFiles[0].width,
                                    height: json.uploadedFiles[0].height,
                                    profile: profile,
                                    owner: {
                                        connect: {
                                            where: {
                                                node: {
                                                    name: facility
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        },
                        update: (cache) => {
                            cache.evict({ fieldName: "facilities" });
                        }
                    }),
                    {
                        pending: 'Laddar upp bild...',
                        success: 'Bild uppladdad 👌',
                        error: 'Misslyckades 🤯'
                    }
                )
            }
        }
    }
    return (
        <label htmlFor={id} className="w-full">
            <input name="" type="file" id={id} hidden onChange={handleUpload} />
            {children}
        </label>
    )
}

export default UploadControlImages
