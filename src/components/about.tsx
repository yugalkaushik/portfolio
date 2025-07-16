import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Software Engineer passionate about building scalable solutions and open-source contributions
          </p>
        </div>
        
        {/* Content */}
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              I&apos;m a Computer Science student at Shree Guru Gobind Singh Tricentenary University, 
              passionate about distributed systems, scalable applications, and open-source contributions. 
              Currently pursuing my Bachelor of Technology in Computer Science and Engineering (2022-2026).
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              With hands-on experience as a Web Developer Intern at Persist Ventures, I&apos;ve built 
              production-ready analytics dashboards and optimized backend systems. I&apos;m also an 
              active open-source contributor with 40+ meaningful contributions to well-known 
              organizations including the Processing Foundation, OpenMRS, and Kiwix.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pt-6 border-t border-gray-100">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Education</h3>
                <p className="text-gray-600">BTech Computer Science & Engineering</p>
                <p className="text-gray-500">SGGSTU, Gurugram (2022-2026)</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">New Delhi, India</p>
                <p className="text-gray-500">yugalkaushik.yk@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
