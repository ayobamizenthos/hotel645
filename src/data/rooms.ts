import deluxeSuite from "@/assets/deluxe-suite.jpg";
import executiveRoom from "@/assets/executive-room.jpg";
import studioSuite from "@/assets/studio-suite.jpg";

export interface Room {
  id: string;
  name: string;
  image: string;
  price: number;
  capacity: number;
  size: string;
  description: string;
  amenities: string[];
  available: boolean;
}

export const rooms: Room[] = [
  {
    id: "deluxe-suite",
    name: "Deluxe Suite",
    image: deluxeSuite,
    price: 45000,
    capacity: 4,
    size: "65m²",
    description: "Spacious luxury suite with separate living area, perfect for families or extended stays. Features premium furnishings and stunning city views.",
    amenities: [
      "King-size bed",
      "Living area",
      "Work desk",
      "Smart TV",
      "Mini kitchen",
      "City view",
      "High-speed WiFi",
      "Air conditioning",
      "24/7 room service"
    ],
    available: true
  },
  {
    id: "executive-room",
    name: "Executive Room",
    image: executiveRoom,
    price: 32000,
    capacity: 2,
    size: "40m²",
    description: "Modern executive room designed for business travelers. Includes dedicated workspace and premium amenities.",
    amenities: [
      "Queen-size bed",
      "Work desk",
      "Smart TV",
      "Coffee maker",
      "High-speed WiFi",
      "Air conditioning",
      "Room service",
      "Complimentary breakfast"
    ],
    available: true
  },
  {
    id: "studio-suite",
    name: "Studio Suite",
    image: studioSuite,
    price: 28000,
    capacity: 2,
    size: "35m²",
    description: "Cozy studio apartment with modern kitchenette. Perfect for solo travelers or couples seeking comfort and convenience.",
    amenities: [
      "Double bed",
      "Kitchenette",
      "Smart TV",
      "Dining area",
      "High-speed WiFi",
      "Air conditioning",
      "Weekly cleaning"
    ],
    available: true
  }
];
