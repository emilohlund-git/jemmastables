import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {

}

const Footer = (props: Props) => {
    const { theme, setTheme } = useTheme();
    return (
        <div className="pt-12">
            <footer id="footer" className="relative z-50 dark:bg-gray-900 pt-24">
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
                                            <a href="#" className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                                                Integritetspolicy
                                            </a>
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
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="relative w-36">
                                        {theme == "auto" && (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 m-auto ml-3 text-gray-700 dark:text-gray-50 icon icon-tabler icon-tabler-device-laptop" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <line x1={3} y1={19} x2={21} y2={19} />
                                                <rect x={5} y={6} width={14} height={10} rx={1} />
                                            </svg>
                                        )}
                                        {theme == "light" && (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 m-auto ml-3 text-gray-700 dark:text-gray-50 icon icon-tabler icon-tabler-brightness-up" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <circle cx={12} cy={12} r={3} />
                                                <line x1={12} y1={5} x2={12} y2={3} />
                                                <line x1={17} y1={7} x2="18.4" y2="5.6" />
                                                <line x1={19} y1={12} x2={21} y2={12} />
                                                <line x1={17} y1={17} x2="18.4" y2="18.4" />
                                                <line x1={12} y1={19} x2={12} y2={21} />
                                                <line x1={7} y1={17} x2="5.6" y2="18.4" />
                                                <line x1={6} y1={12} x2={4} y2={12} />
                                                <line x1={7} y1={7} x2="5.6" y2="5.6" />
                                            </svg>
                                        )}
                                        {theme == "dark" && (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 m-auto ml-3 text-gray-700 dark:text-gray-50 icon icon-tabler icon-tabler-moon" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                                            </svg>
                                        )}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute inset-0 m-auto mr-3 text-gray-700 dark:text-gray-50 icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>

                                        <select value={theme} onChange={(e) => setTheme(e.target.value)} className="w-full focus:outline-none pl-10 py-2 appearance-none flex items-center h-12 border rounded border-gray-700 dark:border-gray-50 text-sm leading-5 dark:bg-gray-900 dark:text-gray-50">
                                            <option value="auto">Auto</option>
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
                            <Image src="/images/jemmastables-logo.png" alt="Jemmastables Logo" width={200} height={200} />
                        </a>
                    </Link>
                    <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">{new Date().getFullYear()} Jemmastables. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer
