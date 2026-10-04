/**
 * Oleanders Guest House - Data & Content Configuration
 * Address: 132 Craigleith Rd, Edinburgh EH4 2EQ, United Kingdom
 * Phone: +44 131 332 3831
 */

import heroHouseImg from '../assets/images/hero_oleanders_house_1791032877803.jpg';
import loungeImg from '../assets/images/interior_lounge_breakfast_1791032898927.jpg';
import deluxeBedroomImg from '../assets/images/deluxe_bedroom_suite_1791032912689.jpg';
import gardenRoomImg from '../assets/images/garden_bedroom_view_1791032928290.jpg';
import edinburghCastleImg from '../assets/images/edinburgh_castle_attraction_1791032943247.jpg';

import facilityParkingImg from '../assets/images/facility_parking_1791033268002.jpg';
import facilityWifiImg from '../assets/images/facility_wifi_1791033286333.jpg';
import facilityBreakfastImg from '../assets/images/facility_breakfast_1791033299564.jpg';
import facilityBathroomImg from '../assets/images/facility_bathroom_1791033312071.jpg';
import facilityCraigleithImg from '../assets/images/facility_craigleith_1791033327084.jpg';
import facilityTransportImg from '../assets/images/facility_transport_1791033345981.jpg';

export interface Room {
  id: string;
  name: string;
  category: 'king' | 'double' | 'twin' | 'garden';
  pricePerNight: number;
  sizeSqM: number;
  maxGuests: number;
  bedType: string;
  image: string;
  description: string;
  highlights: string[];
  amenities: string[];
}

export interface Attraction {
  id: string;
  name: string;
  distance: string;
  travelTime: string;
  description: string;
  image: string;
  category: 'Historic' | 'Nature' | 'Culture' | 'Shopping';
}

export interface Testimonial {
  id: string;
  guestName: string;
  country: string;
  stayDate: string;
  rating: number;
  roomName: string;
  comment: string;
}

export const BUSINESS_INFO = {
  name: 'Oleanders Guest House',
  tagline: 'A Luxury Boutique Retreat in Edinburgh',
  phone: '+44 131 332 3831',
  phoneFormatted: '+44 (0)131 332 3831',
  telLink: 'tel:+441313323831',
  address: {
    street: '132 Craigleith Rd',
    district: 'Craigleith',
    city: 'Edinburgh',
    postcode: 'EH4 2EQ',
    country: 'United Kingdom',
    full: '132 Craigleith Rd, Edinburgh EH4 2EQ, United Kingdom',
  },
  email: 'info@oleandersguesthouse.co.uk',
  checkIn: '15:00 - 20:00',
  checkOut: '07:30 - 10:30',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2233.158485125867!2d-3.2384218!3d55.9587421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c7a5ba7a5b3f%3A0x8670b368735df2a9!2s132%20Craigleith%20Rd%2C%20Edinburgh%20EH4%202EQ%2C%20UK!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk',
  colors: {
    royalPurple: '#351052',
    lavender: '#76509B',
    lightPurple: '#F3EDF8',
    gold: '#D6B879',
  }
};

export const IMAGES = {
  heroHouse: heroHouseImg,
  lounge: loungeImg,
  deluxeBedroom: deluxeBedroomImg,
  gardenRoom: gardenRoomImg,
  edinburghCastle: edinburghCastleImg,
  facilityParking: facilityParkingImg,
  facilityWifi: facilityWifiImg,
  facilityBreakfast: facilityBreakfastImg,
  facilityBathroom: facilityBathroomImg,
  facilityCraigleith: facilityCraigleithImg,
  facilityTransport: facilityTransportImg,
};

