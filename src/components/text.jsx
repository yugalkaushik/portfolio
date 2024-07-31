import React from 'react';

const Text = () => {
  const paragraph = "I bring a unique blend of creativity and technical expertise to develop exceptional and innovative software experiences.";

  const renderWords = (text, additionalClasses) => {
    return text.split(" ").map((word, idx) => (
      <span key={idx} className={`animate-fadeInDelayed ${additionalClasses}`} style={{ animationDelay: `${idx * 0.2}s` }}>{word} </span>
    ));
  };

  return (
    <div className="flex flex-col items-start lg:ml-40 lg:mt-56 mt-20 px-4 lg:px-0 z-40 w-full lg:w-5/12">
      <h1 className="text-5xl sm:text-7xl lg:text-9xl font-teko text-black">
        Hi, I'm
      </h1>
      <h1 className="text-5xl sm:text-7xl lg:text-9xl font-teko text-purple-800">
        YUGAL KAUSHIK
      </h1>
      <p className="text-base sm:text-lg lg:text-xl text-gray-600">
        {renderWords(paragraph, 'text-gray-600')}
      </p>
    </div>
  );
};

export default Text;
