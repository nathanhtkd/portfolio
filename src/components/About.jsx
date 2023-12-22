// src/components/About.jsx
import profilePic from '../images/pfp.png';
/**
 * About me section, pfp, mini blog?
 */
export default function About() {
    return (
        <section id="about" className="body-font text-white">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img
                        className="object-cover object-center rounded"
                        alt="professional headshot"
                        src={profilePic}
                    />
                </div>

                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                        Hey there, I'm Nathan!
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I'm an aspiring software engineer based in The Colony,
                        TX. My journey is filled with continuous learning and
                        exploring new technologies. When I'm not coding, I enjoy
                        taekwondo, dancing, gaming, and listening to K-pop.
                    </p>
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold">
                            What I'm Up To
                        </h2>
                        <p className="mt-4">
                            Currently, I'm working on personal projects in
                            React, honing my skills in full-stack development,
                            and exploring cloud technologies like AWS. I'm
                            passionate about building meaningful software that
                            impacts people's lives.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="inline-block ml-4 px-6 py-2 border-2 border-blue-500 text-blue-500 font-bold text-lg leading-tight uppercase rounded hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out animate-pulse">
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
