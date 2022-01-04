import React from 'react';
import { useSelector } from 'react-redux';
import { useCreateFacilityImagesMutation, useCreateHorseImagesMutation, useDeleteFacilityImagesMutation, useDeleteHorseImagesMutation } from '../generated/graphql';
import { RootState } from '../redux/reducers';

interface Props {
    children: any
    path: string
    profile: boolean
    id: string
    type?: string
}

const UploadControlImages = ({ children, path, profile, id, type }: Props) => {
    const [CreateHorseImages] = useCreateHorseImagesMutation();
    const [DeleteHorseImages] = useDeleteHorseImagesMutation();
    const [CreateFacilityImages] = useCreateFacilityImagesMutation();
    const [DeleteFacilityImages] = useDeleteFacilityImagesMutation();
    const name: string = useSelector((state: RootState) => state.horse);
    const facility: string = useSelector((state: RootState) => state.facility);

    const handleUpload = async (e: any) => {
        console.log(profile);

        if (e.target.files.length > 0) {
            const body = new FormData();
            body.append("file", e.target.files[0]);
            body.append("path", path);

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/image4io/image`, {
                method: "POST",
                body
            })
            const json = await response.json();

            if (type !== "facility") {
                if (profile) {
                    await DeleteHorseImages({
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
                    })
                }

                const { errors } = await CreateHorseImages({
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
                });

                if (!errors) {
                } else {
                }
            } else if (type === "facility") {
                if (profile) {
                    await DeleteFacilityImages({
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
                    })
                }

                const { errors } = await CreateFacilityImages({
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
                });

                if (!errors) {
                } else {
                }
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
