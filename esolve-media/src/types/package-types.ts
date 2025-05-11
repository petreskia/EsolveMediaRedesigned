import type { ReactNode } from "react";

export interface Service {
  id: string;
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface ServiceCategory {
  id: string;
  title: string;
  services: Service[];
}

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
