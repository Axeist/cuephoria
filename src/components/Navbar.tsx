
import React, { useState, useEffect } from 'react';
import { Menu, X, Gamepad2, Siren } from 'lucide-react';
import { cn } from '@/lib/utils';
import NewsTicker from './NewsTicker';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
}

const NavLink = ({ href, children, isActive, onClick }: NavLinkProps) => (
  <a 
    href={href} 
    className="relative px-3 py-2 group"
    onClick={onClick}
  >
    <span className={cn(
      "relative z-10 transition-colors duration-300",
      isActive ? "text-neon-pink" : "text-white group-hover:text-neon-pink"
    )}>
      {children}
    </span>
    <span className={cn(
      "absolute bottom-0 left-0 h-0.5 bg-neon-pink transition-all duration-300",
      isActive ? "w-full" : "w-0 group-hover:w-full"
    )}></span>
  </a>
);

interface NavbarProps {
  activeSection?: string;
}

const Navbar = ({ activeSection = 'home' }: NavbarProps) => {
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#games", label: "Games", isPage: true }, // now supports page
    { href: "#tournaments", label: "Tournaments" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
    { href: "/blog", label: "Blog", isPage: true } // add blog link
  ];

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-gaming-darker/80 backdrop-blur-md shadow-lg py-1.5" 
            : "bg-transparent py-2 md:py-5"
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/2125ee9f-2006-4cf1-83be-14ea1d652752.png" 
              alt="Cuephoria" 
              className="h-7 md:h-12 animate-pulse-neon"
            />
            <span className="text-lg md:text-xl font-bold neon-text-blue animate-pulse-neon">CUEPHORIA</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              item.isPage ? (
                <a 
                  key={item.href} 
                  href={item.href}
                  className={cn(
                    "relative px-3 py-2 group",
                    window.location.pathname.startsWith(item.href)
                      ? "text-neon-pink font-bold"
                      : "text-white group-hover:text-neon-pink"
                  )}
                >
                  {item.label}
                </a>
              ) : (
                <NavLink 
                  key={item.href} 
                  href={item.href} 
                  isActive={activeSection === item.href.substring(1)}
                >
                  {item.label}
                </NavLink>
              )
            ))}
            <a 
              href="#book-now" 
              className={cn(
                "px-6 py-2 rounded-md font-medium transition-colors",
                activeSection === "book-now" 
                  ? "bg-neon-pink text-white" 
                  : "bg-neon-pink/80 text-white hover:bg-neon-pink animate-pulse-neon"
              )}
            >
              Book Now
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>
      
      {/* News Ticker positioned just below the header */}
      <div className={cn(
        "fixed left-0 right-0 z-40 transition-all duration-300 w-full",
        isScrolled ? "top-[46px] md:top-[60px]" : "top-[50px] md:top-[80px]" 
      )}>
        <NewsTicker />
      </div>
      
      {/* Mobile Menu with improved overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-gaming-darker/95 backdrop-blur-lg z-50 transition-all duration-300 md:hidden overflow-auto",
          mobileMenuOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div className="pt-24 pb-8 px-6 h-full overflow-y-auto">
          <nav className="flex flex-col items-center space-y-6">
            {navItems.map((item, index) => (
              item.isPage ? (
                <a 
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-lg transition-colors relative",
                    window.location.pathname.startsWith(item.href)
                      ? "text-neon-blue font-bold"
                      : "text-white hover:text-neon-blue"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </a>
              ) : (
                <a 
                  key={item.href}
                  href={item.href} 
                  className={cn(
                    "text-lg transition-colors relative",
                    activeSection === item.href.substring(1) 
                      ? "text-neon-blue" 
                      : "text-white hover:text-neon-blue"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                  {activeSection === item.href.substring(1) && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-neon-blue"></span>
                  )}
                </a>
              )
            ))}
            <a 
              href="#book-now" 
              className="px-6 py-2 rounded-md bg-neon-pink text-white font-medium hover:bg-neon-pink/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </a>
            
            {/* Special online booking promotion in mobile menu */}
            <div className="glass-card rounded-lg p-4 mt-6 border border-neon-blue/30 w-full">
              <p className="text-center text-sm text-gray-300 mb-2">
                <span className="block text-neon-pink font-bold mb-1 animate-blink-slow flex items-center justify-center gap-1">
                  <Siren className="h-4 w-4 text-red-500 animate-pulse" />
                  SPECIAL ONLINE OFFER!
                  <Siren className="h-4 w-4 text-red-500 animate-pulse" />
                </span>
                Book online and get <span className="text-neon-blue font-bold">FLAT 50% OFF</span> + 
                <span className="text-neon-pink font-bold"> FREE AR Metashot Cricket Challenge!</span>
              </p>
            </div>
            
            {/* Quick contact in mobile menu */}
            <div className="pt-6 border-t border-white/10 w-full flex flex-col items-center">
              <p className="text-gray-400 mb-2">Quick Contact:</p>
              <a 
                href={`https://wa.me/918637625155?text=${encodeURIComponent("Hello! I'd like to book a slot at Cuephoria.")}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-neon-blue"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
