import React, { useState } from 'react';
import { X, Calendar, Users, Phone, CheckCircle, BedDouble, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, ROOMS } from '../data/guestHouseData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoomId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, preselectedRoomId }) => {
  const [roomId, setRoomId] = useState<string>(preselectedRoomId || ROOMS[0].id);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const selectedRoom = ROOMS.find(r => r.id === roomId) || ROOMS[0];

  // Calculate nights and estimated total
  let nights = 0;
  if (checkIn && checkOut) {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = end.getTime() - start.getTime();
    if (diff > 0) {
      nights = Math.ceil(diff / (1000 * 3600 * 24));
    }
  }

  const totalPrice = nights > 0 ? nights * selectedRoom.pricePerNight : selectedRoom.pricePerNight;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim() || !email.trim() || !phone.trim() || !checkIn || !checkOut) {
      setErrorMsg('Please complete all required fields (Name, Email, Phone, Check-in, Check-out).');
      return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      setErrorMsg('Check-out date must be after check-in date.');
      return;
    }

    // Generate reference code
    const ref = 'OGH-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-[#D6B879]/30">
        
        {/* Header Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#351052] text-white border-b border-[#D6B879]/30">
          <div className="flex items-center gap-3">
            <BedDouble className="w-6 h-6 text-[#D6B879]" />
            <div>
              <h3 className="text-xl font-serif tracking-wide text-[#D6B879]">Book Your Stay</h3>
              <p className="text-xs text-purple-200">Oleanders Guest House, Edinburgh</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-purple-200 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-8">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 mx-auto bg-[#F3EDF8] rounded-full flex items-center justify-center text-[#76509B]">
                <CheckCircle className="w-10 h-10 text-[#351052]" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#76509B]">Inquiry Received</span>
                <h4 className="text-3xl font-serif font-bold text-[#351052] mt-1">Thank You, {fullName}!</h4>
                <p className="text-sm text-gray-600 mt-2 max-w-md mx-auto">
                  Your booking request has been successfully dispatched to our reservations desk. Reference Number:
                </p>
                <div className="mt-3 inline-block px-4 py-2 bg-[#F3EDF8] border border-[#76509B]/20 rounded-lg text-lg font-mono font-bold text-[#351052]">
                  {bookingRef}
                </div>
              </div>

              {/* Inquiry Summary Box */}
              <div className="bg-[#FAF7FC] border border-purple-100 rounded-xl p-5 text-left text-sm space-y-2 text-gray-700 max-w-md mx-auto">
                <div className="flex justify-between border-b border-purple-100 pb-2">
                  <span className="text-gray-500">Room Selected:</span>
                  <span className="font-semibold text-[#351052]">{selectedRoom.name}</span>
                </div>
                <div className="flex justify-between border-b border-purple-100 pb-2">
                  <span className="text-gray-500">Dates:</span>
                  <span className="font-semibold text-[#351052]">{checkIn} to {checkOut} ({nights || 1} night{nights > 1 ? 's' : ''})</span>
                </div>
                <div className="flex justify-between border-b border-purple-100 pb-2">
                  <span className="text-gray-500">Guests:</span>
                  <span className="font-semibold text-[#351052]">{guests} Guest{parseInt(guests) > 1 ? 's' : ''}</span>
                </div>
                <div className="flex justify-between pt-1 text-base font-bold text-[#351052]">
                  <span>Estimated Total:</span>
                  <span className="text-[#351052]">£{totalPrice}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={BUSINESS_INFO.telLink}
                  className="w-full sm:w-auto px-6 py-3 bg-[#351052] hover:bg-[#200833] text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D6B879]" />
                  Call Us Directly ({BUSINESS_INFO.phone})
                </a>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 bg-[#F3EDF8] hover:bg-[#e4d7f0] text-[#351052] font-medium rounded-xl transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Room Selection Dropdown & Card Preview */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#351052] mb-2">
                  Select Accommodation
                </label>
                <select
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF7FC] border border-purple-200 rounded-xl focus:ring-2 focus:ring-[#76509B] focus:border-transparent outline-none text-[#351052] font-medium text-sm"
                >
                  {ROOMS.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name} — £{room.pricePerNight}/night ({room.bedType})
                    </option>
                  ))}
                </select>

                <div className="mt-3 p-3 bg-[#F3EDF8]/60 rounded-xl border border-purple-100 flex items-center justify-between text-xs text-gray-700">
                  <span>Capacity: Up to {selectedRoom.maxGuests} guests</span>
                  <span>Bed: {selectedRoom.bedType}</span>
                  <span className="font-bold text-[#351052]">£{selectedRoom.pricePerNight}/night</span>
                </div>
              </div>

              {/* Check-in, Check-out & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#351052] mb-1.5">
                    Check-In Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2.5 bg-[#FAF7FC] border border-purple-200 rounded-xl focus:ring-2 focus:ring-[#76509B] text-sm outline-none text-[#351052]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#351052] mb-1.5">
                    Check-Out Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      min={checkIn || new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2.5 bg-[#FAF7FC] border border-purple-200 rounded-xl focus:ring-2 focus:ring-[#76509B] text-sm outline-none text-[#351052]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#351052] mb-1.5">
                    Guests *
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-3 py-2.5 bg-[#FAF7FC] border border-purple-200 rounded-xl focus:ring-2 focus:ring-[#76509B] text-sm outline-none text-[#351052]"
                  >
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adults</option>
                    <option value="3">2 Adults + 1 Child</option>
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#351052] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. John Smith"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-2.5 bg-[#FAF7FC] border border-purple-200 rounded-xl focus:ring-2 focus:ring-[#76509B] text-sm outline-none text-[#351052]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#351052] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2.5 bg-[#FAF7FC] border border-purple-200 rounded-xl focus:ring-2 focus:ring-[#76509B] text-sm outline-none text-[#351052]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#351052] mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+44 7123 456789"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2.5 bg-[#FAF7FC] border border-purple-200 rounded-xl focus:ring-2 focus:ring-[#76509B] text-sm outline-none text-[#351052]"
                    required
                  />
                </div>
              </div>

              {/* Special Requests / Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#351052] mb-1.5">
                  Special Requests / Estimated Arrival Time
                </label>
                <textarea
                  rows={2}
                  placeholder="E.g. Ground floor request, dietary needs for breakfast, late arrival after 18:00..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2.5 bg-[#FAF7FC] border border-purple-200 rounded-xl focus:ring-2 focus:ring-[#76509B] text-sm outline-none text-[#351052]"
                ></textarea>
              </div>

              {/* Price Calculation Summary Banner */}
              <div className="p-4 bg-[#351052] text-white rounded-xl flex items-center justify-between border border-[#D6B879]/40">
                <div>
                  <p className="text-xs text-purple-200 uppercase tracking-wider">Estimated Total</p>
                  <p className="text-xs text-gray-300">
                    {nights > 0 ? `${nights} night${nights > 1 ? 's' : ''} × £${selectedRoom.pricePerNight}` : 'Per Night Rate'}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-serif font-bold text-[#D6B879]">£{totalPrice}</span>
                  <span className="block text-[10px] text-purple-200">Includes taxes & Wi-Fi</span>
                </div>
              </div>

              {errorMsg && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl font-medium">
                  {errorMsg}
                </div>
              )}

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <ShieldCheck className="w-4 h-4 text-[#76509B]" />
                  <span>No upfront payment required. Instant response.</span>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#D6B879] hover:bg-[#c4a465] text-[#351052] font-bold text-sm rounded-xl shadow-md transition-all transform active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  Submit Booking Inquiry
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
