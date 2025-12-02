import React, { useState } from "react";
import sparkle from "../assets/sparkle.png";
import whisperspace from "../assets/whisperspace.png";
import thecipher from "../assets/thecipher.png";
import p5editor from "../assets/P5editor.png";


const Skeleton: React.FC = () => (
  <div className="flex flex-1 w-full h-32 min-h-[6rem] rounded-uniform glass border-min"></div>
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
    image: whisperspace,
    github: "https://github.com/yugalkaushik/WhisperSpace",
    deployed: "https://whisperspacee.vercel.app",
  },
  {
    title: "P5.JS WEB EDITOR CONTRIBUTIONS",
    description: "Enhanced p5.js web editor functionality through 8+ merged pull requests including image upload via URL implementation, keyboard navigation accessibility fixes, UI improvements with tooltips and comprehensive translations for Library Management.",
    image: p5editor,
    github: "https://github.com/processing/p5.js-web-editor/issues?q=is%3Apr%20state%3Aclosed%20author%3Ayugalkaushik",
  },
  {
    title: "SPARKLE",
    description: "Scalable e-commerce platform tested by 50+ users with secure JWT authentication, RESTful API architecture, dynamic shopping cart and React optimization techniques including code-splitting and lazy loading achieving 40% faster page loads.",
    image: sparkle,
    github: "https://github.com/yugalkaushik/sparkle",
    deployed: "https://sparkleyk.vercel.app/",
  },
  {
    title: "THE CIPHER",
    description: "Pixel-perfect retro-themed newspaper website showcasing advanced CSS styling techniques, custom animations and hover effects, responsive grid layouts, typography design, and interactive visual elements achieving 100% mobile compatibility.",
    image: thecipher,
    github: "https://github.com/yugalkaushik/thecipher",
    deployed: "https://theciipher.vercel.app"
  }
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
      className="rounded-uniform shadow-lg glass overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col border-min corner-shine-blue"
    >
      <div className="relative min-h-[7rem] sm:min-h-[8rem] md:min-h-[10rem]">
        {!imageLoaded && <Skeleton />}
        <img
          src={image}
          alt={title}
          className={`w-full h-28 sm:h-32 md:h-40 object-cover ${!imageLoaded ? "opacity-0 absolute" : "opacity-100"}`}
          loading="eager"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      <div className="p-3 sm:p-4 flex-grow flex flex-col">
        <div className="flex-grow">
          <h3 className="font-bold text-lg sm:text-xl text-white mb-2 font-georgia">{title}</h3>
          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-georgia">{description}</p>
        </div>

        <div className="flex gap-2 mt-3 sm:mt-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-1.5 px-2 sm:px-3 glass text-white rounded-uniform transition-colors duration-200 font-medium text-xs sm:text-sm font-georgia border-min hover:bg-white/10 corner-shine-blue"
          >
            GitHub
          </a>
          {deployed && (
            <a
              href={deployed}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-1.5 px-2 sm:px-3 glass text-white rounded-uniform transition-colors duration-200 font-medium text-xs sm:text-sm font-georgia border-min hover:bg-white/10 corner-shine-blue"
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
    <section id="projects" className="section-pad px-4 sm:px-6 lg:px-8 bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center section-header">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400 mb-4 font-anton">
            PROJECTS
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto px-4 font-georgia">
            A showcase of projects demonstrating full-stack development, open-source contributions, and innovative problem-solving
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 mb-5 sm:mb-6">
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
              className="px-5 sm:px-6 py-2 sm:py-3 bg-zinc-900 border border-zinc-700 rounded-uniform text-white hover:bg-zinc-800 hover:shadow-xl transition-colors duration-200 font-medium text-sm sm:text-base font-georgia flex items-center gap-3 mx-auto"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              {showAll ? 'Show Less Projects' : 'View Projects'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
