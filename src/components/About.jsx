import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Daily Deep Learning
        </h1>

        {/* Introduction */}
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-4">
          Welcome to my learning journey! I’m passionate about Data Science, Machine Learning, and AI. Through my journey, I aim to continuously learn, apply, and share knowledge with the community.
        </p>

        {/* Learning Path */}
        <div className="text-lg text-gray-700 dark:text-gray-300 space-y-6">
          <p>
            Starting from the basics of statistics and Python programming, I gradually immersed myself in the world of machine learning algorithms, neural networks, and advanced AI techniques.
          </p>
          <p>
            I believe in learning by doing, so most of my learning happens through hands-on projects where I build real-world applications, explore data, and train models. Through every project, I uncover new insights and refine my understanding.
          </p>
          <p>
            The journey is never-ending, and my goal is to contribute to the data science community by sharing what I learn through blogs, tutorials, and open-source projects.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-6 text-center">
          <a
            href="/"
            className="inline-block px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            Explore my learning journey
          </a>
        </div>

        {/* Quote or Personal Message */}
        <blockquote className="mt-10 italic text-gray-500 dark:text-gray-400 text-center">
          "The best way to learn is to teach, and the best way to grow is to share."
        </blockquote>
      </div>
    </div>
  );
};

export default About;
