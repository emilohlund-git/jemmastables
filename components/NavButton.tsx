import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';

interface Props {
    button: NavButton;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
    toggled: boolean;
}

const NavButton = (props: Props) => {
    const darkmode: boolean = useSelector((state: RootState) => state.darkmode);
    const [toggle, setToggle] = useState(false);
    const router = useRouter();

    return (
        <div onClick={() => props.setToggle(false)} onMouseOver={() => setToggle(true)} onMouseOut={() => setToggle(false)} className="relative cursor-pointer h-10">
            <div className="flex">
                <Link href={props.button.path} passHref>
                    <span className={`${router.pathname === "/" ? "text-black md:text-white dark:lg:text-white" : "text-black"} ${props.button.path == router.pathname ? "border-b-2" : ""} text-s self-center select-none ${props.button.path == "/bokning" ? "transition-all transform bg-gray-900 text-white hover:bg-gray-700 hover:scale-95 self-center py-2 px-4 rounded-3xl shadow-md -mt-2" : ""}`}>{props.button.label}</span>
                </Link>
                {props.button.dropdown.length > 0 && <FiChevronDown className={`ml-2 ${router.pathname === "/" ? "text-black md:text-white" : "text-black"} text-lg self-center transform transition-all ${toggle ? "rotate-180" : "rotate-0"}`} />}
            </div>
            {props.button.dropdown.length > 0 ?
                <div className={`z-50 absolute origin-top-left text-white bg-white md:bg-opacity-10 hover:shadow-lg items-center py-2 px-1 mt-1 md:rounded-b-lg md:rounded-tr-lg transform transition ease-in-out duration-100 ${toggle == false ? "scale-0" : "scale-100"} space-y-2 block md:absolute top-8 flex-col`}>
                    {props.button.dropdown.map((button, index) => (
                        <h1 key={index} className={`${router.pathname === "/" ? "text-black md:text-white dark:text-white" : "text-black"} select-none pl-2 transition-all mx-1 md:rounded-b-lg md:rounded-tr-lg pr-16 py-2   hover:shadow-md hover:bg-gray-50 hover:bg-opacity-20`}>{button.label}</h1>
                    ))}
                </div>
                :
                <></>
            }
        </div>
    )
}

export default NavButton
