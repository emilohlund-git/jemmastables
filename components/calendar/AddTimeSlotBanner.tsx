import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setIsOpen } from '../../redux/actions';

interface Props {

}

const AddTimeSlotBanner = (props: Props) => {
    const [hovering, setHovering] = useState(false);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setIsOpen(true));
    }

    return (
        <div onClick={handleClick} className={`border-dotted border-t-2 border-white ${hovering ? "border-opacity-40" : "border-opacity-20"} flex z-20 w-full relative h-20 transition-all hover:filter-none bg-gray-800 shadow-lg`} onMouseLeave={() => setHovering(false)} onMouseEnter={() => setHovering(true)} >
            <div className="text-center self-center mb-4 w-full">
                <p className={`select-none text-white cursor-pointer transition-all ${hovering ? "text-4xl" : "text-2xl"} mt-2`}>+</p>
            </div>
        </div>
    )
}

export default AddTimeSlotBanner
