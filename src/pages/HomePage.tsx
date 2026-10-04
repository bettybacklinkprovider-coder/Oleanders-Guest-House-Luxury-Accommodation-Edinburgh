import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Calendar,
  BedDouble,
  CheckCircle,
  Wifi,
  Car,
  Coffee,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Star,
  Map,
  Clock,
  Compass
} from 'lucide-react';
import { BUSINESS_INFO, ROOMS, ATTRACTIONS, TESTIMONIALS, VERIFIED_FACILITIES, IMAGES } from '../data/guestHouseData';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: (roomId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  const [quickCheckIn, setQuickCheckIn] = useState('');
  const [quickCheckOut, setQuickCheckOut] = useState('');

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking();
  };

  return (
    <div className="space-y-0">
      
      {/* ==========================================
          SECTION 1: HERO SECTION
          ========================================== */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#200833]">
        {/* Full-width Luxury Guest House Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.heroHouse}
            alt="Oleanders Guest House exterior in Edinburgh"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          {/* Measured Dark Scrim for Perfect Typography Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#200833] via-[#351052]/75 to-[#200833]/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8">
          
          {/* Unboxed Header Metadata (Anti-slop zero pill discipline) */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#D6B879]">
            <span>132 Craigleith Rd, Edinburgh</span>
            <span aria-hidden="true">·</span>
            <span>Boutique Accommodation</span>
            <span aria-hidden="true">·</span>
            <span>Free Private Parking</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-tight max-w-4xl mx-auto text-balance drop-shadow-lg">
            Welcome to <span className="text-[#D6B879]">Oleanders Guest House</span>
          </h1>

          <p className="text-base sm:text-xl text-purple-100 max-w-2xl mx-auto font-light leading-relaxed">
            A tranquil Victorian sanctuary in Craigleith, Edinburgh. Offering elegant en-suite bedrooms, warm Scottish hospitality, and effortless access to Edinburgh Castle.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 bg-[#D6B879] hover:bg-[#c4a465] text-[#351052] font-bold text-sm uppercase tracking-wider rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#351052]" />
              Book Your Stay
            </button>
            <a
              href={BUSINESS_INFO.telLink}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-[#D6B879]/50 font-medium text-sm rounded-xl backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D6B879]" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>

          {/* Quick Stay Reservation Widget */}
          <div className="pt-6">
            <form
              onSubmit={handleQuickSearch}
              className="max-w-3xl mx-auto bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-2xl border border-[#D6B879]/40 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left text-[#351052]"
            >
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#351052] mb-1">
                  Check-In
                </label>
                <input
                  type="date"
                  value={quickCheckIn}
                  onChange={(e) => setQuickCheckIn(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3 py-2 bg-[#F3EDF8] border border-purple-200 rounded-lg text-xs font-medium text-[#351052] outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#351052] mb-1">
                  Check-Out
                </label>
                <input
                  type="date"
                  value={quickCheckOut}
                  onChange={(e) => setQuickCheckOut(e.target.value)}
                  min={quickCheckIn || new Date().toISOString().split('T')[0]}
                  className="w-full px-3 py-2 bg-[#F3EDF8] border border-purple-200 rounded-lg text-xs font-medium text-[#351052] outline-none"
                />
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#351052] hover:bg-[#200833] text-[#D6B879] font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Check Availability</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D6B879]" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 2: ABOUT OUR GUEST HOUSE
          ========================================== */}
      <section className="py-16 lg:py-24 bg-[#F3EDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#76509B]">
                  Boutique Scottish Hospitality
                </span>
                <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#351052]">
                  About Oleanders Guest House
                </h2>
              </div>

              <p className="text-gray-700 text-base leading-relaxed">
                Oleanders Guest House is a charming boutique bed & breakfast situated in the desirable Craigleith residential district of Edinburgh. Housed in a beautifully maintained Victorian stone property, we combine historic architectural elegance with high-quality modern comfort.
              </p>

              <p className="text-gray-700 text-base leading-relaxed">
                Whether visiting Edinburgh for its world-famous Fringe Festival, exploring the Royal Mile, or traveling for business, our guest house provides a calm, restful retreat away from the city bustle, while keeping you just minutes from Princes Street and Haymarket.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white rounded-xl border border-purple-100 shadow-sm">
                  <span className="block text-2xl font-serif font-bold text-[#351052]">100% Private</span>
                  <span className="text-xs text-gray-600">Off-street guest parking on site</span>
                </div>
                <div className="p-4 bg-white rounded-xl border border-purple-100 shadow-sm">
                  <span className="block text-2xl font-serif font-bold text-[#351052]">10 Mins</span>
                  <span className="text-xs text-gray-600">Direct bus route to Waverley Station</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 bg-[#351052] hover:bg-[#200833] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 text-[#D6B879]" />
                </button>
              </div>
            </div>

            {/* Right Image Showcase */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={IMAGES.lounge}
                  alt="Cozy interior lounge at Oleanders Guest House"
                  className="w-full h-[420px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Highlight Card */}
              <div className="absolute -bottom-6 -left-6 bg-[#351052] text-white p-5 rounded-2xl border-2 border-[#D6B879] shadow-xl max-w-xs hidden sm:block">
                <div className="flex items-center gap-2 text-[#D6B879]">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-xs text-purple-100 mt-2 font-serif italic">
                  "Immature cleanliness, magnificent beds, and wonderful host guidance."
                </p>
                <span className="block text-[11px] text-[#D6B879] font-semibold mt-1">
                  — Verified Guest Review
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3: OUR ACCOMMODATION
          ========================================== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#76509B]">
              Refined Comfort & Elegance
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#351052]">
              Our Accommodation
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Each room at Oleanders Guest House is individually designed with rich royal purple accents, crisp Egyptian cotton linens, and private en-suite facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ROOMS.map((room) => (
              <div
                key={room.id}
                className="group bg-[#FAF7FC] border border-purple-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Room Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-[#351052] text-[#D6B879] font-serif font-bold px-3.5 py-1.5 rounded-lg text-sm shadow-lg border border-[#D6B879]/40">
                      £{room.pricePerNight} <span className="text-[10px] text-purple-200 font-sans font-normal">/ night</span>
                    </div>
                  </div>

                  {/* Room Details */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-[#351052] group-hover:text-[#76509B] transition-colors">
                        {room.name}
                      </h3>
                      {/* Unboxed metadata line */}
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1 font-medium">
                        <span>{room.bedType}</span>
                        <span>·</span>
                        <span>Up to {room.maxGuests} Guests</span>
                        <span>·</span>
                        <span>{room.sizeSqM} m²</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {room.description}
                    </p>

                    {/* Room Highlights */}
                    <ul className="space-y-1.5 pt-1">
                      {room.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-gray-700">
                          <CheckCircle className="w-3.5 h-3.5 text-[#76509B] shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="px-6 pb-6 pt-2 border-t border-purple-100/60 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('rooms')}
                    className="text-xs font-semibold text-[#76509B] hover:text-[#351052] transition-colors cursor-pointer"
                  >
                    View Room Amenities →
                  </button>
                  <button
                    onClick={() => onOpenBooking(room.id)}
                    className="px-5 py-2.5 bg-[#D6B879] hover:bg-[#c4a465] text-[#351052] font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-sm"
                  >
                    Book Room
                  </button>
                </div>

              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('rooms')}
              className="px-8 py-3.5 bg-[#351052] hover:bg-[#200833] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <span>Explore All Rooms & Rates</span>
              <ArrowRight className="w-4 h-4 text-[#D6B879]" />
            </button>
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 4: WHY STAY WITH US
          ========================================== */}
      <section className="py-16 lg:py-24 bg-[#351052] text-white relative overflow-hidden">
        
        {/* Subtle Gold Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D6B879]/5 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#76509B]/10 rounded-full filter blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D6B879]">
              The Oleanders Difference
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              Why Stay With Us
            </h2>
            <p className="text-purple-200 text-sm sm:text-base">
              We take pride in providing a warm, spotless, and relaxed experience for visitors from across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VERIFIED_FACILITIES.map((fac, idx) => (
              <div
                key={idx}
                className="group bg-[#240a38] border border-[#D6B879]/30 rounded-2xl overflow-hidden hover:border-[#D6B879] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                {/* Facility Image Header with Gradient Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#240a38] via-[#240a38]/40 to-transparent" />
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-[#351052]/85 backdrop-blur-md border border-[#D6B879]/60 flex items-center justify-center text-[#D6B879] shadow-lg">
                    {idx === 0 && <Car className="w-5 h-5" />}
                    {idx === 1 && <Wifi className="w-5 h-5" />}
                    {idx === 2 && <Coffee className="w-5 h-5" />}
                    {idx === 3 && <BedDouble className="w-5 h-5" />}
                    {idx === 4 && <Sparkles className="w-5 h-5" />}
                    {idx === 5 && <MapPin className="w-5 h-5" />}
                  </div>

                  <span className="absolute bottom-2 right-3 text-[10px] font-bold uppercase tracking-wider text-[#D6B879] bg-[#351052]/80 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-[#D6B879]/30">
                    Verified Feature
                  </span>
                </div>

                {/* Facility Card Content */}
                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-[#D6B879] group-hover:text-white transition-colors">
                      {fac.title}
                    </h3>
                    <p className="text-xs text-purple-100 leading-relaxed mt-2">
                      {fac.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof Quote */}
          <div className="mt-16 bg-[#200833] border border-[#D6B879]/30 rounded-2xl p-8 text-center max-w-4xl mx-auto space-y-4">
            <div className="flex justify-center text-[#D6B879]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <blockquote className="text-lg sm:text-xl font-serif italic text-purple-100 max-w-2xl mx-auto">
              "{TESTIMONIALS[0].comment}"
            </blockquote>
            <p className="text-xs text-[#D6B879] font-bold">
              — {TESTIMONIALS[0].guestName} ({TESTIMONIALS[0].country})
            </p>
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 5: EXPLORE EDINBURGH
          ========================================== */}
      <section className="py-16 lg:py-24 bg-[#F3EDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#76509B]">
              Discover Scotland's Capital
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#351052]">
              Explore Edinburgh
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Oleanders Guest House is ideally positioned in Craigleith with direct transport routes to Edinburgh’s top attractions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ATTRACTIONS.map((att) => (
              <div
                key={att.id}
                className="bg-white border border-purple-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col sm:flex-row h-full"
              >
                <div className="sm:w-2/5 relative h-48 sm:h-auto">
                  <img
                    src={att.image}
                    alt={att.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 bg-[#351052] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-md">
                    {att.category}
                  </span>
                </div>
                <div className="sm:w-3/5 p-6 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-[#351052]">
                      {att.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-[#76509B] font-semibold mt-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{att.distance}</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                      {att.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate('contact')}
                      className="text-xs font-bold text-[#351052] hover:text-[#76509B] transition-colors cursor-pointer inline-flex items-center gap-1"
                    >
                      <span>Get Directions From Guest House</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D6B879]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 6: CONTACT & BOOKING CTA
          ========================================== */}
      <section className="py-16 lg:py-24 bg-white border-t border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-royal-gradient rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl border-2 border-[#D6B879]/40 relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D6B879]">
                    Direct Reservations
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
                    Book Your Stay at Oleanders
                  </h2>
                </div>

                <p className="text-purple-100 text-sm sm:text-base leading-relaxed">
                  We look forward to welcoming you to Edinburgh. Contact us directly for guaranteed best rates, personal check-in assistance, and private parking confirmation.
                </p>

                <div className="space-y-3 pt-2 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#D6B879]/20 flex items-center justify-center text-[#D6B879]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs text-purple-300">Direct Phone</span>
                      <a href={BUSINESS_INFO.telLink} className="text-lg font-bold font-mono text-[#D6B879] hover:underline">
                        {BUSINESS_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#D6B879]/20 flex items-center justify-center text-[#D6B879]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs text-purple-300">Address</span>
                      <span className="text-sm font-medium text-white">{BUSINESS_INFO.address.full}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={() => onOpenBooking()}
                    className="px-8 py-4 bg-[#D6B879] hover:bg-[#c4a465] text-[#351052] font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-[#351052]" />
                    Book Online Now
                  </button>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium text-sm rounded-xl border border-purple-400/30 transition-all cursor-pointer text-center"
                  >
                    View Contact & Map
                  </button>
                </div>
              </div>

              {/* Direct Quick Inquiry Card */}
              <div className="bg-white text-[#351052] p-6 sm:p-8 rounded-2xl shadow-xl space-y-4">
                <h3 className="text-2xl font-serif font-bold text-[#351052]">
                  Quick Stay Inquiry
                </h3>
                <p className="text-xs text-gray-600">
                  Send us a quick message with your dates and room questions:
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    onOpenBooking();
                  }}
                  className="space-y-3"
                >
                  <div>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      className="w-full px-3.5 py-2.5 bg-[#FAF7FC] border border-purple-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-[#76509B]"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-3.5 py-2.5 bg-[#FAF7FC] border border-purple-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-[#76509B]"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      rows={2}
                      placeholder="Check-in dates & room preferences..."
                      className="w-full px-3.5 py-2.5 bg-[#FAF7FC] border border-purple-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-[#76509B]"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#351052] hover:bg-[#200833] text-[#D6B879] font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                  >
                    Send Instant Inquiry
                  </button>
                </form>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
