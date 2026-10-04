import React from 'react';
import { Phone, MapPin, Mail, Clock, Shield, Crown, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/guestHouseData';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#200833] text-white border-t-4 border-[#D6B879]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-purple-900/60">
          
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#D6B879] flex items-center justify-center text-[#351052]">
                <Crown className="w-4 h-4" />
              </div>
              <span className="text-2xl font-serif font-bold text-[#D6B879]">
                Oleanders Guest House
              </span>
            </div>
            <p className="text-xs text-purple-200 leading-relaxed">
              Experience authentic Scottish hospitality in our elegant Victorian boutique guest house in Craigleith, Edinburgh. Quiet surroundings, en-suite bedrooms, and private parking.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 bg-[#D6B879] hover:bg-[#c4a465] text-[#351052] font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
              >
                Inquire & Reserve
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D6B879] border-b border-purple-900/60 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-purple-200">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#D6B879] transition-colors"
                >
                  Home Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#D6B879] transition-colors"
                >
                  About Our Guest House
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('rooms')}
                  className="hover:text-[#D6B879] transition-colors"
                >
                  Rooms & Accommodation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#D6B879] transition-colors"
                >
                  Contact & Booking Inquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D6B879] border-b border-purple-900/60 pb-2">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs text-purple-200">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D6B879] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white">Telephone</span>
                  <a href={BUSINESS_INFO.telLink} className="hover:text-[#D6B879] font-mono text-sm">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D6B879] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white">Guest House Address</span>
                  <span>{BUSINESS_INFO.address.full}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#D6B879] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white">Email Address</span>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#D6B879]">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Stay Information */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D6B879] border-b border-purple-900/60 pb-2">
              Guest Times
            </h4>
            <div className="space-y-2 text-xs text-purple-200">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#D6B879]" />
                <span>Check-in: <strong className="text-white">{BUSINESS_INFO.checkIn}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#D6B879]" />
                <span>Check-out: <strong className="text-white">{BUSINESS_INFO.checkOut}</strong></span>
              </div>
              <div className="pt-2 text-[11px] text-purple-300 bg-[#351052] p-3 rounded-xl border border-purple-800">
                🅿️ <strong>Free Private Parking</strong> on site for all guest rooms. Direct bus routes to Princes Street stop outside.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-purple-300 gap-4">
          <p>© {new Date().getFullYear()} Oleanders Guest House. All Rights Reserved. 132 Craigleith Rd, Edinburgh EH4 2EQ.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-[#D6B879] transition-colors"
            >
              Contact Us
            </button>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#351052] hover:bg-purple-900 rounded-lg text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#D6B879]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
