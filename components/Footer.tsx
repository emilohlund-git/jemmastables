import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setDarkmode } from '../redux/actions';

interface Props {

}

const Footer = (props: Props) => {
    const { theme, setTheme } = useTheme();
    const dispatch = useDispatch();
    useEffect(() => {
        if (theme == "dark") {
            dispatch(setDarkmode(true));
        } else {
            dispatch(setDarkmode(false));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme])
    return (
        <div>
            <footer id="footer" className="relative z-20 dark:bg-gray-900">
                <div className=" border-t border-b border-gray-200 dark:border-gray-700 py-16">
                    <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
                        <div className="lg:flex">
                            <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
                                <div className="w-full lg:w-1/2 px-6">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">Boka tid på ridbanan</a>
                                            </Link>
                                        </li>
                                        <li className="mt-6">
                                            <Link href="#">
                                                <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">Kontakta oss</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-1/2 px-6">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">Stallet</a>
                                            </Link>
                                        </li>

                                        <li className="mt-6">
                                            <Link href="#">
                                                <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">Hästarna</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 flex">
                                <div className="w-full lg:w-1/2 px-6">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                                                    Integritetspolicy
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="mt-6">
                                            <Link href="#">
                                                <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">Cookie policy</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-1/2 px-6 flex flex-col justify-between">
                                    <div className="flex items-center mb-6">
                                        <a href="#">
                                            <div>
                                                {/* SOCIAL MEDIA ICONS */}
                                            </div>
                                        </a>
                                    </div>
                                    <div className="relative w-36">
                                        <select value={theme} onChange={(e) => setTheme(e.target.value)} className="w-full focus:outline-none text-center py-2 appearance-none bg-white flex items-center h-12 border rounded border-gray-700 dark:border-gray-50 text-sm leading-5 dark:bg-gray-900 dark:text-gray-50">
                                            <option value="light">Light</option>
                                            <option value="dark">Dark</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-16 flex flex-col justify-center items-center">
                    <Link href="#">
                        <a>
                            <Image src={`${theme == "dark" ? "/images/jemmastables-logo-vit.png" : "/images/jemmastables-logo.png"}`} alt="Jemmastables Logo" width={200} height={200} />
                        </a>
                    </Link>
                    <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">{new Date().getFullYear()} Jemmastables. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer
