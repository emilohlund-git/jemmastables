import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { HorseCategory } from '../../generated/graphql';
import { setCategory } from '../../redux/actions';

interface Props {
    category: HorseCategory
}

const HorseCategoryBanner = (props: Props) => {
    const [hovering, setHovering] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleClick = () => {
        dispatch(setCategory(props.category.category));
        router.push({
            pathname: "/hastar/" + encodeURIComponent(props.category.category.replaceAll("ä", "a").toLowerCase()),
        });
    }

    return (
        <div onClick={handleClick} className={`flex z-20 w-full relative h-56 filter grayscale transition-all hover:filter-none`} onMouseLeave={() => setHovering(false)} onMouseEnter={() => setHovering(true)} style={{ backgroundImage: `url(${props.category.image})`, backgroundPosition: "center", backgroundSize: "cover" }}>
            <div className="text-left ml-4 self-end mb-4">
                <div className="flex items-center">
                    <p className={`text-white transform transition-all mr-2 ${!hovering ? "scale-0 -mr-4" : "scale-100"}`}>&rarr;</p>
                    <p className="text-lg font-semibold text-white transition-all">{props.category.category.toLowerCase()}</p>
                </div>
                <p className="font-thin text-sm text-white">{props.category!.horses!.length === 1 ? props.category!.horses!.length + " häst" : props.category!.horses!.length + " hästar"}</p>
            </div>
        </div>
    )
}

export default HorseCategoryBanner
