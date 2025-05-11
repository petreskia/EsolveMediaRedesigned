import type React from "react";

interface Feature {
  title: string;
  description: string;
  quantity?: string;
}

interface PackageData {
  id: string;
  title: string;
  subtitle: string;
  price?: string;
  description?: string;
  features: Feature[];
  ctaText: string;
  customHeader?: React.ReactNode;
  showMore?: boolean;
}

// Personal Branding Packages
export const personalBrandingPackages: PackageData[] = [
  {
    id: "build",
    title: "Build",
    subtitle: "Begin your journey as a content creator",
    price: "1850",
    description:
      "For new creators who want to get going with structured & strategic content. Personalized for your avatar, niche & offer.",
    features: [
      {
        title: "Strategic session",
        description:
          "A focused session to assess content, define your value proposition, and outline clear next steps for client monetization—held at the end of each month.",
        quantity: "1x+1x",
      },
      {
        title: "Short form content",
        description:
          "8 fully scripted, ready-to-film short form content pieces (hook, pattern interrupt, CTA/closer & post text). Professional post-production editing.",
        quantity: "8x/month",
      },
      {
        title: "Funnel development",
        description: "From lead magnet setup to sales funnel & lead capturing.",
        quantity: "1x",
      },
      {
        title: "Free resource development",
        description:
          "Includes designing and developing a high-impact free resource to convert prospects into clients.",
        quantity: "1x",
      },
      {
        title: "Client portal + Slack support & shared files space",
        description: "",
        quantity: "",
      },
    ],
    ctaText: "Get it now",
  },
  {
    id: "growth",
    title: "Growth",
    subtitle: "Ready to take it to the next level?",
    price: "3950",
    features: [
      {
        title: "Strategic session",
        description:
          "A focused session to assess content, define your value proposition, and outline clear next steps for client monetization.",
        quantity: "1x+1x",
      },
      {
        title: "Short form content",
        description:
          "Fully scripted, ready-to-film short form content pieces with professional editing.",
        quantity: "8x/month",
      },
      {
        title: "Advanced funnel development",
        description:
          "Comprehensive sales funnel with advanced features and optimization.",
        quantity: "1x",
      },
      {
        title: "14 days boosted reel management",
        description:
          "Strategic boosting and management of your reels for maximum reach and engagement.",
        quantity: "14 days",
      },
      {
        title: "Landing page design/redesign",
        description: "Professional landing page optimized for conversions.",
        quantity: "1x",
      },
    ],
    ctaText: "Get it now",
    showMore: true,
  },
  {
    id: "ai-outreach",
    title: "Hyper Personalized AI outreach",
    subtitle: "AI-powered outreach tailored to each lead",
    customHeader: <div className="text-xl font-bold mt-6">Package based</div>,
    features: [
      {
        title: "Advanced Prospect Segmentation",
        description:
          "AI-driven segmentation of prospects for targeted outreach.",
        quantity: "",
      },
      {
        title: "Dynamic Content Adaptation",
        description:
          "Content that adapts based on prospect behavior and preferences.",
        quantity: "",
      },
      {
        title: "Personalized Lead Magnets",
        description:
          "Custom lead magnets tailored to specific prospect segments.",
        quantity: "",
      },
      {
        title: "Follow ups & Nurture sequences",
        description: "Automated yet personalized follow-up sequences.",
        quantity: "",
      },
      {
        title: "Insightful Personalization Reports",
        description:
          "Detailed analytics on outreach performance and optimization opportunities.",
        quantity: "",
      },
    ],
    ctaText: "Explore Packages",
    showMore: true,
  },
  {
    id: "custom",
    title: "Create your own custom package",
    subtitle: "From scattered presence to a system that sells",
    customHeader: <div className="text-xl font-bold mt-6">Tailored to you</div>,
    features: [
      {
        title: "Strategy & content",
        description:
          "Custom content strategy aligned with your business goals.",
        quantity: "",
      },
      {
        title: "Web design, funnels & platforms",
        description: "Professional web design and funnel development.",
        quantity: "",
      },
      {
        title: "Lead magnets",
        description: "High-converting lead magnets to grow your audience.",
        quantity: "",
      },
      {
        title: "Ads & Visibility",
        description: "Strategic ad campaigns to increase your visibility.",
        quantity: "",
      },
      {
        title: "Systems & Automations",
        description:
          "Streamlined workflows and automations to save time and increase efficiency.",
        quantity: "",
      },
    ],
    ctaText: "Explore Services",
    showMore: true,
  },
];

