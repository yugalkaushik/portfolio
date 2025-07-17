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
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative py-16 sm:py-20">
      <div className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
          <img src={avatar} alt="Yugal Kaushik" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="text-center space-y-6 sm:space-y-8 w-full max-w-3xl">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-medium tracking-wide font-cowboy px-2">
          Hi, I&apos;m
        </p>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-jember text-gray-900 leading-none px-2">
          YUGAL KAUSHIK
        </h1>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight font-cowboy px-2">
          Software Engineer.
        </h2>
        
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6 pt-6 sm:pt-8 px-2">
          <a
            href="https://www.linkedin.com/in/yugalkaushik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
          >
            <img src={linkedin} alt="LinkedIn" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
          </a>
          <a
            href="https://github.com/yugalkaushik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
          >
            <img src={github} alt="GitHub" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
          </a>
          <button
            onClick={openResume}
            className="w-20 h-10 sm:w-24 sm:h-12 lg:w-28 lg:h-14 bg-black text-white rounded-lg hover:scale-110 transition-transform duration-200 font-semibold text-base sm:text-xl lg:text-xl flex items-center justify-center font-retroactive tracking-wider"
          >
            Resume
          </button>
        </div>
        
        <div className="pt-4 sm:pt-6 px-2">
          <div className="inline-block px-3 py-2 sm:px-4 sm:py-2 bg-gray-100 rounded-full max-w-full">
            <p className="text-gray-900 text-base sm:text-base font-bold text-center leading-relaxed font-garamond">
              Software Engineer passionate about distributed systems, scalable applications and open-source contributions
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-center space-x-2 text-gray-700 pt-2 sm:pt-4 px-2">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <span className="text-sm sm:text-base font-medium text-center">New Delhi, India</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
