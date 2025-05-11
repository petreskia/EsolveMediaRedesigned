import type { ServiceCategory, PricingTier } from "@/types/package-types";
import {
  WebDesignIcon,
  FunnelIcon,
  CommunityIcon,
  StrategyIcon,
  BrandingIcon,
  SystemIcon,
  AutomationIcon,
  EmailIcon,
  AiIcon,
  AnalyticToolIcon,
  ResourceIcon,
  ManagementIcon,
} from "@/components/ServiceIcons"; // Adjust the import path as necessary

export const serviceCategories: ServiceCategory[] = [
  {
    id: "web-design",
    title: "Web Design, Funnels & Platform Development",
    services: [
      {
        id: "complete-website",
        number: 1,
        title: "Complete Website Design",
        description:
          "Custom websites built with modern technologies for optimal performance",
        icon: <WebDesignIcon />,
      },
      {
        id: "funnel-setup",
        number: 2,
        title: "Funnel set up",
        description:
          "Strategic sales funnels designed to convert visitors into customers",
        icon: <FunnelIcon />,
      },
      {
        id: "community-platforms",
        number: 3,
        title: "Community platforms",
        description:
          "Engaging spaces for your audience to connect and collaborate",
        icon: <CommunityIcon />,
      },
    ],
  },
  {
    id: "strategy-content",
    title: "Strategy & Content",
    services: [
      {
        id: "situation-analysis",
        number: 1,
        title: "Situation analysis/strategy",
        description:
          "Comprehensive analysis of your current situation and strategic planning",
        icon: <StrategyIcon />,
      },
      {
        id: "content-strategy",
        number: 2,
        title: "Content strategy",
        description:
          "Strategic content planning aligned with your business goals",
        icon: <StrategyIcon />,
      },
      {
        id: "branding-elements",
        number: 3,
        title: "Branding elements",
        description:
          "Visual identity elements that capture your brand's essence",
        icon: <BrandingIcon />,
      },
    ],
  },
  {
    id: "systems-automations",
    title: "Systems & automations",
    services: [
      {
        id: "internal-workflow",
        number: 1,
        title: "Internal workflow optimization",
        description:
          "Streamlined processes to improve efficiency and productivity",
        icon: <SystemIcon />,
      },
      {
        id: "custom-automations",
        number: 2,
        title: "Custom automations & integrations",
        description:
          "Tailored automation solutions to save time and reduce errors",
        icon: <AutomationIcon />,
      },
      {
        id: "email-flow",
        number: 3,
        title: "Email flow set up",
        description:
          "Automated email sequences to nurture leads and drive conversions",
        icon: <EmailIcon />,
      },
      {
        id: "ai-agent",
        number: 4,
        title: "AI agent",
        description:
          "Intelligent assistants to handle routine tasks and customer inquiries",
        icon: <AiIcon />,
      },
      {
        id: "analytic-tools",
        number: 5,
        title: "Analytic tools",
        description:
          "Data collection and analysis tools to inform business decisions",
        icon: <AnalyticToolIcon />,
      },
    ],
  },
  {
    id: "lead-magnets",
    title: "Lead magnets",
    services: [
      {
        id: "free-resource",
        number: 1,
        title: "Free resource development",
        description:
          "Valuable content to attract and engage your target audience",
        icon: <ResourceIcon />,
      },
      {
        id: "chat-widget",
        number: 2,
        title: "Chat widget integration + CRM integration",
        description:
          "Interactive chat solution integrated with your customer relationship management system",
        icon: <AiIcon />,
      },
    ],
  },
  {
    id: "ads-visibility",
    title: "Ads & Visibility",
    services: [
      {
        id: "boosted-reel",
        number: 1,
        title: "Boosted reel management",
        description:
          "Strategic boosting and management of your reels for maximum reach and engagement",
        icon: <ManagementIcon />,
      },
    ],
  },
];

export const pricingTiers: PricingTier[] = [
  {
    id: "trial",
    title: "Trial",
    price: "899",
    description: "1-2 weeks of outreach to test the waters",
    features: [
      "500 leads/month",
      "AI personalization",
      "Basic segmentation",
      "Email & LinkedIn",
      "1 channel",
    ],
  },
  {
    id: "standard",
    title: "Standard",
    price: "1697",
    description: "Consistent outreach for steady growth",
    features: [
      "1,500 leads/month",
      "AI personalization",
      "Advanced segmentation",
      "Email & LinkedIn",
      "2 channels",
    ],
  },
  {
    id: "premium",
    title: "Premium",
    price: "3070",
    description: "Comprehensive outreach for serious growth",
    features: [
      "3,000 leads/month",
      "AI personalization",
      "Advanced segmentation",
      "Email, LinkedIn & Twitter",
      "3 channels",
    ],
  },
  {
    id: "elite",
    title: "Elite",
    price: "5050",
    description: "Maximum outreach for market domination",
    features: [
      "5,000 leads/month",
      "AI personalization",
      "Advanced segmentation",
      "All major platforms",
      "5+ channels",
    ],
  },
];
