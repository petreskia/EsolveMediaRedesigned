"use client";

import type { ReactNode } from "react";
import FeatureList from "./FeatureList";

interface PackageCardProps {
  title: string;
  subtitle: string;
  price?: string;
  fees?: string;
  features: string[];
  ctaText: string;
  showMore?: boolean;
  customHeader?: ReactNode;
  onClick?: () => void;
}

export default function PackageCard({
  title,
  subtitle,
  price,
  fees,
  features,
  ctaText,
  showMore = false,
  customHeader,
  onClick,
}: PackageCardProps) {
  return (
    <div className="bg-custom-gradient-card rounded-3xl p-6 md:p-8 flex flex-col h-full">
      <div>
        <h3 className="text-xl md:text-2xl font-bold uppercase">{title}</h3>
        <p className="text-sm md:text-base text-white/70 mt-1">{subtitle}</p>

        {customHeader ? (
          <div className="mt-6">{customHeader}</div>
        ) : (
          <div className="flex items-baseline gap-4 mt-6">
            {price && (
              <div className="text-3xl md:text-4xl font-bold mt-6">
                ${price}
              </div>
            )}
            {fees && (
              <p className="text-sm md:text-base text-white/60 mt-1">
                + {fees}
              </p>
            )}
          </div>
        )}
      </div>

      <FeatureList features={features} showMore={showMore} />

      <div className="mt-auto pt-8">
        <button
          onClick={onClick}
          className="w-full py-3 px-6 packages-btn text-xl font-semibold rounded-full transition-colors cursor-pointer"
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
}
