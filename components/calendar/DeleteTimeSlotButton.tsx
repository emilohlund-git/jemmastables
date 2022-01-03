import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { DateSlotsDocument, TimeSlotsDocument, useDeleteDateSlotsMutation, useDeleteTimeSlotsMutation, UserDocument, UsersDocument } from '../../generated/graphql';

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
                cache.evict({ id: "ROOT_QUERY", fieldName: "dateSlots", broadcast: false });
                cache.evict({ id: "ROOT_QUERY", fieldName: "timeSlots", broadcast: false });
                cache.evict({ id: "ROOT_QUERY", fieldName: "users", broadcast: false });
                cache.gc()
            }
        })

        if (!errors) {
            console.log(props.count);
            if (props.count === 1) {
                const { errors } = await DeleteDateSlot({
                    variables: {
                        where: {
                            date: props.date
                        }
                    },
                    update: (cache) => {
                        cache.evict({ id: "ROOT_QUERY", fieldName: "dateSlots", broadcast: false });
                        cache.evict({ id: "ROOT_QUERY", fieldName: "timeSlots", broadcast: false });
                        cache.evict({ id: "ROOT_QUERY", fieldName: "users", broadcast: false });
                        cache.gc()
                    }
                })

                if (!errors) {
                    console.log("Deleted");
                }
            }
        } else {
            console.log("Failed to delete TimeSlot");
        }
    }

    return (
        <div onClick={handleDelete} className="absolute z-20 cursor-pointer">
            <FiTrash2 className="text-3xl text-black bg-white rounded-full p-1 mt-2 ml-2" />
        </div>
    )
}

export default DeleteTimeSlotButton
