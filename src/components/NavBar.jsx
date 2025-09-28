'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { smoothScroll } from "@/utils/smoothScroll";


export default function NavBar() {

    const currentPath = usePathname();

    const [navOpen, setNavOpen] = useState(false);
    const [pageScrolled, setPageScrolled] = useState(false);

    const handleScrollLink = (event, targetId = null, elementHref = null) => {
        setNavOpen(false);
        if (currentPath === elementHref) {
            event.preventDefault();
            smoothScroll(targetId);
            if (!targetId) {
                history.pushState(null, '', `${currentPath}`);
                return;
            }
            history.pushState(null, '', `${currentPath}#${targetId}`);
            return;
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setPageScrolled(true);
            }
            else {
                setPageScrolled(false);
            }
        }
        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setNavOpen(false);
        if (location.hash) {
            window.scrollTo(0, 0);
            const targetId = location.hash.replace('#', '');
            setTimeout(() => {
                smoothScroll(targetId);
            }, 5);
        }
    }, [currentPath]);



    return (
        (<header className={` text-white flex flex-col justify-between  sticky lg:fixed top-0 w-full z-50 transition-colors duration-300 ease-in-out bg-[url('/images/bgSVGs/filmGrain.svg')]  ${pageScrolled || currentPath !== "/" ? "bg-zinc-800 shadow-lg shadow-purple-900" : "bg-zinc-900 shadow-lg shadow-purple-900"}`}>
            <div className={`w-full max-w-screen-2xl mx-auto containter flex items-center justify-between px-10 transition-all duration-300 ease-in-out  border-b- ${pageScrolled ? "" : ""}`}>


                <div className={`flex-1 flex justify-start items-center transform transition duration-300 ease-in-out  ${pageScrolled || currentPath !== "/" ? 'opacity-100 ' : 'xl:opacity-0 lg:pointer-events-none'}`} >
                    <Link className={`relative h-20 flex transition-all duration-300 ease-in-out hover:scale-105 items-center`} href="/" onClick={(e) => handleScrollLink(e, null, '/')}>
                        <div className={`relative w-16 py-2 flex transition-all duration-300 ease-in-out hover:scale-105`}>
                            <Image
                                src="/images/Logo.png"
                                alt="Will Bolls"
                                layout="responsive"
                                width={1440}
                                height={320}
                                className=""

                            />
                        </div>
                        {/* <span className="hidden lg:inline font-bold text-xl ml-4">Benjamin Clark</span> */}

                    </Link>
                </div>

                <nav className={`flex-2 flex w-full justify-end transition-all ease-in-out font-semibold duration-300 ${pageScrolled || currentPath !== "/" ? "xl:-translate-x-[-45%] 2xl:-translate-x-[-48%]" : " lg:-translate-x-[0%] xl:-translate-x-[-16%]"}`}>
                    {/* MOBILE BURGER TOGGLE */}
                    <div className={`border border-slate-400 transition-all ease-in-out duration-300  xl:hidden p-1 ${navOpen ? 'rounded-3xl' : 'rounded-none'}`} onClick={() => setNavOpen(!navOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 ${navOpen ? "hidden" : ""}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 ${navOpen ? "" : "hidden"}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                    {/* BROWSER MENU */}
                    <ul className={`hidden w-full xl:flex transition-all duration-300 ease-in-out xl:text-lg ${pageScrolled || currentPath !== "/" ? "xl:text-lg " : ""}`}>

                        <li className="mx-8">
                            <Link className={`${currentPath === "/about" ? "scale-105 " : " hover: hover:scale-105"}  inline-block transform transition duration-300 ease-in-out`} href="/#professional-work" onClick={(e) => handleScrollLink(e, 'professional-work', '/')}>Professional Work</Link>
                        </li>
                        <li className="mx-8">
                            <Link className={`${currentPath === "/services" ? "scale-105 " : " hover: hover:scale-105"}  inline-block transform transition duration-300 ease-in-out`} href="/#personal-projects" onClick={(e) => handleScrollLink(e, 'personal-projects', '/')}>Personal Projects</Link>
                        </li>

                        <li className="mx-8">
                            <Link className={`${currentPath === "/faq" ? "scale-105 " : " hover: hover:scale-105"}  inline-block transform transition duration-300 ease-in-out`} href="/#about" onClick={(e) => handleScrollLink(e, 'about', '/')}>About Me</Link>
                        </li>
                        <li className="mx-8">
                            <Link className={`${currentPath === "/faq" ? "scale-105 " : " hover: hover:scale-105"}  inline-block transform transition duration-300 ease-in-out`} href="/#contact" onClick={(e) => handleScrollLink(e, 'contact', '/')}>Contact</Link>
                        </li>


                    </ul>

                </nav>


            </div>
            {/* MOBILE DROPDOWN MENU */}
            <div className={`lg:hidden  transition-all duration-300 ease-in-out transform ${navOpen ? 'opacity-100 max-h-screen ' : 'opacity-0 max-h-0 pointer-events-none'}`}>

                <ul className={`flex absolute flex-col items-left px-9 justify-between bg-zinc-800 w-full transition-all duration-300 ease-in-out transform${navOpen ? 'opacity-100 max-h-screen ' : 'opacity-0 max-h-0 '}`}>

                    <li className="my-4">
                        <Link className={`${currentPath === "/about" ? "scale-105 text-white" : "text-white hover:text-white hover:scale-105"} inline-block transform transition duration-300 ease-in-out`} href="/#professional-work" onClick={(e) => handleScrollLink(e, 'professional-work', '/')}>Professional Work</Link>
                    </li>
                    <li className="my-4">
                        <Link className={`${currentPath === "/services" ? "scale-105 text-white" : "text-white hover:text-white hover:scale-105"} inline-block transform transition duration-300 ease-in-out`} href="/#personal-projects" onClick={(e) => handleScrollLink(e, 'personal-projects', '/')}>Personal Projects</Link>
                    </li>

                    <li className="my-4">
                        <Link className={`${currentPath === "/faq" ? "scale-105 text-white" : "text-white hover:text-white hover:scale-105"} inline-block transform transition duration-300 ease-in-out`} href="/#about" onClick={(e) => handleScrollLink(e, 'about', '/')}>About</Link>
                    </li>
                    <li className="my-4">
                        <Link className={`${currentPath === "/faq" ? "scale-105 text-white" : "text-white hover:text-white hover:scale-105"} inline-block transform transition duration-300 ease-in-out`} href="/#contact" onClick={(e) => handleScrollLink(e, 'contact', '/')}>Contact</Link>
                    </li>
                </ul>
            </div>
        </header>)
    );
}