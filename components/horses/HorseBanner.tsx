import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Horse } from '../../generated/graphql';
import { setHorse } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import DeleteHorseButton from './DeleteHorseButton';

interface Props {
    horse: Horse
}

const HorseBanner = (props: Props) => {
    const [hovering, setHovering] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();
    const category: string = useSelector((state: RootState) => state.category);

    const handleClick = () => {
        dispatch(setHorse(props.horse.name));
        router.push({
            pathname: "/hastar/" + category.replaceAll("ä", "a").toLowerCase() + "/" + encodeURIComponent(props.horse.name.replaceAll("ä", "a").toLowerCase()),
        });
    }

    return (
        <div onClick={handleClick} className={`flex z-20 w-full relative h-56 filter grayscale transition-all hover:filter-none`} onMouseLeave={() => setHovering(false)} onMouseEnter={() => setHovering(true)} style={{ backgroundImage: `url(${props.horse.profile})`, backgroundPosition: "center", backgroundSize: "cover" }}>
            <DeleteHorseButton name={props.horse.name} />
            <div className="text-left ml-4 self-end mb-4">
                <div className="flex items-center">
                    <p className={`text-white transform transition-all mr-2 ${!hovering ? "scale-0 -mr-4" : "scale-100"}`}>&rarr;</p>
                    <p className="text-lg font-semibold text-white transition-all">{props.horse.name}</p>
                </div>
                <p className="font-thin text-sm text-white">{props.horse.nickname}</p>
            </div>
        </div>
    )
}

export default HorseBanner
