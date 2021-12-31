import { Rotate as Hamburger } from 'hamburger-react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import NavButton from './NavButton';
import Image from 'next/image';

interface Props {
    navButtons: NavButton[];
}

const Navbar = (props: Props) => {
    const router = useRouter();
    const [toggle, setToggle] = useState(false);

    return (
        <div className={`${router.pathname == "/" ? "absolute" : "bg-white"} z-40 w-full`}>
            <div className="pr-4 pt-4 pb-3 md:pl-10 flex flex-row justify-between">
                <div className={`flex p-3 pt-6`}>
                    <Image alt={"Jemmastables logo"} src={router.pathname === "/" ? "/images/jemmastables-only-horse-white.png" : "/images/jemmastables-only-horse-black.png"} className="absolute" width={110} height={110} />
                </div>
                <div className="flex flex-col w-full md:-space-y-8">
                    <div className="self-end mt-8 md:hidden z-40">
                        <Hamburger toggled={toggle} toggle={setToggle} color={router.pathname === "/" && !toggle ? "#FFF" : "#000"} />
                    </div>
                    <div className={`z-30 absolute justify-center items-center md:justify-end md:pt-10 top-0 left-0 md:relative h-screen md:h-auto transform md:right-3 w-full origin-top-right transition-all duration-50 ease-in-out ${!toggle ? "scale-x-0" : ""} md:scale-100 space-y-5 md:space-y-0 md:top-12 bg-gray-50 p-5 md:rounded-b-xl md:rounded-tl-xl shadow-md md:shadow-none flex flex-col md:bg-transparent md:flex-row items-end md:space-x-20`}>
                        {props.navButtons.map(button => (
                            <NavButton toggled={toggle} setToggle={setToggle} key={button.path} button={button} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