export const ROOMS: Room[] = [
  {
    id: 'executive-king-suite',
    name: 'Executive Royal King Suite',
    category: 'king',
    pricePerNight: 165,
    sizeSqM: 32,
    maxGuests: 2,
    bedType: 'Super King Featherbed',
    image: deluxeBedroomImg,
    description: 'Our flagship suite featuring a plush velvet super king bed, original architectural molding, a luxury marble en-suite bathroom with deep bathtub, and panoramic views of the landscaped grounds.',
    highlights: ['Marble En-Suite with Bath & Shower', 'Spacious Lounge Seating Area', 'Complimentary Scottish Treat Basket'],
    amenities: [
      'Super King Bed with Egyptian Cotton',
      'Marble En-suite Bathroom',
      'Free High-Speed Wi-Fi',
      'Nespresso Coffee Bar & Teas',
      '43" 4K Smart TV with Streaming',
      'Fluffy Bathrobes & Slippers',
      'Luxury Scottish Fine Soaps',
      'Personal Safe & Hairdryer',
    ],
  },
  {
    id: 'deluxe-double-room',
    name: 'Deluxe Double Room',
    category: 'double',
    pricePerNight: 135,
    sizeSqM: 26,
    maxGuests: 2,
    bedType: 'Pillow-top King Bed',
    image: loungeImg,
    description: 'An elegantly decorated double room with deep purple and gold accents, large Victorian sash windows, en-suite rain shower, and quiet garden courtyard outlook.',
    highlights: ['En-Suite Walk-in Rain Shower', 'Sunlit Reading Nook', 'Quiet Courtyard Facing'],
    amenities: [
      'Pillow-top King Bed',
      'En-suite Rain Shower',
      'Free High-Speed Wi-Fi',
      'Tea & Organic Herbal Infusions',
      '32" HD Smart TV',
      'Complimentary Toiletries',
      'Work Desk with USB Ports',
      'Hairdryer & Ironing Station',
    ],
  },
  {
    id: 'garden-view-classic-suite',
    name: 'Garden View Classic Suite',
    category: 'garden',
    pricePerNight: 145,
    sizeSqM: 28,
    maxGuests: 2,
    bedType: 'King-Size Brass Bed',
    image: gardenRoomImg,
    description: 'A serene ground-floor suite opening onto our private garden. Features warm lavender furnishings, a cozy armchair corner, and serene views of Scottish flora.',
    highlights: ['Direct Garden Views', 'Ground Floor Accessibility', 'Cozy Fireside Seating Area'],
    amenities: [
      'King-Size Antique Style Bed',
      'Private En-suite Shower Room',
      'Free High-Speed Wi-Fi',
      'Garden Access Patio Window',
      'Tea & Coffee Bar',
      'Smart TV & USB Charging',
      'Luxury Linens & Extra Pillows',
      'Quiet Double-Glazed Comfort',
    ],
  },
  {
    id: 'superior-twin-room',
    name: 'Superior Scottish Twin Room',
    category: 'twin',
    pricePerNight: 125,
    sizeSqM: 25,
    maxGuests: 2,
    bedType: 'Two Single Orthopedic Beds',
    image: deluxeBedroomImg,
    description: 'Ideal for friends or family traveling together. Bright and airy room with two comfortable single beds, modern en-suite shower, and peaceful surroundings.',
    highlights: ['Two Separate Comfortable Beds', 'Bright Natural Light', 'En-Suite Bathroom'],
    amenities: [
      '2 Single Orthopedic Beds',
      'En-suite Walk-in Shower',
      'Free High-Speed Wi-Fi',
      'Tea & Coffee Making Tray',
      'HD Smart TV',
      'Scottish Fine Soaps',
      'Spacious Wardrobe & Luggage Rack',
    ],
  },
];

export const VERIFIED_FACILITIES = [
  {
    title: 'Free On-Site Parking',
    desc: 'Private off-street parking available right outside the guest house for all our guests.',
    icon: 'car',
    image: facilityParkingImg,
  },
  {
    title: 'High-Speed Wi-Fi',
    desc: 'Fast, reliable complimentary Wi-Fi across all rooms and common guest areas.',
    icon: 'wifi',
    image: facilityWifiImg,
  },
  {
    title: 'Fresh Scottish Breakfast',
    desc: 'Prepared daily with locally sourced eggs, smoked salmon, haggis, and vegetarian options.',
    icon: 'coffee',
    image: facilityBreakfastImg,
  },
  {
    title: 'Private En-Suite Bathrooms',
    desc: 'Every bedroom includes its own clean, fully fitted modern en-suite bathroom.',
    icon: 'bath',
    image: facilityBathroomImg,
  },
  {
    title: 'Peaceful Craigleith Setting',
    desc: 'Quiet residential neighborhood ensuring a restful sleep, just minutes from city attractions.',
    icon: 'moon',
    image: facilityCraigleithImg,
  },
  {
    title: 'Convenient City Transport',
    desc: 'Direct bus links outside the front door straight into Princes Street and Waverley Station.',
    icon: 'bus',
    image: facilityTransportImg,
  },
];

