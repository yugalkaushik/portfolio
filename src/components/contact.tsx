import React from "react";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-pad px-4 sm:px-6 lg:px-8 bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center section-header">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400 mb-4 font-anton">GET IN TOUCH</h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto px-4 font-georgia">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you. Let&apos;s build something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Info */}
          <div className="space-y-5 sm:space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 font-georgia">Let&apos;s Connect</h3>
              <p className="text-zinc-400 leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base font-georgia">
                I&apos;m always interested in hearing about new opportunities, exciting projects, 
                or just having a chat about technology and development. Feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-uniform flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-medium text-white text-sm sm:text-base font-georgia">Email</h4>
                  <a href="mailto:yugalkaushik@gmail.com" className="text-zinc-400 hover:text-white transition-colors text-xs sm:text-sm break-all font-georgia">
                    yugalkaushik.yk@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-uniform flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-medium text-white text-sm sm:text-base font-georgia">LinkedIn</h4>
                  <a href="https://linkedin.com/in/yugalkaushik" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors text-xs sm:text-sm break-all font-georgia">
                    linkedin.com/in/yugalkaushik
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-uniform flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-medium text-white text-sm sm:text-base font-georgia">GitHub</h4>
                  <a href="https://github.com/yugalkaushik" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors text-xs sm:text-sm break-all font-georgia">
                    github.com/yugalkaushik
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Response */}
            <div className="glass rounded-uniform p-3 sm:p-4 shadow-lg border-min corner-shine-blue">
              <h4 className="font-medium text-white mb-2 text-sm sm:text-base font-georgia">Quick Response</h4>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-georgia">
                I typically respond to emails within 24 hours. For urgent matters, 
                feel free to connect with me on LinkedIn.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-uniform p-4 sm:p-6 shadow-lg border-min corner-shine-blue">
            <form
              action="https://formsubmit.co/yugalkaushik.yk@gmail.com"
              method="POST"
              className="space-y-3 sm:space-y-4"
            >
              {/* FormSubmit configuration */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Portfolio Contact Form Submission" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-2 sm:px-3 py-1.5 sm:py-2 glass border-min text-white rounded-uniform focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-xs sm:text-sm placeholder-zinc-500 corner-shine-blue"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-2 sm:px-3 py-1.5 sm:py-2 glass border-min text-white rounded-uniform focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-xs sm:text-sm placeholder-zinc-500 corner-shine-blue"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-2 sm:px-3 py-1.5 sm:py-2 glass border-min text-white rounded-uniform focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-xs sm:text-sm placeholder-zinc-500 corner-shine-blue"
                  placeholder="What would you like to discuss?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={3}
                  className="w-full px-2 sm:px-3 py-1.5 sm:py-2 glass border-min text-white rounded-uniform focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none text-xs sm:text-sm placeholder-zinc-500 corner-shine-blue"
                  placeholder="Tell me about your project or idea..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full glass text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded-uniform hover:bg-white/10 transition-colors duration-200 font-medium text-xs sm:text-sm border-min corner-shine-blue"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
