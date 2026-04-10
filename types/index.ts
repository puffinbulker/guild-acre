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
  sourceType: string;
  approvalStatus: string;
  boostTier: string;
  leadRoutingMode: string;
  featuredRequested: boolean;
  listingContactName: string | null;
  listingContactPhone: string | null;
  listingContactRole: string | null;
  vendorId: string | null;
  createdAt: string;
  updatedAt: string;
};

export type LeadRecord = {
  id: string;
  name: string;
  phone: string;
  requirement: string;
  propertyId: string | null;
  assignedDealerId: string | null;
  routingStatus: string;
  sourceChannel: string;
  createdAt: string;
};

export type DealerRecord = {
  id: string;
  name: string;
  companyName: string | null;
  email: string;
  phone: string;
  role: string;
  status: string;
  planType: string;
  isVerified: boolean;
  featuredSlots: number;
  leadBalance: number;
  analyticsSnapshot: string;
  serviceAreas: string;
  createdAt: string;
  updatedAt: string;
};
