import axios from 'axios';
import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { FacilityImage, useDeleteFacilityImagesMutation } from '../../generated/graphql';

interface Props {
    image: FacilityImage
    name: string
}

const DeleteFacilityImageButton = (props: Props) => {
    const [DeleteImage] = useDeleteFacilityImagesMutation();

    const handleDelete = async (e: any) => {
        e.stopPropagation();

        await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/image4io/image`, {
            data: { path: '/' + props.image.path.split("/jemmastables/")[1] }
        })

        toast.promise(
            DeleteImage({
                variables: {
                    where: {
                        owner: {
                            name: props.name
                        },
                        url: props.image.url
                    }
                },
                update: (cache) => {
                    cache.evict({ fieldName: "facilities" });
                    cache.evict({ fieldName: "facilityimages" });
                }
            }),
            {
                pending: 'Tar bort bild...',
                success: 'Bild borttagen 👌',
                error: 'Misslyckades 🤯'
            }
        )

        console.log("Delete");
    }

    return (
        <div onClick={handleDelete} className="absolute z-20 cursor-pointer">
            <FiTrash2 className="text-3xl text-black bg-white rounded-full p-1 mt-2 ml-2" />
        </div>
    )
}

export default DeleteFacilityImageButton
