import type { ReactNode } from "react";
import FeatureList from "./feature-list";

interface PricingCardProps {
  title: string;
  subtitle: string;
  price?: string;
  features: string[];
  ctaText: string;
  showMore?: boolean;
  customHeader?: ReactNode;
}

export default function PricingCard({
  title,
  subtitle,
  price,
  features,
  ctaText,
  showMore = false,
  customHeader,
}: PricingCardProps) {
  return (
    <div className="bg-neutral-900/90 rounded-3xl p-6 md:p-8 flex flex-col h-full">
      <div>
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
        <p className="text-sm md:text-base text-white/70 mt-1">{subtitle}</p>

        {customHeader ? (
          <div className="mt-6">{customHeader}</div>
        ) : (
          price && (
            <div className="text-3xl md:text-4xl font-bold mt-6">${price}</div>
          )
        )}
      </div>

      <FeatureList features={features} showMore={showMore} />

      <div className="mt-auto pt-8">
        <button className="w-full py-3 px-6 bg-teal-400/80 hover:bg-teal-400 text-black font-medium rounded-full transition-colors">
          {ctaText}
        </button>
      </div>
    </div>
  );
}
