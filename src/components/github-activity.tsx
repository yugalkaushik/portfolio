import React from "react";

const GitHubActivity: React.FC = () => {
  return (
    <section id="github" className="py-20 px-4 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            GitHub Activity
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            My coding journey and open-source contributions
          </p>
          
          {/* GitHub Contribution Grid */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 mb-8">
            <div className="mb-6">
              <img
                src="https://ghchart.rshah.org/409ba5/yugalkaushik"
                alt="GitHub Contribution Chart"
                className="w-full max-w-4xl mx-auto"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
            <p className="text-sm text-gray-600">
              40+ contributions in the last year across multiple open-source projects
            </p>
          </div>
          
          {/* GitHub Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* GitHub Stats */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">GitHub Stats</h3>
              <img
                src="https://github-readme-stats.vercel.app/api?username=yugalkaushik&show_icons=true&theme=default&hide_border=true&bg_color=ffffff&title_color=000000&text_color=333333&icon_color=409ba5"
                alt="GitHub Stats"
                className="w-full rounded-lg"
              />
            </div>
            
            {/* Top Languages */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Most Used Languages</h3>
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=yugalkaushik&layout=compact&theme=default&hide_border=true&bg_color=ffffff&title_color=000000&text_color=333333"
                alt="Top Languages"
                className="w-full rounded-lg"
              />
            </div>
          </div>
          
          {/* Notable Contributions */}
          <div className="mt-8 bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Open Source Contributions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="border-l-4 border-black pl-4">
                <h4 className="font-medium text-gray-900">Processing Foundation</h4>
                <p className="text-sm text-gray-600">p5.js Web Editor enhancements</p>
              </div>
              <div className="border-l-4 border-black pl-4">
                <h4 className="font-medium text-gray-900">OpenMRS</h4>
                <p className="text-sm text-gray-600">Healthcare platform contributions</p>
              </div>
              <div className="border-l-4 border-black pl-4">
                <h4 className="font-medium text-gray-900">Kiwix</h4>
                <p className="text-sm text-gray-600">Educational content platform</p>
              </div>
            </div>
          </div>
          
          {/* GitHub Profile Link */}
          <div className="mt-8">
            <a
              href="https://github.com/yugalkaushik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
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
