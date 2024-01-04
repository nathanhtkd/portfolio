// src/components/Skills.js
import {
    CheckBadgeIcon,
    CpuChipIcon,
    MinusCircleIcon,
    BookOpenIcon,
} from '@heroicons/react/24/solid';
import { skills } from '../data';
/**
 * Cool component to display skills
 */

export default function Skills() {
    return (
        <section id="skills" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <CpuChipIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Skills &amp; Technologies
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mb-4"></p>
                    <div className="flex flex-wrap justify-center items-center gap-2 md:gap-8">
                        <div className="flex flex-row mb-4 md:mb-0">
                            <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-3" />
                            <p>Proficient</p>
                        </div>
                        <div className="flex flex-row mb-4 md:mb-0">
                            <MinusCircleIcon className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-3" />
                            <p>Familiar</p>
                        </div>
                        <div className="flex flex-row mb-4 md:mb-0">
                            <BookOpenIcon className="text-blue-400 w-6 h-6 flex-shrink-0 mr-3" />
                            <p>Learning</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap lg:w-3/4 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) => (
                        <div
                            key={skill.skill}
                            className="p-2 w-full sm:w-1/2 md:w-1/3">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                {skill.prof === 'P' ? (
                                    <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                                ) : skill.prof === 'F' ? (
                                    <MinusCircleIcon className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" />
                                ) : (
                                    <BookOpenIcon className="text-blue-400 w-6 h-6 flex-shrink-0 mr-4" />
                                )}
                                <span className="title-font font-medium text-white">
                                    {skill.skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
