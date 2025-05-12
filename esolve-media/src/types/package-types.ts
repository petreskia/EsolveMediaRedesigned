export interface PricingTier {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
}

export interface SelectedPackage {
  services: string[];
  pricingTier: string | null;
}
