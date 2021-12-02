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
        <div className={`${router.pathname == "/" ? "fixed" : "bg-white dark:bg-gray-900"} z-40 w-full `}>
            <div className="p-10 flex flex-row justify-between">
                <div className="flex">
                    <Image width={115} height={115} alt="Jemmastables Logo" layout="fixed" src={`${router.pathname === "/" ? "/images/jemmastables-logo-vit.png" : "/images/jemmastables-logo.png"}`}/>
                </div>
                <div className="flex flex-col relative">
                    <div className="self-end md:hidden">
                        <Hamburger toggled={toggle} toggle={setToggle} color="#ffffff" />
                    </div>
                    <div className={`z-20 transform right-3  origin-top-right transition-all ${!toggle ? "scale-0" : ""} md:scale-100 space-y-5 md:space-y-0 top-12 bg-gray-50 p-5 rounded-b-xl rounded-tl-xl shadow-md md:shadow-none flex flex-col md:bg-transparent md:flex-row items-start md:space-x-20`}>
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
