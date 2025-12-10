import deluxeMasterBedroom from "@/assets/deluxe-master-bedroom.jpg";
import deluxeLivingArea from "@/assets/deluxe-living-area.jpg";
import deluxeKitchen from "@/assets/deluxe-kitchen.jpg";
import deluxeBathroom from "@/assets/deluxe-bathroom.jpg";
import executiveBedroom from "@/assets/executive-bedroom.jpg";
import executiveWorkArea from "@/assets/executive-work-area.jpg";
import executiveKitchenette from "@/assets/executive-kitchenette.jpg";
import executiveBathroom from "@/assets/executive-bathroom.jpg";
import studioSpace from "@/assets/studio-space.jpg";
import studioKitchen from "@/assets/studio-kitchen.jpg";
import studioBathroom from "@/assets/studio-bathroom.jpg";

export interface RoomArea {
  name: string;
  image: string;
  description: string;
}

export interface RoomDetail {
  id: string;
  areas: RoomArea[];
  panorama360?: string;
  menuItems?: MenuItem[];
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: "breakfast" | "lunch" | "dinner" | "snacks" | "drinks";
  description: string;
}

export const roomDetails: Record<string, RoomDetail> = {
  "deluxe-suite": {
    id: "deluxe-suite",
    areas: [
      {
        name: "Master Bedroom",
        image: deluxeMasterBedroom,
        description: "Luxurious king-size bed with premium linens and city views"
      },
      {
        name: "Living Area",
        image: deluxeLivingArea,
        description: "Spacious living room with comfortable seating and entertainment"
      },
      {
        name: "Kitchen",
        image: deluxeKitchen,
        description: "Fully equipped mini kitchen with modern appliances"
      },
      {
        name: "Bathroom",
        image: deluxeBathroom,
        description: "Elegant bathroom with rain shower and premium toiletries"
      }
    ],
    menuItems: [
      { id: "m1", name: "Continental Breakfast", price: 3500, category: "breakfast", description: "Fresh pastries, fruits, coffee/tea" },
      { id: "m2", name: "Full English Breakfast", price: 5000, category: "breakfast", description: "Eggs, bacon, sausage, toast, coffee" },
      { id: "m3", name: "Club Sandwich", price: 4000, category: "lunch", description: "Triple-decker with fries" },
      { id: "m4", name: "Pasta Carbonara", price: 4500, category: "lunch", description: "Creamy pasta with bacon" },
      { id: "m5", name: "Grilled Chicken", price: 6000, category: "dinner", description: "With vegetables and rice" },
      { id: "m6", name: "Fresh Juice", price: 1500, category: "drinks", description: "Orange, pineapple, or mixed" },
      { id: "m7", name: "Soft Drinks", price: 800, category: "drinks", description: "Assorted beverages" },
    ]
  },
  "executive-room": {
    id: "executive-room",
    areas: [
      {
        name: "Bedroom",
        image: executiveBedroom,
        description: "Comfortable queen-size bed with work-friendly lighting"
      },
      {
        name: "Work Area",
        image: executiveWorkArea,
        description: "Dedicated desk space with ergonomic chair"
      },
      {
        name: "Kitchenette",
        image: executiveKitchenette,
        description: "Coffee maker and mini-fridge for convenience"
      },
      {
        name: "Bathroom",
        image: executiveBathroom,
        description: "Modern bathroom with shower"
      }
    ],
    menuItems: [
      { id: "m1", name: "Continental Breakfast", price: 3500, category: "breakfast", description: "Fresh pastries, fruits, coffee/tea" },
      { id: "m3", name: "Club Sandwich", price: 4000, category: "lunch", description: "Triple-decker with fries" },
      { id: "m6", name: "Fresh Juice", price: 1500, category: "drinks", description: "Orange, pineapple, or mixed" },
      { id: "m7", name: "Soft Drinks", price: 800, category: "drinks", description: "Assorted beverages" },
    ]
  },
  "studio-suite": {
    id: "studio-suite",
    areas: [
      {
        name: "Studio Space",
        image: studioSpace,
        description: "Open-plan living area with double bed"
      },
      {
        name: "Kitchen",
        image: studioKitchen,
        description: "Full kitchenette with dining table"
      },
      {
        name: "Bathroom",
        image: studioBathroom,
        description: "Compact modern bathroom"
      }
    ],
    menuItems: [
      { id: "m1", name: "Continental Breakfast", price: 3500, category: "breakfast", description: "Fresh pastries, fruits, coffee/tea" },
      { id: "m6", name: "Fresh Juice", price: 1500, category: "drinks", description: "Orange, pineapple, or mixed" },
      { id: "m7", name: "Soft Drinks", price: 800, category: "drinks", description: "Assorted beverages" },
    ]
  }
};
