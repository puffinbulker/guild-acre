export type PropertyRecord = {
  id: string;
  title: string;
  slug: string;
  description: string;
  location: string;
  sector: string;
  city: string;
  priceInr: number;
  type: string;
  status: string;
  bedrooms: number | null;
  bathrooms: number | null;
  areaSqft: number;
  featured: boolean;
  imageUrls: string;
  amenities: string;
  createdAt: string;
  updatedAt: string;
};

export type LeadRecord = {
  id: string;
  name: string;
  phone: string;
  requirement: string;
  propertyId: string | null;
  createdAt: string;
};
