"use client";

import type React from "react";

import { X } from "lucide-react";
import { PackageData } from "@/types/package-types";

interface ExpandedPackageCardProps {
  packageData: PackageData;
  onClose: () => void;
  onBookCall: () => void;
}

export default function ExpandedPackageCard({
  packageData,
  onClose,
  onBookCall,
}: ExpandedPackageCardProps) {
  return (
    <div className="bg-custom-gradient-card rounded-3xl p-6 md:p-8 relative">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        aria-label="Close"
      >
        <X size={20} />
      </button>

      {/* Header */}
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-bold">{packageData.title}</h3>
        <p className="text-sm md:text-base text-white/70 mt-1">
          {packageData.subtitle}
        </p>

        {packageData.description && (
          <p className="mt-4 text-white/90">{packageData.description}</p>
        )}

        {packageData.price && (
          <div className="text-4xl md:text-5xl font-bold mt-6">
            ${packageData.price}
          </div>
        )}
      </div>

      {/* Features with detailed descriptions */}
      <div className="mb-8">
        <h4 className="text-xl text-teal-400/90 mb-4">Includes:</h4>
        <div className="space-y-6">
          {packageData.features.map((feature, index) => (
            <div key={index} className="flex">
              <div className="flex-grow">
                <div className="flex items-start gap-2">
                  <div className="text-teal-400 mt-1">✓</div>
                  <div>
                    <h5 className="font-medium">{feature.title}</h5>
                    <p className="text-sm text-white/70 mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
              {feature.quantity && (
                <div className="text-teal-400/90 text-sm whitespace-nowrap pl-4">
                  {feature.quantity}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center">
        <button
          onClick={onBookCall}
          className="py-3 px-8 bg-teal-400/80 hover:bg-teal-400 text-black font-medium rounded-full transition-colors"
        >
          Book a discovery call
        </button>
      </div>
    </div>
  );
}
