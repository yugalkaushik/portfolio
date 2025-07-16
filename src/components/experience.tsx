import React from "react";

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
      name: "Java", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", 
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
      name: "Next.js", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg", 
      category: "frontend" 
    },
    { 
      name: "Tailwind", 
      icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", 
      category: "frontend" 
    },
    { 
      name: "Bootstrap", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg", 
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
      name: "PostgreSQL", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg", 
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
      name: "Vercel", 
      icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg", 
      category: "tools" 
    },
    { 
      name: "Linux", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg", 
      category: "tools" 
    },
    { 
      name: "VS Code", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg", 
      category: "tools" 
    },
    { 
      name: "Figma", 
      icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg", 
      category: "tools" 
    },
    { 
      name: "Postman", 
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", 
      category: "tools" 
    }
  ];

  const experience = [
    {
      company: "PERSIST VENTURES",
      role: "Web Developer Intern",
      duration: "August 2024 - September 2024"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Skills</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and technical expertise
          </p>
        </div>
        
        {/* Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Work Experience</h3>
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            {experience.map((exp, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-semibold text-gray-900">{exp.role}</h4>
                    <span className="text-sm text-gray-500">{exp.duration}</span>
                  </div>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Skills & Tools Combined */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Skills & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {skillsAndTools.map((skill, index) => (
              <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 flex items-center space-x-3 hover:shadow-md transition-shadow">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-6 h-6 object-contain flex-shrink-0"
                  onError={(e) => {
                    // Fallback if SVG fails to load
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="text-sm font-medium text-gray-700 truncate">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
