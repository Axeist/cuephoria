import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Games', href: '#games' },
    { name: 'Tournaments', href: '#tournaments' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Book Now', href: '#book-now' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gaming-darker/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white">
          Cuephoria
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-gray-300 hover:text-white transition-colors duration-200 ${activeSection === item.href.slice(1) ? 'text-white font-medium' : ''}`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 right-0 w-64 h-full bg-gaming-darker shadow-xl transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4">
          <div className="flex justify-end">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col mt-8 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block text-gray-300 hover:text-white transition-colors duration-200 py-2 ${activeSection === item.href.slice(1) ? 'text-white font-medium' : ''}`}
                onClick={toggleMenu} // Close menu after clicking
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
