import React, { useState } from 'react';
import Image from 'next/image';
import NavButton from './NavButton';
import { Rotate as Hamburger } from 'hamburger-react'
import { useRouter } from 'next/router';

interface Props {
    navButtons: NavButton[];
}

const Navbar = (props: Props) => {
    const router = useRouter();
    const [toggle, setToggle] = useState(false);

    return (
        <div className={`${router.pathname == "/" ? "fixed" : "bg-white dark:bg-gray-900"} z-40`}>
            <div className="p-10 flex flex-row justify-between">
                <div className="flex">
                    <Image width={115} height={115} alt="Jemmastables Logo" layout="fixed" src={`${router.pathname === "/" ? "/images/jemmastables-logo-vit.png" : "/images/jemmastables-logo.png"}`}/>
                </div>
                <div className="flex flex-col w-full md:w-auto">
                    <div className="self-end md:hidden z-40">
                        <Hamburger toggled={toggle} toggle={setToggle} color={`${router.pathname === "/" ? "#FFF" : "#000"}`} />
                    </div>
                    <div className={`z-30 absolute justify-center items-center top-0 left-0 md:relative h-screen md:h-auto transform md:right-3 w-full origin-top-right transition-all ${!toggle ? "scale-0" : ""} md:scale-100 space-y-5 md:space-y-0 md:top-12 bg-gray-50 p-5 rounded-b-xl rounded-tl-xl shadow-md md:shadow-none flex flex-col md:bg-transparent md:flex-row items-end md:items-start md:space-x-20`}>
                        {props.navButtons.map(button => (
                            <NavButton key={button.path} button={button} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
