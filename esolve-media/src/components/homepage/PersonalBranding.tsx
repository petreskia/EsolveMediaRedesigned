"use client";
import { useState } from "react";
import SectionContainer from "../layouts/SectionContainer";
import WhatWeOffer from "../ui/WhatWeOffer";
import ToggleButton from "../ui/ToggleButton";
import SectionHeader from "../layouts/SectionHeader";
import BrandDevelopersSection from "./BrandDevelopersSection";
import PackagesSection from "../packages/PackagesSection";

export default function PersonalBranding() {
  const [selectedOption, setSelectedOption] = useState("Coaches/Consultants");

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
        <PackagesSection
          category="personal-branding"
          isStandalonePage={false}
        />
      ) : (
        <BrandDevelopersSection />
      )}
    </SectionContainer>
  );
}
