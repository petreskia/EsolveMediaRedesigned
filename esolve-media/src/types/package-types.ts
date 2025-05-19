export interface Feature {
  title: string;
  description?: string;
  quantity?: string;
}

export interface PackageData {
  id: string;
  title: string;
  subtitle: string;
  price?: string;
  fees?: string;
  description?: string;
  features: Feature[];
  ctaText: string;
  customHeader?: React.ReactNode;
  showMore?: boolean;
}
