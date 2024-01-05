// src/components/Projects.js
import { useState } from 'react';
import { CodeBracketIcon } from '@heroicons/react/24/solid';
import { projects } from '../data';
import w5ac from '../images/tamu-zachry.jpg';
const images = [w5ac, w5ac, w5ac];

/**
 * Gallery of projects that I've worked on. Includes images, descriptions, and links.
 * Downloadable resume should be available
 */

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Stuff I've Built
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        In development!
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            onClick={() =>
                                setSelectedProject(
                                    selectedProject === index ? null : index,
                                )
                            }
                            className="flex flex-col border-4 border-gray-800 bg-gray-900 hover:opacity-100 hover:scale-105 transition-opacity duration-300 cursor-pointer">
                            <img
                                alt={project.title}
                                className="w-full h-48 object-cover"
                                src={images[index % images.length]}
                            />
                            <div className="p-8">
                                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                    {project.subtitle}
                                </h2>
                                <h1 className="title-font text-md font-medium text-white mb-3">
                                    {project.title}
                                </h1>
                                <p
                                    className={`leading-relaxed overflow-hidden text-sm ${
                                        selectedProject === index ? '' : 'h-16'
                                    }`}>
                                    {project.description}
                                </p>
                                {selectedProject !== index &&
                                    project.description.length > 100 && (
                                        <span className="text-green-400">
                                            ...Read more
                                        </span>
                                    )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
