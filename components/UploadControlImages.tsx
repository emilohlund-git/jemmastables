import React from 'react';
import { useSelector } from 'react-redux';
import { useHorseQuery, useUpdateHorsesMutation } from '../generated/graphql';
import { RootState } from '../redux/reducers';

const UploadControlImages = ({ children, path }: any) => {
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
            body.append("path", path);

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
                        images: [...images, uploadedFile]
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
            {children}
        </label>
    )
}

export default UploadControlImages
