import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import UploadControlImages from '../UploadControlImages';

interface Props {
    profile: boolean;
}

const AddHorseImage = (props: Props) => {
    const [hovering, setHovering] = useState(false);
    const name: string = useSelector((state: RootState) => state.horse);

    return (
        <UploadControlImages id="general_upload" path={`/horses/${name}`} profile={props.profile}  >
            <div className={`border-double border-4 border-white ${hovering ? "border-opacity-40" : "border-opacity-20"} flex z-20 w-full relative h-full transition-all hover:filter-none bg-gray-600`} onMouseLeave={() => setHovering(false)} onMouseEnter={() => setHovering(true)} >
                <div className="text-center self-center mb-4 w-full">
                    <p className={`select-none text-white cursor-pointer transition-all ${hovering ? "text-4xl" : "text-2xl"} mt-2`}>+</p>
                </div>
            </div>
        </UploadControlImages>
    )
}

export default AddHorseImage
