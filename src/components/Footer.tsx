import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2023 Ananya Mittal Portfolio. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <Github size={24} />
            </a>
            <a href="www.linkedin.com/in/ananya-mittal-b10748284" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;