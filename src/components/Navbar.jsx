import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import N from '../images/N.png';

export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <header className="bg-gray-800 md:sticky top-0 z-50">
            <div className="container mx-auto flex flex-wrap p-5 justify-between md:flex-row items-center">
                <div className="flex items-center">
                    <img
                        className="lg:w-10 lg:h-10 w-6 h-6"
                        src={N}
                        alt="N logo"
                    />
                    <p className="font-semibold text-white md:mb-0 ml-3">
                        <a href="#hero" className="text-2xl">
                            Nathan Hartojo
                        </a>
                    </p>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsNavOpen(!isNavOpen)}>
                        {isNavOpen ? (
                            <XMarkIcon className="w-8 h-8 mb-[-8px]" />
                        ) : (
                            <Bars3Icon className="w-8 h-8 mb-[-8px]" />
                        )}
                    </button>
                </div>

                <nav
                    className={`${
                        isNavOpen ? 'flex' : 'hidden'
                    } md:flex flex-col md:flex-row md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 items-center text-base justify-center`}>
                    <a
                        href="#about"
                        className="hover:text-white block py-2 md:py-0 md:mr-5">
                        About Me
                    </a>
                    <a
                        href="#projects"
                        className="hover:text-white block py-2 md:py-0 md:mr-5">
                        Projects
                    </a>
                    <a
                        href="#skills"
                        className="hover:text-white block py-2 md:py-0 md:mr-5">
                        Skills
                    </a>
                    {/* <a
                        href="#certifications"
                        className="hover:text-white block py-2 md:py-0 md:mr-5">
                        Certifications
                    </a> */}
                    <a
                        href="#contact"
                        className="hover:text-white block py-2 md:py-0 md:mr-5">
                        Contact Me
                    </a>
                </nav>
            </div>
        </header>
    );
}
