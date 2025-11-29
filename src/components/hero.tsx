import React, { useState } from "react";
import { Download, Copy, CheckSquare, Linkedin, Github } from "lucide-react";
import resume from "../assets/resume.pdf";
import avatar from "../assets/avatar.png";

const Hero: React.FC = () => {
  const openResume = (): void => {
    window.open(resume, "_blank");
  };

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (): void => {
    const email = "yugalkaushik.yk@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      // fallback: create a temporary input
      const input = document.createElement("input");
      input.value = email;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section
      id="home"
      className="section-pad px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative flex flex-col items-center"
    >
      <div className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
          <img src={avatar} alt="Yugal Kaushik" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="text-center space-y-6 sm:space-y-8 w-full max-w-3xl hero-glow">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 text-sm sm:text-base">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400" />
          Available for work
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-anton text-white leading-none tracking-tight px-2 text-hero underline-accent relative z-[1]">
          YUGAL KAUSHIK
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-100 leading-tight font-cowboy px-2 relative z-[1]">
          Software Engineer.
        </h2>
        
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6 pt-6 sm:pt-8 px-2 relative z-[1]">
          <a
            href="https://www.linkedin.com/in/yugalkaushik"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-uniform border-min corner-shine-blue px-4 h-10 sm:h-12 lg:h-14 flex items-center gap-2 text-white"
          >
            <Linkedin className="w-5 h-5" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="https://github.com/yugalkaushik"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-uniform border-min corner-shine-blue px-4 h-10 sm:h-12 lg:h-14 flex items-center gap-2 text-white"
          >
            <Github className="w-5 h-5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <button
            onClick={openResume}
            className="glass rounded-uniform border-min corner-shine-blue px-4 h-10 sm:h-12 lg:h-14 flex items-center gap-2 text-white font-semibold"
          >
            <Download className="w-5 h-5" />
            <span>Resume</span>
          </button>
          <button
            onClick={handleCopyEmail}
            className="glass rounded-uniform border-min corner-shine-blue px-4 h-10 sm:h-12 lg:h-14 flex items-center gap-2 text-white font-semibold"
            aria-label="Copy Email"
          >
            {copied ? (
              <CheckSquare className="w-5 h-5" />
            ) : (
              <Copy className="w-5 h-5" />
            )}
            <span>{copied ? "Copied" : "Email"}</span>
          </button>
        </div>
        
        <div className="pt-4 sm:pt-6 px-2 w-full relative z-[1]">
          <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-3 sm:py-4 glass border-min rounded-uniform corner-shine-blue">
            <p className="text-zinc-300 text-lg sm:text-xl font-bold text-center leading-relaxed font-garamond">
              Software Engineer passionate about distributed systems, scalable applications and open-source contributions
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-center space-x-2 text-blue-300 pt-2 sm:pt-4 px-2 relative z-[1]">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <span className="text-sm sm:text-base font-medium text-center text-blue-100">New Delhi, India</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
