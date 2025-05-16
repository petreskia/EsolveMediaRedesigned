import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../layouts/SectionHeader";
import WhatWeOffer from "../ui/WhatWeOffer";
import PackagesSection from "../packages/PackagesSection";

export default function MarketingForBusinesses() {
  return (
    <SectionContainer>
      <SectionHeader
        heading={`Marketing for \nBusinesses`}
        subheading={`Smart marketing for \nbusiness growth`}
      />

      <WhatWeOffer />

      {/* Marketing for businesses packages */}
      <PackagesSection category="business-marketing" isStandalonePage={false} />
    </SectionContainer>
  );
}
