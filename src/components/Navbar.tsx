
import React, { useState, useEffect } from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="relative px-3 py-2 group"
  >
    <span className="relative z-10 text-white group-hover:text-neon-pink transition-colors duration-300">
      {children}
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-pink group-hover:w-full transition-all duration-300"></span>
  </a>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-gaming-darker/80 backdrop-blur-md shadow-lg py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/2fa0e70e-4a7a-42ae-b82c-a47608a6d4ee.png" 
            alt="Cuephoria" 
            className="h-12 animate-pulse-neon"
          />
          <span className="text-xl font-bold neon-text-blue animate-pulse-neon">CUEPHORIA</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#games">Games</NavLink>
          <NavLink href="#gallery">Gallery</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <a 
            href="#book-now" 
            className="px-6 py-2 rounded-md bg-neon-pink text-white font-medium hover:bg-neon-pink/80 transition-colors animate-pulse-neon"
          >
            Book Now
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-gaming-darker bg-opacity-95 z-40 pt-20 transition-transform duration-300 md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center space-y-6 p-6">
          <a href="#home" className="text-lg text-white hover:text-neon-blue transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" className="text-lg text-white hover:text-neon-blue transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#games" className="text-lg text-white hover:text-neon-blue transition-colors" onClick={() => setMobileMenuOpen(false)}>Games</a>
          <a href="#gallery" className="text-lg text-white hover:text-neon-blue transition-colors" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
          <a href="#contact" className="text-lg text-white hover:text-neon-blue transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <a 
            href="#book-now" 
            className="px-6 py-2 rounded-md bg-neon-pink text-white font-medium hover:bg-neon-pink/80 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
