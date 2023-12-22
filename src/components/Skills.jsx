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
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <CpuChipIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Skills &amp; Technologies
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mb-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Nisi sit ipsa delectus eum quo voluptas aspernatur
                        accusantium distinctio possimus est.
                    </p>
                    <div className="flex flex-row justify-center items-center gap-4">
                        <div className="flex flex-row mr-6">
                            <CheckBadgeIcon className="text-green-400 w-65 h-6 flex-shrink-0 mr-3" />
                            <p>Proficient</p>
                        </div>
                        <div className="flex flex-row mr-6">
                            <MinusCircleIcon className="text-yellow-400 w-65 h-6 flex-shrink-0 mr-3" />
                            <p>Familiar</p>
                        </div>
                        <div className="flex flex-row mr-6">
                            <BookOpenIcon className="text-blue-400 w-65 h-6 flex-shrink-0 mr-3" />
                            <p>Learning</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap lg:w-2/3 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) => (
                        <div key={skill.skill} className="p-2 w-1/3">
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
