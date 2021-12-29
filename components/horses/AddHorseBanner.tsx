import React, { useState } from 'react';
import { AddHorseModal } from './AddHorseModal';

interface Props {

}

const AddHorseBanner = (props: Props) => {
    const [hovering, setHovering] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const handleClick = () => {
        setModalOpen(true);
        console.log("Hej");
    }

    return (
        <div onClick={handleClick} className={`border-double border-4 border-white ${hovering ? "border-opacity-40" : "border-opacity-20"} flex z-20 w-full relative h-56 transition-all hover:filter-none bg-gray-600`} onMouseLeave={() => setHovering(false)} onMouseEnter={() => setHovering(true)} >
            <AddHorseModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
            <div className="text-center ml-4 self-center mb-4 w-full">
                <p className={`select-none text-white cursor-pointer transition-all ${hovering ? "text-4xl" : "text-2xl"} mt-2`}>+</p>
            </div>
        </div>
    )
}

export default AddHorseBanner
