// src/components/About.jsx
import profilePic from '../images/pfp.png';
import { ArrowLeftIcon, ArrowUpIcon } from '@heroicons/react/24/solid';
/**
 * About me section, pfp, mini blog?
 */
export default function About() {
    return (
        <section id="about" className="body-font text-gray-400 bg-gray-900">
            <div className="container mx-auto flex px-5 py-24 pb-10 items-center flex-col md:flex-row">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0">
                    <img
                        className="object-cover object-center rounded-full ring-[6px] ring-gray-300 dark:ring-gray-500"
                        alt="professional headshot"
                        src={profilePic}
                    />
                </div>

                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col items-center md:items-start text-center md:text-left">
                    <h1 className="title-font sm:text-4xl text-xl mb-4 font-medium text-white flex items-center justify-center md:justify-start">
                        <ArrowLeftIcon className="w-6 h-6 mr-2 hidden md:block" />
                        <ArrowUpIcon className="w-6 h-6 mr-2 md:hidden" />
                        That's me!
                    </h1>
                    <p className="text-xs mb-4 leading-relaxed">
                        Currently working as a Frontend Intern at TGI Friday's
                        Digital Team 🥔. Gaining hands-on experience with Data
                        Analysis, Web Development, Search Engine Optimization
                        (SEO), and more! I'm always on the lookout for new
                        opportunities in Software Engineering – if you have an
                        exciting project or role in mind, feel free to get in
                        touch!
                    </p>
                    <p className="text-xs mb-8 leading-relaxed">
                        At Texas A&M, I've been actively involved in hackathons
                        and various student organizations, including the
                        Phillipine Student Organization (Philsa)☀️, Aggie Coding
                        Club 💻, and the Texas A&M Blockchain Club⚡, fueling my
                        passion for technology and community.
                    </p>
                    <h2 className="text-xl font-semibold mb-3">
                        What I'm Up To
                    </h2>
                    <p className="text-xs mb-8 leading-relaxed">
                        When I'm not coding, you can find me exploring new
                        cultures, dancing, or trying out different world
                        cuisines 🍔. I love traveling ✈️ – it's always exciting
                        to see new places and experience different ways of life.
                        In my downtime, I'm usually hanging out with friends,
                        playing video games, or getting in games of pickleball
                        or basketball.
                    </p>

                    <div className="flex justify-center">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="inline-block px-6 py-2 border-2 border-blue-500 text-blue-500 font-bold text-lg leading-tight uppercase rounded hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out animate-pulse">
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
