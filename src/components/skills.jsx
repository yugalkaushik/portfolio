import React, { useState } from "react";
import github from "../assets/github.png";
import resume from "../assets/resume.pdf";

const ToolTip = ({ text, children }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative flex items-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {children}
            {hovered && (
                <div className="absolute w-28 left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-gray-800 text-white text-xs rounded-md shadow-lg">
                    {text}
                </div>
            )}
        </div>
    );
};

const Skills = () => {
    const openResume = () => {
        window.open(resume);
    };

    return (
        <div className="flex flex-col items-center mt-12 lg:mt-40">
            <div className="text-center">
                <h5 className="mb-2 text-gray-500">Explore My</h5>
                <h1 className="text-3xl lg:text-4xl font-roboto font-semibold">EXPERIENCE</h1>
            </div>
            <div className="flex flex-col items-center  mt-2 lg:mt-10">
                <p className="text-gray-600 mb-8 pr-2 pl-3 lg:pr-0 lg:pl-0">My resume provides a comprehensive look at the significant projects I've managed, relevant experience, acquired skills, and the meaningful contributions I've made.</p>
                <button 
                    className="border-2 border-black rounded-md hover:bg-black hover:text-white p-2 lg:m-1  font-varela w-1/3"
                    onClick={openResume}
                >
                    RESUME
                </button>
            </div>
            <div className="flex flex-col p-2 mt-10 lg:w-2/3 w-4/5  max-w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="flex flex-col items-center m-2 border-2 p-2 rounded-lg border-neutral-950">
                        <h1 className="text-xl lg:text-2xl p-2 mb-4">Languages</h1>
                        <div className="flex flex-row space-x-6 mb-4">
                            <ToolTip text="C++ - A powerful general-purpose programming language.">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="40" height="40" />
                            </ToolTip>
                            <ToolTip text="JavaScript - A versatile language primarily used for web development.">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
                            </ToolTip>
                            <ToolTip text="Python - A high-level language known for its readability and wide usage.">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40" />
                            </ToolTip>
                        </div>
                    </div>
                    <div className="flex flex-col items-center m-2 border-2 p-2 rounded-lg border-neutral-950">
                        <h1 className="text-xl lg:text-2xl p-2 mb-4">Frameworks & Libraries</h1>
                        <div className="flex flex-row space-x-6 mb-4">
                            <ToolTip text="React - A JavaScript library for building user interfaces.">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" />
                            </ToolTip>
                            <ToolTip text="Node.js - A JavaScript runtime built on Chrome's V8 JavaScript engine.">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" />
                            </ToolTip>
                            <ToolTip text="Express - A minimal and flexible Node.js web application framework.">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" />
                            </ToolTip>
                            <ToolTip text="Tailwind CSS - A utility-first CSS framework for creating custom designs.">
                                <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40" />
                            </ToolTip>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                    <div className="flex flex-col items-center m-2 border-2 p-2 rounded-lg border-neutral-950">
                        <h1 className="text-xl lg:text-2xl p-2 mb-4">Databases</h1>
                        <div className="flex flex-row space-x-10 mb-4">
                            <ToolTip text="MongoDB - A NoSQL database that uses JSON-like documents.">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40" />
                            </ToolTip>
                            <ToolTip text="MySQL - A popular open-source relational database management system.">
                                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40" />
                            </ToolTip>
                        </div>
                    </div>
                    <div className="flex flex-col items-center m-2 border-2 p-2 rounded-lg border-neutral-950">
                        <h1 className="text-xl lg:text-2xl p-2 mb-4">Tools</h1>
                        <div className="flex flex-row space-x-6 mb-4">
                            <ToolTip text="Git - A version control system to track changes in source code.">
                                <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" />
                            </ToolTip>
                            <ToolTip text="GitHub - A platform for hosting and reviewing code, managing projects.">
                                <img src={github} alt="github" width="40" height="40" />
                            </ToolTip>
                            <ToolTip text="Postman - A tool for API development and testing.">
                                <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40" />
                            </ToolTip>
                            <ToolTip text="Firebase - A platform offering a suite of cloud-based tools for app development.">
                                <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40" />
                            </ToolTip>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
