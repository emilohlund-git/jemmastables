import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';

interface Props {

}

const Footer = (props: Props) => {
    return (
        <div className="mt-14">
            <footer id="footer" className="relative z-20 bg-gray-800">
                <div className="dark:border-gray-700 py-16">
                    <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
                        <div className="lg:flex">
                            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center pb-8">
                    <Link href="#">
                        <a>
                            <Image src={`/images/jemmastables-logo-vit.png`} alt="Jemmastables Logo" width={200} height={200} />
                        </a>
                    </Link>
                    <p className="mt-6 text-xs lg:text-sm leading-none text-white">{new Date().getFullYear()} Jemmastables. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer
