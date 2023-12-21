// src/components/Hero.js
import pfpImage from '../images/pika-dalle-pfp.png';
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
/**
 * Basic Hero section, includes socials
 */

export default function Hero() {
    return (
        <section id="about" className="bg-heroImage bg-cover">
            <div style={{ backgroundColor: 'rgba(0, 0, 0, .7)' }}>
                <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-6 md:mb-16 md:mb-0 items-center text-center">
                        <h1 className="antialiased text-5xl mb-6 font-semibold text-white">
                            Hi, I'm Nathan!
                            <br className="hidden lg:inline-block" />
                        </h1>
                        <h2 className="sm:text-xl md:text-2xl mb-4 font-medium text-white">
                            Welcome to my personal website. 🤖
                        </h2>
                        <p className="leading-relaxed text-lg sm:w-1 md:w-4/5 ">
                            I'm an aspiring software engineer based in The
                            Colony, TX. I'm always up for learning something new
                            or tackling a new set of challenges. Aside from
                            tech, I like taekwondo 🥋, dancing 🕺, gaming 🎮,
                            reading 📕, and k-pop 🎧.
                        </p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex flex-col items-center justify-content">
                        <img
                            className="object-cover object-center rounded-[100px] h-33 w-33 grayscale-[40%]"
                            alt="cool pikachu generated by DALL-E"
                            src={pfpImage}
                        />
                        <div className="container bg-gray-700 rounded-xl sm:w-32 md:w-64 lg:w-1/2 mt-4">
                            <div className="flex justify-center space-x-4 p-1">
                                <a
                                    href="https://www.instagram.com/nathan.hartojo"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <FaInstagram
                                        style={{ color: '#C13584' }}
                                        className="h-12 w-12 icon-hover-tada"
                                    />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/nathanhartojo"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <FaLinkedin
                                        style={{ color: '#0077B5' }}
                                        className="h-12 w-12 icon-hover-tada"
                                    />
                                </a>
                                <a
                                    href="https://github.com/nathanhtkd"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <FaGithub
                                        style={{ color: '#171515' }}
                                        className="h-12 w-12 icon-hover-tada"
                                    />
                                </a>
                                <a
                                    href="https://www.facebook.com/nathanhtkd"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <FaFacebook
                                        style={{ color: '#1877F2' }}
                                        className="h-12 w-12 icon-hover-tada"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
