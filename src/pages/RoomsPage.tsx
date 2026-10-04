import React, { useState } from 'react';
import {
  BedDouble,
  Users,
  CheckCircle,
  Wifi,
  Coffee,
  Tv,
  Bath,
  Sparkles,
  Shield,
  Calendar,
  X,
  Phone,
  ArrowRight,
  Info
} from 'lucide-react';
import { ROOMS, Room, BUSINESS_INFO } from '../data/guestHouseData';

interface RoomsPageProps {
  onOpenBooking: (roomId?: string) => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [detailModalRoom, setDetailModalRoom] = useState<Room | null>(null);

  // Interactive Stay Calculator
  const [calcNights, setCalcNights] = useState<number>(2);
  const [calcRoomId, setCalcRoomId] = useState<string>(ROOMS[0].id);

  const filteredRooms = selectedCategory === 'all'
    ? ROOMS
    : ROOMS.filter(r => r.category === selectedCategory);

  const calcSelectedRoom = ROOMS.find(r => r.id === calcRoomId) || ROOMS[0];
  const calcTotal = calcSelectedRoom.pricePerNight * calcNights;

  return (
    <div className="space-y-0 animate-fade-in">
      
      {/* Header Banner */}
      <section className="bg-royal-gradient text-white py-16 sm:py-20 relative overflow-hidden border-b border-[#D6B879]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D6B879]">
            Luxury Edinburgh Lodging
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight">
            Rooms & Accommodation
          </h1>
          <p className="text-purple-200 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Choose from our collection of individually styled en-suite bedrooms with plush furnishings, Egyptian cotton linens, and private parking.
          </p>
        </div>
      </section>

      {/* Main Room Showcase Section */}
      <section className="py-16 lg:py-24 bg-[#F3EDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Segmented Filter Control (Interactive Buttons) */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white rounded-2xl shadow-sm border border-purple-100 max-w-2xl mx-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#351052] text-[#D6B879] shadow-md'
                  : 'text-gray-600 hover:text-[#351052]'
              }`}
            >
              All Accommodation ({ROOMS.length})
            </button>
            <button
              onClick={() => setSelectedCategory('king')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                selectedCategory === 'king'
                  ? 'bg-[#351052] text-[#D6B879] shadow-md'
                  : 'text-gray-600 hover:text-[#351052]'
              }`}
            >
              King Suite
            </button>
            <button
              onClick={() => setSelectedCategory('double')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                selectedCategory === 'double'
                  ? 'bg-[#351052] text-[#D6B879] shadow-md'
                  : 'text-gray-600 hover:text-[#351052]'
              }`}
            >
              Deluxe Double
            </button>
            <button
              onClick={() => setSelectedCategory('garden')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                selectedCategory === 'garden'
                  ? 'bg-[#351052] text-[#D6B879] shadow-md'
                  : 'text-gray-600 hover:text-[#351052]'
              }`}
            >
              Garden Suite
            </button>
            <button
              onClick={() => setSelectedCategory('twin')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                selectedCategory === 'twin'
                  ? 'bg-[#351052] text-[#D6B879] shadow-md'
                  : 'text-gray-600 hover:text-[#351052]'
              }`}
            >
              Twin Room
            </button>
          </div>

          {/* Room Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredRooms.map((room) => (
              <div
                key={room.id}
                className="bg-white border border-purple-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-[#351052] text-[#D6B879] font-serif font-bold px-4 py-2 rounded-xl text-base shadow-xl border border-[#D6B879]/40">
                      £{room.pricePerNight} <span className="text-xs text-purple-200 font-sans font-normal">/ night</span>
                    </div>
                  </div>

                  {/* Room Body */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#351052]">
                        {room.name}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-purple-800 font-medium mt-1">
                        <span>{room.bedType}</span>
                        <span aria-hidden="true">·</span>
                        <span>Capacity: {room.maxGuests} Guests</span>
                        <span aria-hidden="true">·</span>
                        <span>{room.sizeSqM} m²</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      {room.description}
                    </p>

                    {/* Room Amenities Badges (Unboxed text) */}
                    <div>
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-[#76509B] mb-2">
                        Included Room Amenities
                      </span>
                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-700">
                        {room.amenities.slice(0, 6).map((am, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-[#76509B] shrink-0" />
                            <span>{am}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 sm:px-8 bg-[#FAF7FC] border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    onClick={() => setDetailModalRoom(room)}
                    className="text-xs font-bold text-[#351052] hover:text-[#76509B] transition-colors cursor-pointer inline-flex items-center gap-1"
                  >
                    <Info className="w-4 h-4 text-[#76509B]" />
                    <span>View Full Room Spec & Photos</span>
                  </button>
                  <button
                    onClick={() => onOpenBooking(room.id)}
                    className="w-full sm:w-auto px-6 py-3 bg-[#D6B879] hover:bg-[#c4a465] text-[#351052] font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md text-center"
                  >
                    Reserve This Room
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Interactive Stay Estimator Widget */}
          <div className="bg-royal-gradient text-white rounded-3xl p-8 sm:p-12 border-2 border-[#D6B879]/40 shadow-2xl space-y-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D6B879]">
                Rate Calculator
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white mt-1">
                Estimate Your Stay Duration & Price
              </h3>
              <p className="text-purple-200 text-xs sm:text-sm mt-1">
                Calculate total accommodation costs based on your planned number of nights.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#D6B879] mb-2">
                  Select Bedroom Type
                </label>
                <select
                  value={calcRoomId}
                  onChange={(e) => setCalcRoomId(e.target.value)}
                  className="w-full px-4 py-3 bg-[#240a38] border border-purple-700 rounded-xl text-white text-xs font-medium outline-none focus:border-[#D6B879]"
                >
                  {ROOMS.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name} (£{r.pricePerNight}/night)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#D6B879] mb-2">
                  Number of Nights: {calcNights}
                </label>
                <input
                  type="range"
                  min="1"
                  max="14"
                  value={calcNights}
                  onChange={(e) => setCalcNights(parseInt(e.target.value))}
                  className="w-full accent-[#D6B879] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-purple-300 mt-1">
                  <span>1 Night</span>
                  <span>7 Nights</span>
                  <span>14 Nights</span>
                </div>
              </div>

              <div className="bg-[#240a38] p-4 rounded-xl border border-[#D6B879]/30 flex items-center justify-between">
                <div>
                  <span className="block text-xs text-purple-300">Total Accommodation</span>
                  <span className="text-2xl font-serif font-bold text-[#D6B879]">£{calcTotal}</span>
                </div>
                <button
                  onClick={() => onOpenBooking(calcRoomId)}
                  className="px-4 py-2.5 bg-[#D6B879] text-[#351052] font-bold text-xs uppercase rounded-lg hover:bg-[#c4a465] transition-colors cursor-pointer"
                >
                  Inquire Now
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Room Detail Modal */}
      {detailModalRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-[#D6B879]/40">
            
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#351052] text-white">
              <h3 className="text-xl font-serif font-bold text-[#D6B879]">
                {detailModalRoom.name}
              </h3>
              <button
                onClick={() => setDetailModalRoom(null)}
                className="p-2 text-purple-200 hover:text-white rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="h-72 rounded-2xl overflow-hidden shadow-md">
                <img
                  src={detailModalRoom.image}
                  alt={detailModalRoom.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex items-center justify-between border-b border-purple-100 pb-4">
                <div>
                  <span className="text-xs text-gray-500 block">Nightly Rate</span>
                  <span className="text-3xl font-serif font-bold text-[#351052]">
                    £{detailModalRoom.pricePerNight}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-500 block">Bed Setup</span>
                  <span className="text-sm font-semibold text-[#351052]">{detailModalRoom.bedType}</span>
                </div>
              </div>

              <div>
                <h4 className="text-base font-serif font-bold text-[#351052] mb-1">Room Description</h4>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {detailModalRoom.description}
                </p>
              </div>

              <div>
                <h4 className="text-base font-serif font-bold text-[#351052] mb-2">Complete Amenity Checklist</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                  {detailModalRoom.amenities.map((am, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 bg-[#FAF7FC] rounded-lg">
                      <CheckCircle className="w-4 h-4 text-[#76509B]" />
                      <span>{am}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-purple-100">
                <button
                  onClick={() => setDetailModalRoom(null)}
                  className="px-5 py-2.5 bg-gray-100 text-gray-700 text-xs font-bold rounded-xl"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const roomToBook = detailModalRoom.id;
                    setDetailModalRoom(null);
                    onOpenBooking(roomToBook);
                  }}
                  className="px-6 py-2.5 bg-[#D6B879] hover:bg-[#c4a465] text-[#351052] text-xs font-bold uppercase rounded-xl shadow-md"
                >
                  Book This Room
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
