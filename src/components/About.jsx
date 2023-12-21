// src/components/About.js
import pfpImage from '../images/pika-dalle-pfp.png';
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
/**
 * Basic About Me section, includes socials, personal interests, extracurriculurs
 */

export default function About() {
    return (
        <section id="about" className="bg-heroImage bg-cover">
            <div style={{ backgroundColor: 'rgba(0, 0, 0, .7)' }}>
                <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                            Hi, I'm Nathan.
                            <br className="hidden lg:inline-block" />I love to
                            code, dance, and eat amazing food.
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Qui laborum quasi, incidunt dolore iste
                            nostrum cupiditate voluptas? Laborum, voluptas
                            natus?
                        </p>
                        <div className="flex justify-center">
                            <a
                                href="#contact"
                                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                                Work With Me
                            </a>
                            <a
                                href="#projects"
                                className="ml-4 inline-flex text-gray-400 bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                                See My Past Work
                            </a>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                            className="object-cover object-center rounded-full h-33 w-33"
                            alt="headshot of Nathan Hartojo"
                            src={pfpImage}
                        />
                        <div className="flex justify-center space-x-4 mt-4">
                            <a
                                href="https://www.instagram.com/nathan.hartojo"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaInstagram
                                    style={{ color: '#C13584' }}
                                    className="h-12 w-12 text-gray-600 hover:text-gray-800 icon-hover-tada"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/nathanhartojo"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaLinkedin
                                    style={{ color: '#0077B5' }}
                                    className="h-12 w-12 text-gray-600 hover:text-gray-800 icon-hover-tada"
                                />
                            </a>
                            <a
                                href="https://github.com/nathanhtkd"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaGithub
                                    style={{ color: '#171515' }}
                                    className="h-12 w-12 text-gray-600 hover:text-gray-800 icon-hover-tada"
                                />
                            </a>
                            <a
                                href="https://www.facebook.com/nathanhtkd"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaFacebook
                                    style={{ color: '#1877F2' }}
                                    className="h-12 w-12 text-gray-600 hover:text-gray-800 icon-hover-tada"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
