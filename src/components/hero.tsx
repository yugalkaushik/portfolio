import React from "react";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import resume from "../assets/resume.pdf";
import avatar from "../assets/avatar.png";

const Hero: React.FC = () => {
  const openResume = (): void => {
    window.open(resume, "_blank");
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 lg:px-8 max-w-6xl mx-auto relative">
      {/* Avatar Logo - Top Left */}
      <div className="fixed top-6 left-6 z-50">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img src={avatar} alt="Yugal Kaushik" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="text-center space-y-8">
        {/* Greeting */}
        <p className="text-2xl md:text-3xl text-gray-700 font-medium tracking-wide font-inter">
          Hi, I&apos;m
        </p>
        
        {/* Name in custom font */}
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-jember text-gray-900 leading-none">
          YUGAL KAUSHIK
        </h1>
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight font-inter">
          Software Developer.
        </h2>
        
        {/* Social Links and Resume */}
        <div className="flex items-center justify-center gap-8 pt-8">
          <a
            href="https://www.linkedin.com/in/yugalkaushik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
          >
            <img src={linkedin} alt="LinkedIn" className="w-12 h-12" />
          </a>
          <a
            href="https://github.com/yugalkaushik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
          >
            <img src={github} alt="GitHub" className="w-12 h-12" />
          </a>
          <button
            onClick={openResume}
            className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium text-base"
          >
            Resume
          </button>
        </div>
        
        {/* Badge */}
        <div className="pt-6">
          <div className="inline-block px-6 py-3 bg-gray-100 rounded-full">
            <p className="text-gray-700 text-sm font-medium">
              Software Engineer passionate about distributed systems, scalable applications and open-source contributions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
