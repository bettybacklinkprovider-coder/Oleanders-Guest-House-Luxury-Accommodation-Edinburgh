import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  Users,
  Car,
  Bus,
  ExternalLink,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { BUSINESS_INFO, ROOMS, FAQS } from '../data/guestHouseData';

interface ContactPageProps {
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [selectedRoom, setSelectedRoom] = useState(ROOMS[0].id);
  const [message, setMessage] = useState('');

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [inquiryRef, setInquiryRef] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!fullName.trim() || !email.trim() || !phone.trim() || !checkIn || !checkOut) {
      setFormError('Please fill in all mandatory fields (Name, Email, Phone, Check-in, and Check-out dates).');
      return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      setFormError('Check-out date must be strictly after check-in date.');
      return;
    }

    const ref = 'EDIN-' + Math.floor(100000 + Math.random() * 900000);
    setInquiryRef(ref);
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-0 animate-fade-in">
      
      {/* Header Banner */}
      <section className="bg-royal-gradient text-white py-16 sm:py-20 relative overflow-hidden border-b border-[#D6B879]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D6B879]">
            Direct Guest Communications
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight">
            Contact & Booking Inquiry
          </h1>
          <p className="text-purple-200 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Have questions about room availability, parking, or check-in? Reach out to us directly by phone or submit a reservation inquiry below.
          </p>
        </div>
      </section>

      {/* Contact Cards & Inquiry Form */}
      <section className="py-16 lg:py-24 bg-[#F3EDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Top 3 Contact Quick Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Phone Card */}
            <div className="bg-white p-8 rounded-3xl border border-purple-100 shadow-md text-center space-y-3 hover:border-[#76509B] transition-colors">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-[#351052] text-[#D6B879] flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#76509B]">Telephone</span>
              <h3 className="text-xl font-serif font-bold text-[#351052]">{BUSINESS_INFO.phone}</h3>
              <p className="text-xs text-gray-600">Available 08:00 to 21:00 GMT for direct booking questions</p>
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.telLink}
                  className="px-6 py-2.5 bg-[#351052] hover:bg-[#200833] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors inline-block"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white p-8 rounded-3xl border border-purple-100 shadow-md text-center space-y-3 hover:border-[#76509B] transition-colors">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-[#351052] text-[#D6B879] flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#76509B]">Location</span>
              <h3 className="text-xl font-serif font-bold text-[#351052]">132 Craigleith Rd</h3>
              <p className="text-xs text-gray-600">Edinburgh EH4 2EQ, United Kingdom</p>
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=132+Craigleith+Rd,+Edinburgh+EH4+2EQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-[#F3EDF8] hover:bg-[#e1d3ed] text-[#351052] font-bold text-xs uppercase tracking-wider rounded-xl transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Email & Hours Card */}
            <div className="bg-white p-8 rounded-3xl border border-purple-100 shadow-md text-center space-y-3 hover:border-[#76509B] transition-colors">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-[#351052] text-[#D6B879] flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#76509B]">Check-In & Times</span>
              <h3 className="text-xl font-serif font-bold text-[#351052]">{BUSINESS_INFO.checkIn}</h3>
              <p className="text-xs text-gray-600">Check-out by {BUSINESS_INFO.checkOut}. Free Parking on site.</p>
              <div className="pt-2 text-xs font-semibold text-[#76509B]">
                {BUSINESS_INFO.email}
              </div>
            </div>

          </div>

          {/* Form & Map Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact & Booking Inquiry Form */}
            <div className="bg-white border border-purple-100 rounded-3xl p-8 sm:p-10 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#76509B]">
                  Online Reservations
                </span>
                <h2 className="text-3xl font-serif font-bold text-[#351052] mt-1">
                  Submit Booking Inquiry
                </h2>
                <p className="text-xs text-gray-600 mt-1">
                  Fill in your travel details to receive confirmed availability and rate quotes directly.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 bg-[#FAF7FC] border border-purple-200 rounded-2xl text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 mx-auto bg-[#351052] rounded-full flex items-center justify-center text-[#D6B879]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#351052]">Inquiry Successfully Dispatched!</h3>
                  <p className="text-xs text-gray-700 max-w-sm mx-auto">
                    Thank you, <strong>{fullName}</strong>. We have received your booking inquiry for {checkIn} to {checkOut}.
                  </p>
                  <div className="p-3 bg-white border border-purple-200 rounded-xl inline-block text-xs font-mono font-bold text-[#351052]">
                    Reference Code: {inquiryRef}
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 bg-[#351052] text-white text-xs font-bold rounded-xl"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#351052] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FAF7FC] border border-purple-200 rounded-xl text-xs text-[#351052] outline-none focus:ring-2 focus:ring-[#76509B]"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#351052] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="sarah@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-[#FAF7FC] border border-purple-200 rounded-xl text-xs text-[#351052] outline-none focus:ring-2 focus:ring-[#76509B]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#351052] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="+44 7123 456789"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 bg-[#FAF7FC] border border-purple-200 rounded-xl text-xs text-[#351052] outline-none focus:ring-2 focus:ring-[#76509B]"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#351052] mb-1">
                        Check-In Date *
                      </label>
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 bg-[#FAF7FC] border border-purple-200 rounded-xl text-xs text-[#351052] outline-none focus:ring-2 focus:ring-[#76509B]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#351052] mb-1">
                        Check-Out Date *
                      </label>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        min={checkIn || new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 bg-[#FAF7FC] border border-purple-200 rounded-xl text-xs text-[#351052] outline-none focus:ring-2 focus:ring-[#76509B]"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#351052] mb-1">
                        Guests
                      </label>
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full px-4 py-3 bg-[#FAF7FC] border border-purple-200 rounded-xl text-xs text-[#351052] outline-none focus:ring-2 focus:ring-[#76509B]"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests (Family)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#351052] mb-1">
                        Room Type
                      </label>
                      <select
                        value={selectedRoom}
                        onChange={(e) => setSelectedRoom(e.target.value)}
                        className="w-full px-4 py-3 bg-[#FAF7FC] border border-purple-200 rounded-xl text-xs text-[#351052] outline-none focus:ring-2 focus:ring-[#76509B]"
                      >
                        {ROOMS.map(r => (
                          <option key={r.id} value={r.id}>{r.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#351052] mb-1">
                      Message / Special Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Mention arrival time, parking needs, or dietary requests for breakfast..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FAF7FC] border border-purple-200 rounded-xl text-xs text-[#351052] outline-none focus:ring-2 focus:ring-[#76509B]"
                    ></textarea>
                  </div>

                  {formError && (
                    <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#D6B879] hover:bg-[#c4a465] text-[#351052] font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-[#351052]" />
                    Send Booking Inquiry
                  </button>

                </form>
              )}

            </div>

            {/* Location Map & Directions Guide */}
            <div className="space-y-8">
              
              <div className="bg-white border border-purple-100 rounded-3xl p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-purple-100 pb-3">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-[#351052]">Our Location in Edinburgh</h3>
                    <p className="text-xs text-gray-600">132 Craigleith Rd, Edinburgh EH4 2EQ</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=132+Craigleith+Rd,+Edinburgh+EH4+2EQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[#351052] text-[#D6B879] rounded-xl text-xs font-bold flex items-center gap-1 hover:bg-[#200833]"
                  >
                    <span>Full Map</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Google Maps Location Embed */}
                <div className="rounded-2xl overflow-hidden border border-purple-200 h-80 relative shadow-inner">
                  <iframe
                    title="Oleanders Guest House Location Map"
                    src={BUSINESS_INFO.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Arrival Directions Guide */}
              <div className="bg-white border border-purple-100 rounded-3xl p-6 shadow-xl space-y-4">
                <h3 className="text-xl font-serif font-bold text-[#351052]">Directions & Transport</h3>
                
                <div className="space-y-3 text-xs text-gray-700">
                  <div className="flex items-start gap-3 p-3 bg-[#FAF7FC] rounded-xl">
                    <Bus className="w-5 h-5 text-[#76509B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#351052] block">By Public Bus from Waverley / Princes St</strong>
                      <span>Lothian Buses 41, 43, and 47 stop directly on Craigleith Road within 2 minutes walk of the house.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-[#FAF7FC] rounded-xl">
                    <Car className="w-5 h-5 text-[#76509B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#351052] block">By Car & Free On-Site Parking</strong>
                      <span>Turn onto Craigleith Rd from Queensferry Road (A90). Private off-street parking is available on our driveway.</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* FAQs Section */}
          <div className="bg-white border border-purple-100 rounded-3xl p-8 sm:p-12 shadow-xl space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#76509B]">
                Helpful Information
              </span>
              <h3 className="text-3xl font-serif font-bold text-[#351052]">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {FAQS.map((faq, i) => (
                <div key={i} className="p-5 bg-[#FAF7FC] border border-purple-100 rounded-2xl space-y-1.5">
                  <h4 className="text-base font-serif font-bold text-[#351052]">
                    {faq.q}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
