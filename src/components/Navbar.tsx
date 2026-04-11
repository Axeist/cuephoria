import React, { useState, useEffect } from 'react';
import { Menu, X, Siren, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
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
      "relative z-10 text-[13px] font-medium tracking-wide transition-colors duration-200",
      isActive ? "text-white" : "text-gray-400 group-hover:text-white"
    )}>
      {children}
    </span>
    <span className={cn(
      "absolute bottom-0.5 left-3 right-3 h-px transition-all duration-300",
      isActive ? "bg-neon-blue opacity-100" : "bg-white/20 opacity-0 group-hover:opacity-100"
    )} />
  </a>
);

interface NavbarProps {
  activeSection?: string;
}

const Navbar = ({ activeSection = 'home' }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!desktopMenuOpen) return;
    const close = (e: MouseEvent) => {
      const header = document.querySelector('header');
      if (header && !header.contains(e.target as HTMLElement)) setDesktopMenuOpen(false);
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [desktopMenuOpen]);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#games", label: "Games" },
    { href: "#tournaments", label: "Tournaments" },
    { href: "#gallery", label: "Gallery" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-[#0a0a14]/95 backdrop-blur-2xl shadow-[0_1px_0_rgba(255,255,255,0.04),0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-[#0a0a14]/80 backdrop-blur-xl"
        )}
      >
        {/* Main nav row */}
        <div className="container mx-auto px-4 h-14 md:h-16 flex items-center justify-between">
          {/* Brand */}
          <a href="/" className="flex items-center gap-2.5 group">
            <img
              src="/lovable-uploads/2125ee9f-2006-4cf1-83be-14ea1d652752.png"
              alt="Cuephoria"
              className="h-7 md:h-10 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-base md:text-lg font-bold tracking-tight text-white">
              CUEPHORIA
            </span>
          </a>

          {/* Desktop right side */}
          <div className="hidden md:flex items-center gap-1">
            <button
              onClick={(e) => { e.stopPropagation(); setDesktopMenuOpen(!desktopMenuOpen); }}
              className={cn(
                "p-2 rounded-lg transition-colors duration-200",
                desktopMenuOpen ? "text-white bg-white/[0.06]" : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
              )}
              aria-label={desktopMenuOpen ? "Close menu" : "Open menu"}
            >
              {desktopMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            <div className="w-px h-6 bg-white/[0.06] mx-2" />

            <Link
              to="/lite"
              className="relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[13px] font-semibold text-gray-300 hover:text-amber-400 hover:bg-amber-500/[0.06] transition-all duration-200"
            >
              <Flame className="h-3.5 w-3.5 text-amber-400" />
              Lite
              <span className="absolute -top-1.5 -right-1.5 px-1 py-px bg-emerald-500 text-[8px] font-black text-white rounded-full leading-none tracking-wide">NEW</span>
            </Link>

            <Link
              to="/book"
              className="ml-1 px-5 py-1.5 rounded-lg text-[13px] font-semibold bg-white text-[#0a0a14] hover:bg-gray-100 transition-colors duration-200"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop expandable nav */}
        <div className={cn(
          "hidden md:block overflow-hidden transition-all duration-300 border-t border-white/[0.04]",
          desktopMenuOpen ? "max-h-16 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="container mx-auto px-4 py-2.5">
            <nav className="flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  isActive={activeSection === item.href.substring(1)}
                  onClick={() => setDesktopMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>

        {/* Ticker */}
        <NewsTicker />

        {/* Bottom edge line */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 transition-all duration-300 md:hidden",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-[#0a0a14]/98 backdrop-blur-2xl" />
        <div className="relative pt-20 pb-8 px-6 h-full overflow-y-auto">
          <nav className="flex flex-col items-center gap-5">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-lg font-medium tracking-wide transition-colors",
                  activeSection === item.href.substring(1)
                    ? "text-white"
                    : "text-gray-500 hover:text-white"
                )}
                onClick={() => setMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {item.label}
              </a>
            ))}

            <div className="w-12 h-px bg-white/[0.08] my-2" />

            <Link
              to="/lite"
              className="relative flex items-center gap-2 px-6 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 font-semibold text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Flame className="h-4 w-4" />
              Cuephoria Lite
              <span className="px-1.5 py-0.5 bg-emerald-500 text-[8px] font-black text-white rounded-full leading-none">NEW</span>
            </Link>

            <Link
              to="/book"
              className="px-8 py-2.5 rounded-xl bg-white text-[#0a0a14] font-semibold text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </Link>

            <div className="w-full mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-center text-sm text-gray-400">
                <span className="block text-neon-pink font-semibold mb-1 flex items-center justify-center gap-1.5 text-xs">
                  <Siren className="h-3.5 w-3.5" />
                  SPECIAL ONLINE OFFER
                  <Siren className="h-3.5 w-3.5" />
                </span>
                Book online for <span className="text-white font-semibold">FLAT 50% OFF</span> +
                <span className="text-neon-blue font-semibold"> FREE AR Metashot</span>
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] w-full flex flex-col items-center gap-2">
              <p className="text-gray-600 text-xs uppercase tracking-widest">Quick Contact</p>
              <a
                href={`https://wa.me/918637625155?text=${encodeURIComponent("Hello! I'd like to book a slot at Cuephoria.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                WhatsApp Booking
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
