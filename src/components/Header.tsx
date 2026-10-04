import React, { useState } from 'react';
import { Phone, Menu, X, Calendar, Crown } from 'lucide-react';
import { BUSINESS_INFO } from '../data/guestHouseData';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'rooms', label: 'Rooms & Accommodation' },
    { id: 'contact', label: 'Contact & Booking' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#351052] text-white shadow-lg border-b border-[#D6B879]/30 backdrop-blur-md bg-opacity-95">
      
      {/* Top micro bar for telephone & address */}
      <div className="bg-[#240a38] text-xs py-1.5 px-4 border-b border-purple-900/50 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-purple-200">
          <div className="flex items-center gap-6">
            <a href={BUSINESS_INFO.telLink} className="flex items-center gap-1.5 hover:text-[#D6B879] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#D6B879]" />
              <span className="font-medium">{BUSINESS_INFO.phoneFormatted}</span>
            </a>
            <span className="text-purple-400">|</span>
            <span>{BUSINESS_INFO.address.full}</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] tracking-wide text-[#D6B879]">
            <span>⭐ Boutique Edinburgh Accommodation</span>
            <span>·</span>
            <span>Free Private Parking</span>
          </div>
        </div>
      </div>

      {/* Main Header Row (Strict 3-zone Top Bar Contract) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Wordmark Brand */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 group text-left cursor-pointer focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-[#D6B879]/15 border border-[#D6B879]/40 flex items-center justify-center text-[#D6B879] group-hover:bg-[#D6B879] group-hover:text-[#351052] transition-colors">
            <Crown className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-white group-hover:text-[#D6B879] transition-colors block leading-tight">
              Oleanders Guest House
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#D6B879] block -mt-0.5">
              Edinburgh, Scotland
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-medium transition-colors relative py-2 cursor-pointer ${
                  isActive ? 'text-[#D6B879] font-semibold' : 'text-purple-100 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D6B879] rounded-full animate-fade-in" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={BUSINESS_INFO.telLink}
            className="p-2.5 rounded-xl border border-purple-800 text-purple-200 hover:text-white hover:border-[#D6B879] transition-colors"
            title="Call Guest House"
          >
            <Phone className="w-4 h-4 text-[#D6B879]" />
          </a>
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 bg-[#D6B879] hover:bg-[#c4a465] text-[#351052] font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-95 cursor-pointer flex items-center gap-2 whitespace-nowrap"
          >
            <Calendar className="w-4 h-4 text-[#351052]" />
            Book Your Stay
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="px-3 py-1.5 bg-[#D6B879] text-[#351052] font-bold text-xs rounded-lg"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-purple-200 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#240a38] border-b border-[#D6B879]/30 px-4 pt-3 pb-6 space-y-3 animate-fade-in">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left py-2.5 px-4 rounded-xl text-base font-medium transition-colors ${
                currentPage === link.id
                  ? 'bg-[#351052] text-[#D6B879] font-bold border-l-4 border-[#D6B879]'
                  : 'text-purple-100 hover:bg-[#351052]/50'
              }`}
            >
              {link.label}
            </button>
          ))}

          <div className="pt-2 border-t border-purple-900/60 space-y-2">
            <a
              href={BUSINESS_INFO.telLink}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#351052] text-white rounded-xl text-sm font-medium border border-purple-800"
            >
              <Phone className="w-4 h-4 text-[#D6B879]" />
              Call +44 131 332 3831
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-[#D6B879] text-[#351052] font-bold rounded-xl text-sm uppercase tracking-wider"
            >
              Book Your Stay
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
