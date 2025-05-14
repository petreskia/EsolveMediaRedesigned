"use client";
import { useState } from "react";
import SectionContainer from "../layouts/SectionContainer";
import WhatWeOffer from "../ui/WhatWeOffer";
import ToggleButton from "../ui/ToggleButton";
import PricingGrid from "../packages/PackagesGrid";
import PackageCard from "../packages/PackageCard";
import SectionHeader from "../layouts/SectionHeader";
import { personalBrandingPackages } from "@/data/packages-data";
import BrandDevelopersSection from "./BrandDevelopersSection";

export default function PersonalBranding() {
  const [selectedOption, setSelectedOption] = useState("Coaches/Consultants");

  // Convert array to object for easy access by id
  const coachesData = personalBrandingPackages.reduce((acc, pkg) => {
    acc[pkg.id] = pkg;
    return acc;
  }, {} as Record<string, (typeof personalBrandingPackages)[0]>);

  const handleButtonClick = () => {
    // Logic for button click
    window.location.href = "/packages";
  };

  return (
    <SectionContainer>
      <SectionHeader
        heading="Personal Branding"
        subheading={`Coaches/Consultants & \n Brand developers`}
      />

      <WhatWeOffer />

      <ToggleButton
        options={["Coaches/Consultants", "Brand developers"]}
        onToggle={setSelectedOption}
      />

      {selectedOption === "Coaches/Consultants" ? (
        <PricingGrid>
          <PackageCard
            {...coachesData.build}
            features={coachesData.build.features.map((f) => f.title)}
            onClick={handleButtonClick}
          />
          <PackageCard
            {...coachesData.growth}
            features={coachesData.growth.features.map((f) => f.title)}
            onClick={handleButtonClick}
          />
          <PackageCard
            {...coachesData["ai-outreach"]}
            features={coachesData["ai-outreach"].features.map((f) => f.title)}
            onClick={handleButtonClick}
          />
          <PackageCard
            {...coachesData.custom}
            features={coachesData.custom.features.map((f) => f.title)}
            onClick={handleButtonClick}
          />
        </PricingGrid>
      ) : (
        // Render your BrandDevelopersSection component here
        <BrandDevelopersSection />
      )}
    </SectionContainer>
  );
}
