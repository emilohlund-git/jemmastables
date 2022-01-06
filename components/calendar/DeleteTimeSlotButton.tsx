import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { useDeleteDateSlotsMutation, useDeleteTimeSlotsMutation } from '../../generated/graphql';

interface Props {
    date: string
    to: string
    from: string
    count: number
}

const DeleteTimeSlotButton = (props: Props) => {
    const [DeleteTimeSlot] = useDeleteTimeSlotsMutation();
    const [DeleteDateSlot] = useDeleteDateSlotsMutation();

    const handleDelete = async (e: any) => {
        e.stopPropagation();

        const { errors, data: deletedata } = await DeleteTimeSlot({
            variables: {
                where: {
                    to: props.to,
                    from: props.from,
                    date: {
                        date: props.date
                    }
                },
            },
            update: (cache) => {
                cache.evict({ id: "ROOT_QUERY", fieldName: "dateSlots" });
                cache.evict({ id: "ROOT_QUERY", fieldName: "timeSlots" });
                cache.evict({ id: "ROOT_QUERY", fieldName: "users" });
                cache.gc()
            }
        })

        if (!errors) {
            if (props.count === 1) {
                const { errors } = await DeleteDateSlot({
                    variables: {
                        where: {
                            date: props.date
                        }
                    },
                    update: (cache) => {
                        cache.evict({ id: "ROOT_QUERY", fieldName: "dateSlots" });
                        cache.evict({ id: "ROOT_QUERY", fieldName: "timeSlots" });
                        cache.evict({ id: "ROOT_QUERY", fieldName: "users" });
                        cache.gc()
                    }
                })

                if (!errors) {
              
                }
            }
        } else {
        }
    }

    return (
        <div onClick={handleDelete} className="absolute z-20 cursor-pointer">
            <FiTrash2 className="text-3xl text-black bg-white rounded-full p-1 mt-2 ml-2" />
        </div>
    )
}

export default DeleteTimeSlotButton
