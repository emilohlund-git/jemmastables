import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Partner } from '../../generated/graphql';
import { RootState } from '../../redux/reducers';
import DeletePartnerButton from './DeletePartnerButton';

interface Props {
    partner: Partner
}

const PartnerBanner = (props: Props) => {
    const [hovering, setHovering] = useState(false);
    /* @ts-ignore */
    const profilePhoto = props.partner.logo.url;
    const admin: boolean = useSelector((state: RootState) => state.admin);

    const handleClick = () => {

    }

    return (
        <div onClick={handleClick} className={`border-t-2 border-dashed border-black border-opacity-10 p-2 flex z-20 w-full relative h-56  transition-all`} onMouseLeave={() => setHovering(false)} onMouseEnter={() => setHovering(true)} style={{ backgroundImage: `url(${profilePhoto})`, backgroundPosition: "right 5em bottom 50%", backgroundSize: "10%", backgroundRepeat: "no-repeat" }}>
            {admin &&
                <DeletePartnerButton name={props.partner.name} />
            }
            <div className="text-left ml-4 self-end mb-4 max-w-2xl">
                <div className="flex items-center">
                    <p className={`text-black transform transition-all mr-2 ${!hovering ? "scale-0 -mr-4" : "scale-100"}`}>&rarr;</p>
                    <p className="text-lg font-semibold text-black transition-all">{props.partner.name}</p>
                </div>
                <p className="font-thin text-sm text-black">{props.partner.website}</p>
                <p className="text-sm text-black">{props.partner.description}</p>
            </div>
        </div>
    )
}

export default PartnerBanner
