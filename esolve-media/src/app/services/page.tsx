import ServiceCategory from "@/components/services/ServiceCategory";
import SectionHeader from "@/components/layouts/SectionHeader";
import {
  graphicDesignServices,
  hyperPersonalizedServices,
  managementServices,
  shortFormServices,
  systemsServices,
  webDesignServices,
} from "@/data/services-data";
import WhatYouWillReceive from "@/components/ui/what-you-will-recieve";

export default function ServicesPage() {
  return (
    <main className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
        {/* Header */}
        <SectionHeader
          heading="Services"
          subheading={`Personal branding & \nMarketing for businesses`}
        />

        {/* What we offer */}
        <WhatYouWillReceive />

        {/* Service Categories */}
        <ServiceCategory
          title="Web Design, Funnels & Platform Development"
          services={webDesignServices}
          showPortfolioButton={true}
        />

        <ServiceCategory
          title="Graphic Design & Branding"
          services={graphicDesignServices}
          showPortfolioButton={true}
        />

        <ServiceCategory
          title="Systems & automations"
          services={systemsServices}
          showProcessToggle={true}
        />

        <ServiceCategory
          title="Hyper Personalized AI outreach"
          services={hyperPersonalizedServices}
          showPortfolioButton={true}
        />

        <ServiceCategory
          title="Short form content"
          services={shortFormServices}
          showPortfolioButton={true}
        />

        <ServiceCategory title="Management" services={managementServices} />
      </div>
    </main>
  );
}
