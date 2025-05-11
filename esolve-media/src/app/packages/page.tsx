import PackagesSection from "@/components/packages/packages-section";
import SectionHeader from "@/components/layouts/SectionHeader";

export default function PackagesPage() {
  return (
    <main className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
        {/* Header */}
        <SectionHeader
          heading="PACKAGES"
          subheading="Personal branding & Marketing for businesses"
        />

        {/* What we offer */}
        <div className="flex justify-center my-12">
          <div className="bg-neutral-800/80 rounded-full px-8 py-3 text-white/80 text-sm md:text-base">
            WHAT WE OFFER
          </div>
        </div>

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
