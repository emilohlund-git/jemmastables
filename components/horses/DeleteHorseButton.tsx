import React from 'react'
import { FiTrash2 } from 'react-icons/fi';
import { useDeleteHorsesMutation } from '../../generated/graphql';
import axios from 'axios';

interface Props {
    name: string
}

const DeleteHorseButton = (props: Props) => {
    const [DeleteHorse] = useDeleteHorsesMutation();

    const handleDelete = async () => {
        await axios.delete("http://localhost:4000/image4io/folders", {
            data: { path: 'horses/' + props.name }
        })

        const { errors } = await DeleteHorse({
            variables: {
                where: {
                    name: props.name
                }
            },
            update: (cache) => {
                cache.evict({ fieldName: "horses" });
            }
        })
    }

    return (
        <div onClick={handleDelete} className="absolute cursor-pointer">
            <FiTrash2 className="text-3xl text-white mt-2 ml-2" />
        </div>
    )
}

export default DeleteHorseButton
