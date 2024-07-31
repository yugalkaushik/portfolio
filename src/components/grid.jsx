import React from "react";
import sparkle from "../assets/sparkle.png";
import sms from "../assets/sms.png";
import talkify from "../assets/talkify.png";

const items = [
  {
    title: "SPARKLE",
    description: "Sparkle is a dynamic e-commerce platform built with the MERN stack, featuring a modern, responsive UI with React and Tailwind CSS. It includes secure JWT authentication, CRUD functionality, and seamless integration with MongoDB, providing an optimal shopping experience across devices.",
    image: sparkle,
    github: "https://github.com/yugalkaushik/sparkle",
    deployed: "https://sparkleyk.vercel.app/"
  },
  {
    title: "STUDENT MANAGEMENT SYSTEM",
    description: "This C++ project offers a streamlined solution for managing student and course data, featuring functionalities like student addition, course management, and enrollment tracking. It includes simple text file storage for persistent data and aims to ease administrative tasks in educational environments.",
    image: sms,
    github: "https://github.com/yugalkaushik/student-management"
  },
  {
    title: "TALKIFY",
    description: "Talkify is a user-friendly web application that transforms text into spoken language, featuring an intuitive interface for easy text entry, voice selection, and speech conversion. It ensures a responsive design for a seamless experience across various devices and screen sizes.",
    image: talkify,
    github: "https://github.com/yugalkaushik/text-to-speech",
    deployed: "https://yugalkaushik.github.io/text-to-speech/"
  }
];

const BentoGridItem = ({ title, description, image, github, deployed, className }) => {
  return (
    <div className={`p-4 bg-white border-2 border-black rounded-xl shadow ${className}`}>
      <div className="mb-4 border border-gray-700  rounded-xl">
        <img src={image} alt={title} className="w-full h-32 object-cover rounded-xl" />
      </div>
      <div className="flex items-center space-x-2">
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      <p className="text-sm text-neutral-700  mb-4">{description}</p>
      <div className="flex space-x-4 justify-center">
        <a href={github} target="_blank" rel="noopener noreferrer" className="w-full text-center hover:text-white border p-1 rounded-md hover:bg-black">
          GitHub
        </a>
        {deployed && (
          <a href={deployed} target="_blank" rel="noopener noreferrer" className="w-full text-center hover:text-white border p-1 rounded-md hover:bg-black">
            Website
          </a>
        )}
      </div>
    </div>
  );
};

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          image={item.image}
          github={item.github}
          deployed={item.deployed}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </div>
  );
}
