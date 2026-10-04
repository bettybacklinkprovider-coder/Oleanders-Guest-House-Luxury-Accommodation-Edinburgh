import React from 'react';
import {
  Crown,
  Heart,
  ShieldCheck,
  CheckCircle,
  Car,
  Wifi,
  Coffee,
  BedDouble,
  Sparkles,
  Phone,
  ArrowRight,
  Clock,
  Star
} from 'lucide-react';
import { BUSINESS_INFO, TESTIMONIALS, IMAGES, VERIFIED_FACILITIES } from '../data/guestHouseData';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="space-y-0 animate-fade-in">
      
      {/* Header Banner */}
      <section className="bg-royal-gradient text-white py-16 sm:py-20 relative overflow-hidden border-b border-[#D6B879]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D6B879]">
            Our Story & Heritage
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight">
            About Oleanders Guest House
          </h1>
          <p className="text-purple-200 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Discover the passion behind our boutique Craigleith guest house, where classic Edinburgh charm meets modern luxury.
          </p>
        </div>
      </section>

      {/* Guest House Introduction */}
      <section className="py-16 lg:py-24 bg-[#F3EDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#76509B]">
                Welcome to Oleanders
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#351052]">
                A Boutique Haven in Craigleith
              </h2>
              
              <p className="text-gray-700 text-base leading-relaxed">
                Oleanders Guest House was established with a singular vision: to create a tranquil, refined home away from home for visitors to Edinburgh. Situated at 132 Craigleith Road in EH4, our stone Victorian residence has been thoughtfully restored into a luxury bed & breakfast.
              </p>

              <p className="text-gray-700 text-base leading-relaxed">
                We believe that true hospitality lies in the details — from deep velvet bedding and fresh Scottish breakfasts to peaceful night rests with private off-street parking.
              </p>

              <div className="p-4 bg-white rounded-xl border border-purple-100 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#351052] text-[#D6B879] flex items-center justify-center shrink-0">
                  <Crown className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-serif font-bold text-[#351052]">Boutique Quality Assurance</h4>
                  <p className="text-xs text-gray-600">Every room is individually inspected daily to ensure pristine cleanliness and guest comfort.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={IMAGES.heroHouse}
                  alt="Exterior of Oleanders Guest House"
                  className="w-full h-[450px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Story & Hospitality Experience */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="order-2 lg:order-1 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FAF7FC]">
                <img
                  src={IMAGES.lounge}
                  alt="Guest lounge and dining room"
                  className="w-full h-[420px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#76509B]">
                Hospitality & Guest Experience
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#351052]">
                Our Philosophy & Warm Scottish Care
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                At Oleanders Guest House, hospitality is not merely a service; it is a warm Scottish tradition. From the moment you step through our front doors, you are greeted with genuine personal care, local insider recommendations, and attentive service.
              </p>

              <ul className="space-y-3 pt-2">
                <li className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#76509B] shrink-0 mt-0.5" />
                  <span><strong>Personalized Check-in:</strong> Smooth arrival process with clear directions and local transport tips.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#76509B] shrink-0 mt-0.5" />
                  <span><strong>Quiet Neighborhood:</strong> Sleep soundly in Craigleith, away from late-night nightlife noise.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#76509B] shrink-0 mt-0.5" />
                  <span><strong>Attentive Breakfast Options:</strong> Fresh morning spreads tailored to dietary needs.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Comfort & Facilities Grid */}
          <div className="bg-[#FAF7FC] border border-purple-100 rounded-3xl p-8 sm:p-12 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#76509B]">
                Pristine Amenities
              </span>
              <h3 className="text-3xl font-serif font-bold text-[#351052]">
                Comfort & Facilities
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Verified room features designed for relaxation and convenience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {VERIFIED_FACILITIES.slice(0, 3).map((fac, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-purple-100 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={fac.image}
                      alt={fac.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <h4 className="text-lg font-serif font-bold text-[#351052]">{fac.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{fac.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Oleanders Guest House */}
      <section className="py-16 lg:py-24 bg-[#351052] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D6B879]">
              Your Ideal Base in Edinburgh
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              Why Choose Oleanders Guest House
            </h2>
            <p className="text-purple-200 text-sm sm:text-base">
              Comparing accommodation in Edinburgh? Here is why guests choose Oleanders time and time again:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#240a38] border border-[#D6B879]/30 rounded-2xl p-6 space-y-3">
              <span className="text-3xl font-serif font-bold text-[#D6B879]">01</span>
              <h3 className="text-xl font-serif font-bold text-white">Prime Location</h3>
              <p className="text-xs text-purple-200 leading-relaxed">
                Situated on Craigleith Rd with direct bus links to Princes Street, Waverley Station, and Edinburgh Airport.
              </p>
            </div>

            <div className="bg-[#240a38] border border-[#D6B879]/30 rounded-2xl p-6 space-y-3">
              <span className="text-3xl font-serif font-bold text-[#D6B879]">02</span>
              <h3 className="text-xl font-serif font-bold text-white">Luxury Theme</h3>
              <p className="text-xs text-purple-200 leading-relaxed">
                Distinctive royal purple and gold styling creates an opulent, calming atmosphere in every room.
              </p>
            </div>

            <div className="bg-[#240a38] border border-[#D6B879]/30 rounded-2xl p-6 space-y-3">
              <span className="text-3xl font-serif font-bold text-[#D6B879]">03</span>
              <h3 className="text-xl font-serif font-bold text-white">Personal Service</h3>
              <p className="text-xs text-purple-200 leading-relaxed">
                We handle every guest inquiry with utmost care and ensure your Edinburgh trip is memorable.
              </p>
            </div>

            <div className="bg-[#240a38] border border-[#D6B879]/30 rounded-2xl p-6 space-y-3">
              <span className="text-3xl font-serif font-bold text-[#D6B879]">04</span>
              <h3 className="text-xl font-serif font-bold text-white">Best Rate Direct</h3>
              <p className="text-xs text-purple-200 leading-relaxed">
                Booking directly with us guarantees our best room rates and flexible check-in assistance.
              </p>
            </div>
          </div>

          <div className="text-center pt-6">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 bg-[#D6B879] hover:bg-[#c4a465] text-[#351052] font-bold text-sm uppercase tracking-wider rounded-xl transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Book Your Stay with Us</span>
              <ArrowRight className="w-4 h-4 text-[#351052]" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
