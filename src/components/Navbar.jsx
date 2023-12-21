// src/components/Navbar.js
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import N from '../images/N.png';
/**
 * Global navbar
 */

export default function Navbar() {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <p className="font-semibold text-white mb-4 md:mb-0">
                    <a href="#hero" className="ml-3 text-2xl">
                        Nathan Hartojo
                    </a>
                </p>
                <img
                    className="lg:w-10 lg:h-10 w-6 h-6 ml-3"
                    src={N}
                    alt="N logo"
                />
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <a href="#about" className="mr-5 hover:text-white">
                        About Me
                    </a>
                    <a href="#projects" className="mr-5 hover:text-white">
                        Projects
                    </a>
                    <a href="#skills" className="mr-5 hover:text-white">
                        Skills
                    </a>
                    <a href="#Certifications" className="mr-5 hover:text-white">
                        Certifications
                    </a>
                </nav>
                <a
                    href="#contact"
                    className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                    Contact Me
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>
    );
}
