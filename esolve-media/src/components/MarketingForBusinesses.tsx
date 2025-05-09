import PricingCard from "./PackageCard";
import PricingGrid from "./PricingGrid";
import SectionContainer from "./SectionContainer";
import SectionHeader from "./SectionHeader";
import WhatWeOffer from "./WhatWeOffer";

export default function MarketingForBusinesses() {
  const businessData = {
    starter: {
      title: "Starter",
      subtitle: "Get your business online – with zero fuss",
      price: "949",
      features: [
        "Landing Page (One-pager)",
        "Custom Logo design/redesign",
        "Contact Form Integration",
        "Mini CRM in Notion",
        "Client Portal + Slack Support",
      ],
      ctaText: "Get it now",
    },
    growth: {
      title: "Growth",
      subtitle: "From scattered presence to a system that sells",
      price: "1850",
      features: [
        "Full Website Design/Redesign",
        "Visual Branding Kit",
        "1x Lead Magnet Development",
        "Email Flow Setup",
        "Mini CRM in Notion or Trello",
      ],
      showMore: true,
      ctaText: "Get it now",
    },
    ai: {
      title: "Hyper Personalized AI outreach",
      subtitle: "AI-powered outreach tailored to each lead",
      customHeader: <div className="text-xl font-bold mt-6">Package based</div>,
      features: [
        "AI Message Personalization",
        "Dynamic Content Adaptation",
        "Personalized Lead Magnets",
        "Advanced Prospect AI Segmentation",
        "Insightful Personalization Reports",
      ],
      showMore: true,
      ctaText: "Explore Packages",
    },
    custom: {
      title: "Create your own custom package",
      subtitle: "From scattered presence to a system that sells",
      customHeader: (
        <div className="text-xl font-bold mt-6">Tailored to you</div>
      ),
      features: [
        "Strategy & content",
        "Web design/Funnels/platforms",
        "Lead magnets",
        "Ads & Visibility",
        "Systems & Automations",
      ],
      showMore: true,
      ctaText: "Explore Services",
    },
  };

  return (
    <SectionContainer className="bg-gradient-to-b from-neutral-900 to-black">
      <SectionHeader
        heading="Marketing for Businesses"
        subheading="Smart marketing for business growth"
      />

      <WhatWeOffer />

      <PricingGrid>
        <PricingCard {...businessData.starter} />
        <PricingCard {...businessData.growth} />
        <PricingCard {...businessData.ai} />
        <PricingCard {...businessData.custom} />
      </PricingGrid>
    </SectionContainer>
  );
}
