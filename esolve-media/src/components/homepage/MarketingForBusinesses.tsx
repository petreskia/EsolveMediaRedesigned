import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../layouts/SectionHeader";
import WhatWeOffer from "../ui/WhatWeOffer";
import PackagesSection from "../packages/PackagesSection";

export default function MarketingForBusinesses() {
  return (
    <SectionContainer className="bg-gradient-to-b from-neutral-900 to-black">
      <SectionHeader
        heading={`Marketing for \nBusinesses`}
        subheading={`Smart marketing for \nbusiness growth`}
      />

      <WhatWeOffer />

      {/* Personal Branding Section */}
      <PackagesSection
        title="Personal Branding"
        subtitle="Coaches/Consultants"
        category="personal-branding"
      />
    </SectionContainer>
  );
}
