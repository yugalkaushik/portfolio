import React from "react";
import profileImage from "../assets/profile.jpg";

const About: React.FC = () => {
  return (
    <section id="about" className="section-pad px-4 sm:px-6 lg:px-8 bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center section-header">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400 mb-2 font-anton">
            ABOUT ME
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto font-georgia">
            Software Engineer by day and by night
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          <div className="relative order-2 lg:order-1">
            <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto lg:mx-0 rounded-uniform overflow-hidden shadow-2xl border-min glass corner-shine-blue">
              <img 
                src={profileImage} 
                alt="Yugal Kaushik" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          
          <div className="space-y-4 order-1 lg:order-2 text-center lg:text-left h-full">
            <div className="block-gap glass rounded-uniform border-min p-4 corner-shine-blue h-full flex">
              <p className="text-zinc-300 text-base sm:text-lg leading-loose font-georgia" >
                I am Yugal Kaushik, a dedicated Software Engineer with a focus on building robust, scalable applications and contributing to open-source projects. My expertise lies in designing efficient distributed systems, optimizing backend integrations, and creating seamless user experiences through innovative web development. I thrive on solving complex technical challenges and delivering impactful solutions that enhance performance and user engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
