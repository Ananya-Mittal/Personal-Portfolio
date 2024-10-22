import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Portfolio</h1>
      <img
        src="C:\Users\ANANYA MITTAL\Desktop\coding\Personal-Portfolio\my pic.jpg"
        alt="Profile"
        className="w-48 h-48 rounded-full mx-auto mb-6"
      />
      <p className="text-xl mb-8">
        Hi, I'm Ananya Mittal. I'm a passionate web developer with expertise in
        React, Node.js, and modern web technologies.
      </p>
      <div className="flex justify-center space-x-4">
        <Link
          to="/projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center"
        >
          View Projects <ArrowRight className="ml-2" size={20} />
        </Link>
        <Link
          to="/contact"
          className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition duration-300"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Home;