import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

interface Props {
    button: NavButton;
}

const NavButton = (props: Props) => {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div onClick={() => setToggle(!toggle)} className="flex relative cursor-pointer">
                <div className="flex">
                    <span className="text-white text-sm select-none">{props.button.label.toUpperCase()}</span>
                    {props.button.dropdown.length > 0 && <FiChevronDown className={`ml-2 text-white text-lg self-center transform transition-all ${toggle ? "rotate-180" : "rotate-0"}`} />}
                </div>
                <div className={`bg-gray-100 pb-3 pt-2 mt-2 rounded-lg transform transition ease-in-out duration-700 ${toggle == false ? "hidden opacity-0" : "flex opacity-100"}  space-y-2 absolute top-8 flex-col`}>
                    {props.button.dropdown ?
                        props.button.dropdown.map((button, index) => (
                            <h1 key={index} className="select-none pl-3 pr-16 py-2 hover:text-purple-900 hover:shadow-inner">{button.label}</h1>
                        ))
                        :
                        <></>
                    }
                </div>
            </div>
        </>
    )
}

export default NavButton
