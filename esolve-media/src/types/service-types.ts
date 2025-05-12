// types/service-types.ts
export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // base filename for both icons
}

export interface ServiceCategory {
  id: string;
  title: string;
  services: Service[];
}
