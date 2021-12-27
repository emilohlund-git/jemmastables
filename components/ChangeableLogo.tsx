import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { useCreateLogoMutation, useLogoQuery, useUpdateLogoMutation } from '../generated/graphql';
import axios from 'axios';

interface Props {
    width: number
    height: number
}

const ChangeableLogo = (props: Props) => {
    const fileRef = useRef(null);
    const [uploadState, setUploadState] = useState({});
    const [UpdateLogo] = useUpdateLogoMutation();
    const [CreateLogo] = useCreateLogoMutation();
    const { data, loading } = useLogoQuery();

    console.log(data);

    const handleFile = async (e: any) => {
        let file = e.target.files[0];
        let fileParts = e.target.files[0].name.split(".");
        let fileName = fileParts[0];
        let fileType = fileParts[1];

        axios.post("/api/awsimageupload",
            {
                fileName: fileName,
                fileType: fileType,
                oldFile: data?.logos[0].image,
                imageCategory: "horses"
            })
            .then(res => {
                const signedRequest = res.data.signedRequest;
                const url = res.data.url;
                setUploadState({
                    ...uploadState,
                    url
                })

                let options = {
                    headers: {
                        "Content-Type": fileType,
                        "Access-Control-Allow-Origin": "*"
                    }
                };

                axios.put(signedRequest, file, options)
                    .then(async _ => {
                        setUploadState({ ...uploadState, success: true });
                        if (!data?.logos[0] && !loading) {
                            const { errors } = await CreateLogo({
                                variables: {
                                    input: [
                                        {
                                            image: url
                                        }
                                    ]
                                },
                                update: (cache) => {
                                    cache.evict({ fieldName: "logos" });
                                }
                            });
                        } else {
                            if (data?.logos[0] && !loading) {
                                const { errors } = await UpdateLogo({
                                    variables: {
                                        update: {
                                            image: url
                                        }
                                    },
                                    update: (cache) => {
                                        cache.evict({ fieldName: "logos" });
                                    }
                                });
                            }
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="relative">
            <input onChange={handleFile} className="absolute z-20 appearance-none" id="formId" type="file" hidden />
            <label ref={fileRef} htmlFor="formId">
                {!loading && data?.logos[0] ?
                    <Image className="absolute" priority width={props.width} height={props.height} alt="Jemmastables Logo" layout="fixed" src={data?.logos[0].image} />
                    : <></>
                }
            </label>
        </div>
    )
}

export default ChangeableLogo
