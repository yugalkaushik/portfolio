import React from "react";
import profileImage from "../assets/profile.jpg";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={profileImage} 
                alt="Yugal Kaushik" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-6 order-1 lg:order-2 text-center lg:text-left">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-2 font-retroactive">
                ABOUT ME
              </h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-garamond">
                Software Engineer by day and by night
              </h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-800 text-lg sm:text-xl leading-relaxed font-garamond" >
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
