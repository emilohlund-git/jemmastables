import React from 'react';
import { useSelector } from 'react-redux';
import { useCreateHorseImagesMutation, useDeleteHorseImagesMutation } from '../generated/graphql';
import { RootState } from '../redux/reducers';

interface Props {
    children: any
    path: string
    profile: boolean
    id: string
}

const UploadControlImages = ({ children, path, profile, id }: Props) => {
    const [CreateHorseImages] = useCreateHorseImagesMutation();
    const [DeleteHorseImages] = useDeleteHorseImagesMutation();
    const name: string = useSelector((state: RootState) => state.horse);

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
