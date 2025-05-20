export interface PackageItem {
  id: string;
  title: string;
  subtitle?: string;
  features: string[];
  hasQuantityOption?: boolean;
  minQuantity?: number;
  maxQuantity?: number;
  quantity?: number;
  channels?: string[];
  selectedChannels?: string[];
}

export interface CreatePackageCategory {
  id: string;
  name: string;
  packages: PackageItem[];
}

export const createPackageData: CreatePackageCategory[] = [
  {
    id: "strategy-content",
    name: "Strategy & Content",
    packages: [
      {
        id: "personal-situation-analysis-standard",
        title: "Personal Situation Analysis Standard",
        subtitle: "3-4 slide PDF",
        features: [
          "In depth analyze of current situation (Social profiles - offer - content)",
          "Personal tips based on your niche & offer",
          "Next 5 video ideas + CTA & script",
          "Next steps for client monetization",
        ],
      },
      {
        id: "personal-walkthrough-premium",
        title: "Personal Walkthrough & Situation Analysis Premium",
        subtitle: "5-7 slide PDF",
        features: [
          "In depth analyze of current situation (Social profiles - offer - content)",
          "In depth audience analysis, critical triggers/pain points",
          "Personal tips based on your niche & offer",
          "Next 10 video ideas + CTA & script",
          "Next steps for client monetization",
        ],
      },
      {
        id: "short-form-content",
        title: "Short Form Content",
        features: ["CTA + script + post editing"],
        hasQuantityOption: true,
        minQuantity: 5,
        maxQuantity: 20,
      },
      {
        id: "raw-footage-editing",
        title: "Raw Footage Editing",
        features: [
          "Transform your already existing content into high quality short form videos",
          "Long streaming sessions cut into snippets of entertainment",
          "Custom ideas for reels",
        ],
      },
    ],
  },
  {
    id: "web-design",
    name: "Web Design/Funnels",
    packages: [
      {
        id: "funnel-setup",
        title: "Funnel Set Up",
        features: ["Optimized premium booking site for services"],
      },
      {
        id: "community-setup",
        title: "Community Set Up",
        features: [
          "Build a community with your preferred platform",
          "Structure development",
          "Engagement strategy",
          "Offer positioning",
        ],
      },
      {
        id: "full-web-design",
        title: "Full Web Design",
        features: [
          "Variety of packages based on your needs",
          "Custom website design",
          "Responsive design for all devices",
          "SEO optimization",
        ],
      },
    ],
  },
  {
    id: "lead-magnets",
    name: "Lead Magnets",
    packages: [
      {
        id: "freebie-resource",
        title: "Freebie Resource Development",
        subtitle: "Lead Magnet",
        features: [
          "Hands on structuring and developing lead magnets",
          "Convert prospects into clients",
          "Strategic content development",
        ],
      },
      {
        id: "chat-robot-integration",
        title: "Chat Robot Integration + CRM Integration",
        features: [
          "Personally branded chat robot",
          "Designed to capture & nurture leads on autopilot",
          "CRM integration for lead management",
        ],
      },
    ],
  },
  {
    id: "ads-visibility",
    name: "Ads & Visibility",
    packages: [
      {
        id: "boosted-reel-campaign",
        title: "Boosted Reel Campaign Management",
        features: [
          "Optimal ICP targeting",
          "Tracking implementation",
          "A/B testing",
          "Hands on management",
        ],
      },
    ],
  },
  {
    id: "leads-outreach",
    name: "Leads & Outreach",
    packages: [
      {
        id: "hyper-personalized-ai-outreach",
        title: "Hyper Personalized AI Outreach",
        features: [
          "Optimal ICP targeting",
          "Hyper personalized outreach",
          "Reach up to 10,000 qualified prospects per month",
          "3-7 mail sequences based on ICP & industry",
          "Follow up & hands on management",
        ],
        channels: [
          "Email",
          "LinkedIn",
          "META/Instagram",
          "WhatsApp",
          "Other channels",
        ],
      },
    ],
  },
  {
    id: "systems-automations",
    name: "Systems & Automations",
    packages: [
      {
        id: "workflow-optimization-automations",
        title: "Custom workflow optimization & automations",
        features: [
          "Streamlined systems and automations tailored to how you work",
        ],
      },
      {
        id: "ai-agent",
        title: "AI agents",
        features: [
          "Integrate AI agents to optimize processes and enhance customer interactions",
        ],
      },
    ],
  },
];
