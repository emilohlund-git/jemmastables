import React from 'react'
import { FiTrash2 } from 'react-icons/fi';
import { useDeleteFacilityMutation, useDeleteHorsesMutation } from '../../generated/graphql';
import axios from 'axios';
import { toast } from 'react-toastify';

interface Props {
    name: string
}

const DeleteFacilityButton = (props: Props) => {
    const [DeleteFacility] = useDeleteFacilityMutation();

    const handleDelete = async (e: any) => {
        e.stopPropagation();

        try {
            await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/image4io/folders`, {
                data: { path: 'facility/' + props.name }
            })
        } catch (err) {
            console.log(err);
        }

        toast.promise(
            DeleteFacility({
                variables: {
                    where: {
                        name: props.name
                    }
                },
                update: (cache) => {
                    cache.evict({ fieldName: "facility" });
                }
            }),
            {
                pending: 'Tar bort partner...',
                success: 'Borttagen 👌',
                error: 'Misslyckades 🤯'
            }
        )
    }

    return (
        <div onClick={handleDelete} className="absolute z-20 cursor-pointer">
            <FiTrash2 className="text-3xl text-black bg-white rounded-full p-1 mt-2 ml-2" />
        </div>
    )
}

export default DeleteFacilityButton