// Business Marketing Packages
export const businessMarketingPackages: PackageData[] = [
  {
    id: "starter",
    title: "Starter",
    subtitle: "Get your business online – with zero fuss",
    price: "949",
    features: [
      {
        title: "Landing Page (One-pager)",
        description: "Professional one-page website to showcase your business.",
        quantity: "1x",
      },
      {
        title: "Custom Logo design/redesign",
        description: "Professional logo design that represents your brand.",
        quantity: "1x",
      },
      {
        title: "Contact Form Integration",
        description:
          "Easy way for customers to reach you directly from your website.",
        quantity: "1x",
      },
      {
        title: "Mini CRM in Notion",
        description:
          "Simple customer relationship management system to track leads and clients.",
        quantity: "1x",
      },
      {
        title: "Client Portal + Slack Support",
        description: "Dedicated support and collaboration space.",
        quantity: "",
      },
    ],
    ctaText: "Get it now",
  },
  {
    id: "growth-business",
    title: "Growth",
    subtitle: "From scattered presence to a system that sells",
    price: "1850",
    features: [
      {
        title: "Full WebPage Design/Redesign",
        description: "Comprehensive website design optimized for conversions.",
        quantity: "1x",
      },
      {
        title: "Visual Branding Kit",
        description:
          "Complete visual identity package for consistent branding.",
        quantity: "1x",
      },
      {
        title: "1x Lead Magnet Development",
        description: "High-value lead magnet to attract and convert prospects.",
        quantity: "1x",
      },
      {
        title: "Email Flow Setup",
        description:
          "Automated email sequences to nurture leads and drive sales.",
        quantity: "1x",
      },
      {
        title: "Mini CRM in Notion or Trello",
        description:
          "Customized CRM system to manage your customer relationships.",
        quantity: "1x",
      },
    ],
    ctaText: "Get it now",
    showMore: true,
  },
  {
    id: "ai-outreach-business",
    title: "Hyper Personalized AI outreach",
    subtitle: "AI-powered outreach tailored to each lead",
    customHeader: <div className="text-xl font-bold mt-6">Package based</div>,
    features: [
      {
        title: "Advanced Prospect AI Segmentation",
        description:
          "AI-driven segmentation of prospects for targeted outreach.",
        quantity: "",
      },
      {
        title: "Dynamic Content Adaptation",
        description:
          "Content that adapts based on prospect behavior and preferences.",
        quantity: "",
      },
      {
        title: "Personalized Lead Magnets",
        description:
          "Custom lead magnets tailored to specific prospect segments.",
        quantity: "",
      },
      {
        title: "Follow ups & Nurture sequences",
        description: "Automated yet personalized follow-up sequences.",
        quantity: "",
      },
      {
        title: "Insightful Personalization Reports",
        description:
          "Detailed analytics on outreach performance and optimization opportunities.",
        quantity: "",
      },
    ],
    ctaText: "Explore Packages",
    showMore: true,
  },
  {
    id: "custom-business",
    title: "Create your own custom package",
    subtitle: "From scattered presence to a system that sells",
    customHeader: <div className="text-xl font-bold mt-6">Tailored to you</div>,
    features: [
      {
        title: "Strategy & content",
        description:
          "Custom content strategy aligned with your business goals.",
        quantity: "",
      },
      {
        title: "Web design/funnels/platforms",
        description: "Professional web design and funnel development.",
        quantity: "",
      },
      {
        title: "Lead magnets",
        description: "High-converting lead magnets to grow your audience.",
        quantity: "",
      },
      {
        title: "Ads & Visibility",
        description: "Strategic ad campaigns to increase your visibility.",
        quantity: "",
      },
      {
        title: "Systems & Automations",
        description:
          "Streamlined workflows and automations to save time and increase efficiency.",
        quantity: "",
      },
    ],
    ctaText: "Explore Services",
    showMore: true,
  },
];
