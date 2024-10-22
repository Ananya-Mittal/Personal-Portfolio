import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Ananya Mittal Portfolio</Link>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-blue-200">Home</Link>
            <Link to="/projects" className="hover:text-blue-200">Projects</Link>
            <Link to="/blog" className="hover:text-blue-200">Blog</Link>
            <Link to="/contact" className="hover:text-blue-200">Contact</Link>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <Link to="/" className="block py-2 hover:text-blue-200">Home</Link>
            <Link to="/projects" className="block py-2 hover:text-blue-200">Projects</Link>
            <Link to="/blog" className="block py-2 hover:text-blue-200">Blog</Link>
            <Link to="/contact" className="block py-2 hover:text-blue-200">Contact</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;