"use client";

import { useState } from "react";
import {
  personalBrandingPackages,
  businessMarketingPackages,
  hyperPersonalizedAIPackages,
} from "../../data/packages-data";
import ExpandedPackageCard from "./ExpandedPackageCard";
import DiscoveryCallModal from "./DiscoveryCallModal";
import PackageCard from "./PackageCard";

interface PackagesSectionProps {
  title?: string;
  subtitle?: string;
  category:
    | "personal-branding"
    | "business-marketing"
    | "hyper-personalized-ai";
  isStandalonePage?: boolean; // ← New optional prop
}

export default function PackagesSection({
  title,
  subtitle,
  category,
  isStandalonePage = false,
}: PackagesSectionProps) {
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const packages =
    category === "personal-branding"
      ? personalBrandingPackages
      : category === "business-marketing"
      ? businessMarketingPackages
      : hyperPersonalizedAIPackages;

  const handleCardClick = (packageId: string) => {
    // Redirect to specific pages based on package ID
    if (packageId === "ai-outreach") {
      window.location.href = "/hyper-personalized-ai-outreach";
      return;
    }

    if (packageId === "custom-package") {
      window.location.href = "/create-your-package";
      return;
    }
    // Default behavior
    if (isStandalonePage) {
      setExpandedPackage(packageId);
    } else {
      window.location.href = "/packages";
    }
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              title={pkg.title}
              subtitle={pkg.subtitle}
              price={pkg.price}
              fees={pkg.fees}
              features={pkg.features.map((f) => f.title)}
              ctaText={pkg.ctaText}
              customHeader={pkg.customHeader}
              showMore={pkg.showMore ?? false}
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
