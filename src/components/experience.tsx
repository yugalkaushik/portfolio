import React, { useState } from "react";

const Experience: React.FC = () => {
  const skillsAndTools = [
    // Programming Languages
    { 
      name: "JavaScript", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", 
      category: "language" 
    },
    { 
      name: "TypeScript", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", 
      category: "language" 
    },
    { 
      name: "Python", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", 
      category: "language" 
    },
    { 
      name: "C++", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg", 
      category: "language" 
    },
    { 
      name: "HTML", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg", 
      category: "language" 
    },
    { 
      name: "CSS", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg", 
      category: "language" 
    },
    
    // Frontend Frameworks
    { 
      name: "React", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", 
      category: "frontend" 
    },
    { 
      name: "Vue.js", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg", 
      category: "frontend" 
    },
    { 
      name: "Next.js", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg", 
      category: "frontend" 
    },
    { 
      name: "Tailwind", 
      icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", 
      category: "frontend" 
    },
    
    // Backend & Database
    { 
      name: "Node.js", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg", 
      category: "backend" 
    },
    { 
      name: "Express", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg", 
      category: "backend" 
    },
    { 
      name: "MongoDB", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg", 
      category: "backend" 
    },
    { 
      name: "MySQL", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg", 
      category: "backend" 
    },
    { 
      name: "Redis", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg", 
      category: "backend" 
    },
    
    // Tools & DevOps
    { 
      name: "Git", 
      icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", 
      category: "tools" 
    },
    { 
      name: "GitHub", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg", 
      category: "tools" 
    },
    { 
      name: "Docker", 
      icon: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg", 
      category: "tools" 
    },
    { 
      name: "Linux", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg", 
      category: "tools" 
    },
    { 
      name: "Postman", 
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", 
      category: "tools" 
    }
  ];

  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "PRODINIT Software Solutions",
      location: "Gurugram, India",
      from: "July 2025",
      to: "Oct 2025",
      summary: [
        "ProdInit Website: Collaborated with the development team to rebuild and launch the Prodinit website, learning about user experience and deployment.",
        "Testing Framework: Developing a testing framework for ElevenLabs conversational agents, integrating custom LLM personas to evaluate agent performance in chat-based interactions and conversation flows.",
        "Voice AI Eval: Worked on Voice AI Evaluation and Automation project leveraging Pipecat for voice agent orchestration and Langfuse for conversation tracking and analytics, enabling structured evaluation of LLM-driven conversational systems."
      ]
    }
  ];

  return (
    <section id="experience" className="section-pad px-4 sm:px-6 lg:px-8 bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center section-header">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-400 font-anton tracking-wide">
            EXPERIENCE & SKILLS
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto px-4 font-georgia mt-3">
            My professional journey and technical expertise
          </p>
        </div>
        
        {/* Experience */}
        <div className="section-header">
          <h3 className="text-xl sm:text-2xl font-georgia font-semibold text-white text-center mb-4 sm:mb-6">Work Experience</h3>
          <div className="space-y-4 sm:space-y-5">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
            ))}
          </div>
        </div>
        
        {/* Skills & Tools Combined */}
        <div>
          <h3 className="text-xl sm:text-2xl font-georgia font-semibold text-white text-center section-header">Skills & Tools</h3>
          <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
            {skillsAndTools.map((skill, index) => (
              <div key={index} className="glass p-2 sm:p-3 rounded-uniform shadow-sm border-min flex items-center space-x-2 sm:space-x-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 corner-shine-blue">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain flex-shrink-0"
                  onError={(e) => {
                    // Fallback if SVG fails to load
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="text-xs sm:text-base font-medium text-zinc-300 font-georgia leading-tight">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  from: string;
  to: string;
  summary: string[];
}

type ExperienceCardProps = {
  experience: ExperienceItem;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  const handleKeyToggle = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  };

  return (
    <div
      className="glass rounded-uniform p-5 sm:p-6 shadow-lg border-min corner-shine-blue cursor-pointer select-none focus-visible:outline-none focus-visible:ring-0"
      role="button"
      tabIndex={0}
      onClick={toggle}
      onKeyDown={handleKeyToggle}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h4 className="text-xl sm:text-2xl font-georgia font-semibold text-white">{experience.role}</h4>
          <p className="text-blue-300 font-medium text-base sm:text-lg font-georgia">{experience.company}</p>
        </div>
        <div className="text-sm sm:text-base text-zinc-400 font-georgia text-left sm:text-right">
          <p>{experience.from} – {experience.to}</p>
          <p>{experience.location}</p>
        </div>
      </div>
      <div className="flex justify-center mt-2 pointer-events-none">
        <span className={`text-blue-200 transition-transform ${open ? "rotate-180" : "rotate-0"}`}>
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </div>
      {open && (
        <ul className="mt-4 space-y-2 text-zinc-300 text-sm sm:text-base font-georgia">
          {experience.summary.map((point, idx) => (
            <li key={idx} className="flex gap-2">
              <span className="text-blue-400 mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
