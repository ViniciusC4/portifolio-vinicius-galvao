import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-[#1E202C] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-white hover:text-[#BFC0D1] transition-colors duration-300"
          >
            Vinicius <span className="text-[#60519B]">Galvão</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-[#31323E] hover:text-[#BFC0D1] ${
                isActive('/') ? 'bg-[#60519B] text-white' : 'text-[#BFC0D1]'
              }`}
            >
              <Home size={18} />
              <span>Início</span>
            </Link>
            <Link
              to="/sobre"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-[#31323E] hover:text-[#BFC0D1] ${
                isActive('/sobre') ? 'bg-[#60519B] text-white' : 'text-[#BFC0D1]'
              }`}
            >
              <User size={18} />
              <span>Sobre</span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-[#BFC0D1] hover:text-white hover:bg-[#31323E] transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-[#31323E] hover:text-[#BFC0D1] ${
                  isActive('/') ? 'bg-[#60519B] text-white' : 'text-[#BFC0D1]'
                }`}
              >
                <Home size={18} />
                <span>Início</span>
              </Link>
              <Link
                to="/sobre"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-[#31323E] hover:text-[#BFC0D1] ${
                  isActive('/sobre') ? 'bg-[#60519B] text-white' : 'text-[#BFC0D1]'
                }`}
              >
                <User size={18} />
                <span>Sobre</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

