import axios from 'axios';
import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { useDeletePartnerMutation } from '../../generated/graphql';

interface Props {
    name: string
}

const DeletePartnerButton = (props: Props) => {
    const [DeletePartner] = useDeletePartnerMutation();

    const handleDelete = async (e: any) => {
        e.stopPropagation();

        await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/image4io/folders`, {
            data: { path: 'partners/' + props.name }
        })

        toast.promise(
            DeletePartner({
                variables: {
                    where: {
                        name: props.name
                    }
                },
                update: (cache) => {
                    cache.evict({ fieldName: "partners" });
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
        <div onClick={handleDelete} className="absolute cursor-pointer">
            <FiTrash2 className="text-3xl text-black mt-2 ml-2" />
        </div>
    )
}

export default DeletePartnerButton
