import PackagesSection from "@/components/packages/PackagesSection";
import SectionHeader from "@/components/layouts/SectionHeader";
import WhatWeOffer from "@/components/ui/WhatWeOffer";

export default function PackagesPage() {
  return (
    <main className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
        {/* Header */}
        <SectionHeader
          heading="Packages"
          subheading={`Personal branding & \nMarketing for businesses`}
        />

        {/* What we offer */}
        <WhatWeOffer />

        {/* Personal Branding Section */}
        <PackagesSection
          title="Personal Branding"
          subtitle="Coaches/Consultants"
          category="personal-branding"
        />

        {/* Marketing for Businesses Section */}
        <PackagesSection
          title="Marketing for Businesses"
          subtitle=""
          category="business-marketing"
        />
      </div>
    </main>
  );
}
