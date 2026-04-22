export type ListingItem = {
  id: string;
  title: string;
  type: string;
  location: string;
  price: string;
  size: string;
  badge: string;
  image: string;
  whatsapp: string;
  highlight: string;
  idealFor: string;
  category: "BUY" | "RENT" | "COMMERCIAL";
};

export const defaultListings: ListingItem[] = [
  {
    id: "buy-1",
    title: "Aravalli Ridge Estate",
    type: "Farm Investment",
    location: "Sohna, Gurgaon",
    price: "₹2.40 Cr onwards",
    size: "1 Acre Parcels",
    badge: "Verified Title",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
    whatsapp:
      "https://wa.me/919711667782?text=Hi%20Guild%20Acre%2C%20I%20want%20details%20for%20Aravalli%20Ridge%20Estate.",
    highlight: "Scenic belt with premium farmhouse-led demand",
    idealFor: "Lifestyle buyers and long-term land investors",
    category: "BUY",
  },
  {
    id: "buy-2",
    title: "Golf Edge Residences",
    type: "Luxury Apartment",
    location: "Golf Course Road",
    price: "₹5.80 Cr onwards",
    size: "3 & 4 BHK",
    badge: "Luxury Core",
    image:
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1400&q=80",
    whatsapp:
      "https://wa.me/919711667782?text=Hi%20Guild%20Acre%2C%20I%20want%20details%20for%20Golf%20Edge%20Residences.",
    highlight: "Prestige location with stronger premium end-user appeal",
    idealFor: "HNI buyers and luxury end-users",
    category: "BUY",
  },
  {
    id: "rent-1",
    title: "Central Park Skyline Lease",
    type: "Luxury Rental",
    location: "Golf Course Extension Road",
    price: "₹1.45 L / month",
    size: "3 BHK",
    badge: "Ready to Move",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80",
    whatsapp:
      "https://wa.me/919711667782?text=Hi%20Guild%20Acre%2C%20I%20want%20rental%20details%20for%20Central%20Park%20Skyline%20Lease.",
    highlight: "Modern premium living with immediate move-in convenience",
    idealFor: "Corporate professionals and premium family tenants",
    category: "RENT",
  },
  {
    id: "commercial-1",
    title: "Cyber Hub Business Suites",
    type: "Office Space",
    location: "Cyber City",
    price: "₹4.75 Cr onwards",
    size: "1,200 sq. ft.",
    badge: "High Visibility",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
    whatsapp:
      "https://wa.me/919711667782?text=Hi%20Guild%20Acre%2C%20I%20want%20details%20for%20Cyber%20Hub%20Business%20Suites.",
    highlight: "Prestige commercial address with stronger brand visibility",
    idealFor: "Owner-users and long-term commercial investors",
    category: "COMMERCIAL",
  },
];