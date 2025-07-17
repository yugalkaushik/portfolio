import React, { useState } from "react";
import sparkle from "../assets/sparkle.png";
import sms from "../assets/sms.png";
import explora from "../assets/explora.png";
import chatbot from "../assets/chatbot.png";
import thecipher from "../assets/thecipher.png";

const Skeleton: React.FC = () => (
  <div className="flex flex-1 w-full h-32 min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

interface ProjectItem {
  title: string;
  description: string;
  image: string;
  github: string;
  deployed?: string;
}

const items: ProjectItem[] = [
  {
    title: "WHISPERSPACE",
    description: "Privacy-first real-time messaging platform serving 50+ concurrent users with ephemeral message storage eliminating 90% database overhead, Google OAuth authentication, Socket.io WebSocket communication managing dynamic rooms with automated cleanup.",
    image: chatbot, // Using existing image as placeholder
    github: "https://github.com/yugalkaushik/WhisperSpace",
    deployed: undefined,
  },
  {
    title: "P5.JS WEB EDITOR CONTRIBUTIONS",
    description: "Enhanced p5.js web editor functionality through 8+ merged pull requests including image upload via URL implementation, keyboard navigation accessibility fixes, UI improvements with tooltips and comprehensive translations for Library Management.",
    image: explora, // Using existing image as placeholder
    github: "https://github.com/processing/p5.js-web-editor",
    deployed: "https://editor.p5js.org/",
  },
  {
    title: "SPARKLE",
    description: "Scalable e-commerce platform tested by 50+ users with secure JWT authentication, RESTful API architecture, dynamic shopping cart and React optimization techniques including code-splitting and lazy loading achieving 40% faster page loads.",
    image: sparkle,
    github: "https://github.com/yugalkaushik/sparkle",
    deployed: "https://sparkleyk.vercel.app/",
  },
  {
    title: "B+ TREE DATABASE ENGINE",
    description: "High-performance database storage engine implementing B+ Tree indexing algorithm in C++ with optimized disk-based tuple storage, indexed file retrieval system, and efficient range query processing for fast data access and minimal I/O operations.",
    image: sms, // Using existing image as placeholder
    github: "https://github.com/yugalkaushik/Bplus-Tree",
    deployed: undefined,
  },
  {
    title: "THE CIPHER",
    description: "Pixel-perfect retro-themed newspaper website showcasing advanced CSS styling techniques, custom animations and hover effects, responsive grid layouts, typography design, and interactive visual elements achieving 100% mobile compatibility.",
    image: thecipher,
    github: "https://github.com/yugalkaushik/thecipher",
    deployed: "https://theciipher.vercel.app"
  },
  {
    title: "SMS CLASSIFICATION",
    description: "Machine learning project implementing text classification algorithms to distinguish spam from legitimate messages with preprocessing, feature extraction, and model evaluation achieving high accuracy rates.",
    image: sms,
    github: "https://github.com/yugalkaushik/sms-classification",
    deployed: undefined,
  },
];

interface BentoGridItemProps {
  title: string;
  description: string;
  image: string;
  github: string;
  deployed?: string;
}

const BentoGridItem: React.FC<BentoGridItemProps> = ({
  title,
  description,
  image,
  github,
  deployed,
}) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  return (
    <div
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col transform"
    >
      <div className="relative">
        {!imageLoaded && <Skeleton />}
        <img
          src={image}
          alt={title}
          className={`w-full h-32 sm:h-40 md:h-48 object-cover ${!imageLoaded ? "hidden" : ""}`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      <div className="p-4 sm:p-6 flex-grow flex flex-col">
        <div className="flex-grow">
          <h3 className="font-bold text-xl sm:text-2xl text-gray-900 mb-2 sm:mb-3 font-garamond">{title}</h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-garamond">{description}</p>
        </div>

        <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-6">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 px-3 sm:px-4 border-2 border-gray-900 text-black rounded-lg hover:bg-gray-900 hover:text-white transition-colors duration-200 font-medium text-sm sm:text-base font-garamond"
          >
            GitHub
          </a>
          {deployed && (
            <a
              href={deployed}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 px-3 sm:px-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium text-sm sm:text-base font-garamond"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedItems = showAll ? items : items.slice(0, 2);

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 font-retroactive">
            PROJECTS
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 font-garamond">
            A showcase of projects demonstrating full-stack development, open-source contributions, and innovative problem-solving
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {displayedItems.map((item: ProjectItem, i: number) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              image={item.image}
              github={item.github}
              deployed={item.deployed}
            />
          ))}
        </div>

        {items.length > 2 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 sm:px-8 py-2 sm:py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 font-medium transform text-base sm:text-lg font-garamond"
            >
              {showAll ? '▲ Show less' : '▼ Show all'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
