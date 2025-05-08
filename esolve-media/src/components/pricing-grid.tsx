import type { ReactNode } from "react";

interface PricingGridProps {
  children: ReactNode;
}

export default function PricingGrid({ children }: PricingGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
      {children}
    </div>
  );
}
