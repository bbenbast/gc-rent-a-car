export interface Car {
  id: string;
  name: string;
  category: 'Económico' | 'SUV' | 'Pickup' | 'Van';
  image: string;
  features: string[];
  plate?: string;
  description: string;
  priceEstimate?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface CompanyInfo {
  name: string;
  phone1: string;
  phone2: string;
  email: string;
  address: string;
  nif: string;
}