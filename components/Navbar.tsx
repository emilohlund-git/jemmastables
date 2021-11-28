import React from 'react';
import Image from 'next/image';
import NavButton from './NavButton';

interface Props {
    navButtons: NavButton[];
}

const Navbar = (props: Props) => {
    return (
        <div className="fixed z-40 w-full">
            <div className="p-10 flex flex-row justify-between">
                <div className="flex">
                    <Image width={175} height={175} src="/images/jemmastables-logo-vit.png" alt="Jemmastables Logo" />
                </div>
                <div className="mr-20 mt-8 flex items-start space-x-20">
                    {props.navButtons.map(button => (
                        <NavButton key={button.path} button={button} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Navbar
