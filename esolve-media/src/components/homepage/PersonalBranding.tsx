"use client";
import { useState } from "react";
import SectionContainer from "../layouts/SectionContainer";
import WhatWeOffer from "../ui/WhatWeOffer";
import ToggleButton from "../ui/ToggleButton";
import PricingGrid from "../packages/PackagesGrid";
import PricingCard from "../packages/PricingCard";
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

  // Data for Brand Developers is now a separate component, as per your request

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
          <PricingCard
            {...coachesData.build}
            features={coachesData.build.features.map((f) => f.title)}
          />
          <PricingCard
            {...coachesData.growth}
            features={coachesData.growth.features.map((f) => f.title)}
          />
          <PricingCard
            {...coachesData["ai-outreach"]}
            features={coachesData["ai-outreach"].features.map((f) => f.title)}
          />
          <PricingCard
            {...coachesData.custom}
            features={coachesData.custom.features.map((f) => f.title)}
          />
        </PricingGrid>
      ) : (
        // Render your BrandDevelopersSection component here
        <BrandDevelopersSection />
      )}
    </SectionContainer>
  );
}
