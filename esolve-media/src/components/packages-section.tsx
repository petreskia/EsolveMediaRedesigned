"use client";

import { useState } from "react";
import {
  personalBrandingPackages,
  businessMarketingPackages,
} from "./packages-data";
import ExpandedPackageCard from "./ExpandedPackageCard";
import PackageCard from "./PackageCardTwo";
import DiscoveryCallModal from "./DiscoveryCallModal";

interface PackagesSectionProps {
  title: string;
  subtitle: string;
  category: "personal-branding" | "business-marketing";
}

export default function PackagesSection({
  title,
  subtitle,
  category,
}: PackagesSectionProps) {
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const packages =
    category === "personal-branding"
      ? personalBrandingPackages
      : businessMarketingPackages;

  const handleCardClick = (packageId: string) => {
    setExpandedPackage(packageId);
  };

  const handleCloseExpanded = () => {
    setExpandedPackage(null);
  };

  const handleBookCall = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="mb-24">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-1">{title}</h2>
        {subtitle && <p className="text-white/70">{subtitle}</p>}
      </div>

      {expandedPackage ? (
        <div className="relative">
          {/* Minimized package buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {packages.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => handleCardClick(pkg.id)}
                className={`py-3 px-4 rounded-full text-center ${
                  expandedPackage === pkg.id
                    ? "bg-neutral-700 text-white"
                    : "bg-neutral-800/50 text-white/70 hover:bg-neutral-700/70 hover:text-white"
                } transition-colors`}
              >
                {pkg.title}
              </button>
            ))}
          </div>

          {/* Expanded package card */}
          {packages
            .filter((pkg) => pkg.id === expandedPackage)
            .map((pkg) => (
              <ExpandedPackageCard
                key={pkg.id}
                packageData={pkg}
                onClose={handleCloseExpanded}
                onBookCall={handleBookCall}
              />
            ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              title={pkg.title}
              subtitle={pkg.subtitle}
              price={pkg.price}
              features={pkg.features.map((f) => f.title)}
              ctaText={pkg.ctaText}
              customHeader={pkg.customHeader}
              showMore={pkg.showMore}
              onClick={() => handleCardClick(pkg.id)}
            />
          ))}
        </div>
      )}

      {/* Discovery Call Modal */}
      {showModal && <DiscoveryCallModal onClose={handleCloseModal} />}
    </div>
  );
}
