import SectionHeader from "@/components/layouts/SectionHeader";
import PackagesSection from "@/components/packages/PackagesSection";
import WhatYouWillReceive from "@/components/ui/what-you-will-recieve";

export default function HyperPersonalizedAIOutreachPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
      <header>
        <SectionHeader
          heading={`Hyper Personalized \nAI Outreach Package`}
          subheading="AI-Powered Outreach for Maximum Impact"
        />
      </header>
      <main>
        <WhatYouWillReceive />
        <PackagesSection
          title="Personal Branding & Marketing for Businesses"
          subtitle=""
          category="hyper-personalized-ai"
        />
      </main>
    </div>
  );
}
