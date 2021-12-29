import React from 'react'
import { useSelector } from 'react-redux';
import { useHorseQuery, useUpdateHorsesMutation } from '../generated/graphql';
import { RootState } from '../redux/reducers';
import axios from 'axios';

interface Props {
    path: string
    currentImage: string;
}

const UploadControl = (props: Props) => {
    const [UpdateHorse] = useUpdateHorsesMutation();
    const name: string = useSelector((state: RootState) => state.horse);
    const { data, loading } = useHorseQuery({
        variables: {
            horsesWhere: {
                name: name
            }
        }
    });
    const handleUpload = async (e: any) => {
        if (e.target.files.length > 0) {
            const body = new FormData();
            body.append("file", e.target.files[0]);
            body.append("path", props.path);

            const response = await fetch("http://localhost:4000/image4io/image", {
                method: "POST",
                body
            })
            const json = await response.json();
            const uploadedFile = json.uploadedFiles[0].url;
            const images = data!.horses[0].images;
            const { errors } = await UpdateHorse({
                variables: {
                    where: {
                        name: name
                    },
                    update: {
                        profile: uploadedFile
                    }
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
        <label htmlFor="formId" className="w-full">
            <input name="" type="file" id="formId" hidden onChange={handleUpload} />
        </label>
    )
}

export default UploadControl
