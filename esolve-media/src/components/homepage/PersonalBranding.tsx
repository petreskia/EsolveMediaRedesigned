"use client";

import { useState } from "react";
import SectionContainer from "../layouts/SectionContainer";
import WhatWeOffer from "../ui/WhatWeOffer";
import ToggleButton from "../ui/ToggleButton";
import PricingGrid from "../packages/PackagesGrid";
import PricingCard from "../packages/PricingCard";
import SectionHeader from "../layouts/SectionHeader";

export default function PersonalBranding() {
  const [selectedOption, setSelectedOption] = useState("Coaches/Consultants");

  // Data for Coaches/Consultants
  const coachesData = {
    build: {
      title: "Build",
      subtitle: "Begin your journey as a content creator",
      price: "1850",
      features: [
        "Strategic session",
        "Short form content",
        "Funnel development",
        "Free resource development",
        "Client portal + Slack support & shared files space",
      ],
      ctaText: "Get it now",
    },
    growth: {
      title: "Growth",
      subtitle: "Ready to take it to the next level?",
      price: "3950",
      features: [
        "Strategic session",
        "Short form content",
        "Growth dashboard",
        "14 days boosted reel management",
        "Landing page design/redesign",
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
        "Web design, funnels & platforms",
        "Lead magnets",
        "Ads & Visibility",
        "Systems & Automations",
      ],
      showMore: true,
      ctaText: "Explore Services",
    },
  };

  // Data for Brand Developers
  const developersData = {
    build: {
      title: "Foundation",
      subtitle: "Build your brand identity from scratch",
      price: "2250",
      features: [
        "Brand strategy session",
        "Visual identity development",
        "Brand guidelines",
        "Basic website design",
        "Social media templates",
      ],
      ctaText: "Get it now",
    },
    growth: {
      title: "Expansion",
      subtitle: "Scale your brand presence across platforms",
      price: "4750",
      features: [
        "Advanced brand strategy",
        "Full website development",
        "Content creation system",
        "Brand voice & messaging guide",
        "Marketing collateral design",
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
        "Web design, funnels & platforms",
        "Lead magnets",
        "Ads & Visibility",
        "Systems & Automations",
      ],
      showMore: true,
      ctaText: "Explore Services",
    },
  };

  const data =
    selectedOption === "Coaches/Consultants" ? coachesData : developersData;

  return (
    <SectionContainer className="bg-gradient-to-b from-black to-neutral-900">
      <SectionHeader
        heading="Personal Branding"
        subheading={`Coaches/Consultants & \n Brand developers`}
      />

      <WhatWeOffer />

      <ToggleButton
        options={["Coaches/Consultants", "Brand developers"]}
        onToggle={setSelectedOption}
      />

      <PricingGrid>
        <PricingCard {...data.build} />
        <PricingCard {...data.growth} />
        <PricingCard {...data.ai} />
        <PricingCard {...data.custom} />
      </PricingGrid>
    </SectionContainer>
  );
}