export const ATTRACTIONS: Attraction[] = [
  {
    id: 'edinburgh-castle',
    name: 'Edinburgh Castle & Royal Mile',
    distance: '2.5 miles (10 mins drive / bus)',
    travelTime: '10 mins drive',
    description: 'Scotland’s iconic historic fortress sitting atop Castle Rock, offering breathtaking city panoramas, the Crown Jewels, and rich history.',
    image: edinburghCastleImg,
    category: 'Historic',
  },
  {
    id: 'dean-village',
    name: 'Dean Village & Water of Leith',
    distance: '1.2 miles (20 mins walk / 5 mins drive)',
    travelTime: '5 mins drive',
    description: 'A picturesque historic grain-milling village nestled along the river with cobblestone paths, timber-framed houses, and lush greenery.',
    image: gardenRoomImg,
    category: 'Nature',
  },
  {
    id: 'botanic-gardens',
    name: 'Royal Botanic Garden Edinburgh',
    distance: '1.5 miles (6 mins drive)',
    travelTime: '6 mins drive',
    description: 'Over 70 acres of magnificent Victorian glasshouses, exotic plant collections, landscaped rock gardens, and peaceful walking trails.',
    image: loungeImg,
    category: 'Nature',
  },
  {
    id: 'princes-street',
    name: 'Princes Street & George Street',
    distance: '2.0 miles (8 mins drive)',
    travelTime: '8 mins drive',
    description: 'Edinburgh’s prime shopping district with designer boutiques, cozy cafes, fine dining, and views across Princes Street Gardens.',
    image: heroHouseImg,
    category: 'Shopping',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    guestName: 'Alistair & Margaret Campbell',
    country: 'London, UK',
    stayDate: 'September 2026',
    rating: 5,
    roomName: 'Executive Royal King Suite',
    comment: 'Oleanders Guest House exceeded all our expectations! The royal purple decor and gold touches made it feel like a boutique 5-star hotel, yet with genuine Scottish warmth. Parking was so effortless.',
  },
  {
    id: '2',
    guestName: 'Eleanor Vance',
    country: 'Toronto, Canada',
    stayDate: 'August 2026',
    rating: 5,
    roomName: 'Garden View Classic Suite',
    comment: 'The location in Craigleith is peaceful after a long day exploring Edinburgh. Bus stops are right outside and take you straight to Princes Street in 10 minutes. The bed was incredibly comfortable.',
  },
  {
    id: '3',
    guestName: 'David & Hannah Smith',
    country: 'Melbourne, Australia',
    stayDate: 'July 2026',
    rating: 5,
    roomName: 'Deluxe Double Room',
    comment: 'Spotlessly clean, warm hospitality, and delightful breakfast! We loved returning to the serene garden room after walking the Royal Mile. Highly recommended for anyone visiting Edinburgh.',
  },
];

export const FAQS = [
  {
    q: 'What are the check-in and check-out times?',
    a: 'Standard check-in is between 15:00 and 20:00. Check-out is up to 10:30. Early check-in or late check-out can often be arranged upon advance request.',
  },
  {
    q: 'Is parking available at Oleanders Guest House?',
    a: 'Yes, we offer complimentary on-site private parking for guest vehicles, a rare convenience in Edinburgh.',
  },
  {
    q: 'How far is the guest house from Edinburgh city center?',
    a: 'We are located at 132 Craigleith Rd, approx. 2 miles (8-10 minutes by car or direct public bus) from Princes Street, Waverley Station, and Edinburgh Castle.',
  },
  {
    q: 'Are all bedrooms en-suite?',
    a: 'Yes, every guest room at Oleanders Guest House is fully en-suite with modern bathroom facilities, fresh towels, and luxury toiletries.',
  },
  {
    q: 'Is breakfast included or available?',
    a: 'We offer fresh Scottish and continental breakfast options daily. You can specify dietary requirements when submitting your booking inquiry.',
  },
];
