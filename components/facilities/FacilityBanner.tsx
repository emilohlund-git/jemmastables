import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Facility } from '../../generated/graphql';
import { setFacility } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import findProfilePicture from '../../utils/facilities/findProfilePicture';
import DeleteFacilityButton from './DeleteFacilityButton';

interface Props {
    facility: Facility
}

const FacilityBanner = (props: Props) => {
    const [hovering, setHovering] = useState(false);
    const profilePhoto = findProfilePicture(props.facility);
    const admin: boolean = useSelector((state: RootState) => state.admin);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleClick = () => {
        dispatch(setFacility(props.facility.name));
        router.push({
            pathname: "/anlaggningen/" + encodeURIComponent(props.facility.name.replaceAll("ä", "a").toLowerCase()),
        });
    }

    return (
        <div onClick={handleClick} className={`flex z-20 w-full relative h-56 filter grayscale transition-all hover:filter-none`} onMouseLeave={() => setHovering(false)} onMouseEnter={() => setHovering(true)} style={{ backgroundImage: `url(${profilePhoto})`, backgroundPosition: "center", backgroundSize: "cover" }}>
            {admin &&
                <DeleteFacilityButton name={props.facility.name} />
            }
            <div className="text-left ml-4 self-end mb-4">
                <div className="flex items-center">
                    <p className={`text-white transform transition-all mr-2 ${!hovering ? "scale-0 -mr-4" : "scale-100"}`}>&rarr;</p>
                    <p className="text-lg font-semibold text-white transition-all">{props.facility.name}</p>
                </div>
                <p className="font-thin text-sm text-white">{props.facility.description}</p>
            </div>
        </div>
    )
}

export default FacilityBanner
