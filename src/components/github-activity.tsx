import React from "react";

const GitHubActivity: React.FC = () => {
  return (
    <section id="github" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 font-retroactive">
            GITHUB ACTIVITY
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-4 font-georgia">
            My coding journey and open-source contributions
          </p>
          
          <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-100 mb-6 sm:mb-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 transform">
            <div className="mb-4 sm:mb-6">
              <img
                src="https://ghchart.rshah.org/409ba5/yugalkaushik"
                alt="GitHub Contribution Chart"
                className="w-full max-w-4xl mx-auto"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
            <p className="text-sm sm:text-base text-gray-600 font-georgia">
              40+ contributions in the last year across multiple open-source projects
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 transform">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 font-georgia">Open Source Contributions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left">
              <div className="border-l-4 border-black pl-3 sm:pl-4">
                <h4 className="font-medium text-gray-900 text-base sm:text-lg font-georgia">Processing Foundation</h4>
                <p className="text-sm sm:text-base text-gray-600 font-georgia">p5.js Web Editor enhancements</p>
              </div>
              <div className="border-l-4 border-black pl-3 sm:pl-4">
                <h4 className="font-medium text-gray-900 text-base sm:text-lg font-georgia">OpenMRS</h4>
                <p className="text-sm sm:text-base text-gray-600 font-georgia">Healthcare platform contributions</p>
              </div>
              <div className="border-l-4 border-black pl-3 sm:pl-4">
                <h4 className="font-medium text-gray-900 text-base sm:text-lg font-georgia">Kiwix</h4>
                <p className="text-sm sm:text-base text-gray-600 font-georgia">Educational content platform</p>
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-8">
            <a
              href="https://github.com/yugalkaushik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-black text-white rounded-lg hover:bg-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 font-medium transform text-base sm:text-lg font-georgia"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
