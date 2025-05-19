import { PackageData } from "@/types/package-types";

// Personal Branding Packages
export const personalBrandingPackages: PackageData[] = [
  {
    id: "build",
    title: "Build",
    subtitle: "Monetization starts here",
    price: "1850",
    description:
      "For new creators who want to get going with structured & strategic content. Personalized for your avatar, niche & offer",
    features: [
      {
        title: "Strategic session",
        description:
          "A focused session to assess content, define your value proposition, and outline clear next steps for client monetization—held at the end of each month",
        quantity: "1x+1x",
      },
      {
        title: "Short form content",
        description:
          "8 fully scripted, ready-to-film short form content pieces (hook, pattern interrupt, CTA/closer & post text). Professional post-production editing",
        quantity: "8x/month",
      },
      {
        title: "Funnel development",
        description:
          "Personally designed 1page funnel site for services & lead capturing",
        quantity: "1x",
      },
      {
        title: "Free resource development",
        description:
          "Hands-on structuring and developing 1x lead magnet/free resource to convert prospects into clients",
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
          "Fully scripted, ready-to-film short form content pieces with professional editing",
        quantity: "18x/month",
      },
      {
        title: "Growth Dashboard",
        description:
          "Comprehensive sales funnel with advanced features and optimization",
        quantity: "",
      },
      {
        title: "14 days boosted reel management (excluding ad spend)",
        description:
          "Strategic boosting and management of your reels for maximum reach and engagement",
        quantity: "1x",
      },
      {
        title: "Landing page design/redesign",
        description: "Professional landing page optimized for conversions",
        quantity: "1x",
      },
      {
        title: "Funnel development +  onboarding 3-5 post-flow sequence",
        description:
          "Personally optimized funnel site for services & lead capturing",
        quantity: "1x",
      },
      {
        title: "1:1 workshop session (45 min)",
        description: "Professional landing page optimized for conversions",
        quantity: "1x",
      },
      {
        title: "Up to 2x Lead Magnet/Free resource development",
        description:
          "Hands on structuring and developing up to 2x lead magnet/free resources to convert prospects into clients",
        quantity: "2x",
      },
      {
        title: "Weekly content review & email follow-up",
        description: "Weekly in-depth status report & next steps",
        quantity: "1x (weekly)",
      },
      {
        title: "Slack priority support + Client hub",
        description: "Access priority support from our team",
        quantity: "",
      },
    ],
    ctaText: "Get it now",
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
  },
  {
    id: "custom-package",
    title: "Create your own custom package",
    subtitle: "Explore and create your own package",
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
  },
];

// Business Marketing Packages
export const businessMarketingPackages: PackageData[] = [
  {
    id: "starter",
    title: "STARTER",
    subtitle: "Get your business online – with zero fuss",
    description:
      "For small business owners, shops, service providers or creators who want a sleek, professional presence – without getting lost in tech",
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
          "Smart, branded contact form routed directly to your inbox",
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
        description: "Async communication, shared folder for files & feedback",
        quantity: "",
      },
    ],
    ctaText: "Get it now",
  },
  {
    id: "growth-business",
    title: "GROWTH Premium",
    subtitle: "From scattered presence to a system that sells",
    description:
      "For small, product-based or service businesses that want to move beyond having a passive online presence and build a simple but powerful digital system that drives action and builds trust",
    price: "1850",
    features: [
      {
        title: "Full WebPage Design/Redesign",
        description: "Comprehensive website design optimized for conversions.",
        quantity: "",
      },
      {
        title: "Visual Branding Kit",
        description:
          "Complete visual identity package for consistent branding.",
        quantity: "",
      },
      {
        title: "1x Lead Magnet Development",
        description: "High-value lead magnet to attract and convert prospects.",
        quantity: "",
      },
      {
        title: "Email Flow Setup",
        description:
          "Automated email sequences to nurture leads and drive sales.",
        quantity: "",
      },
      {
        title: "Mini CRM in Notion or Trello",
        description:
          "Customized CRM system to manage your customer relationships.",
        quantity: "",
      },
      {
        title: "Client hub & async Slack support",
        description:
          "Customized CRM system to manage your customer relationships.",
        quantity: "",
      },
    ],
    ctaText: "Get it now",
  },
  {
    id: "ai-outreach",
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
  },
  {
    id: "custom-package",
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
  },
];

// Personal Branding Packages
export const hyperPersonalizedAIPackages: PackageData[] = [
  {
    id: "trial",
    title: "Trial",
    subtitle: "",
    price: "1395",
    fees: "$200 system fee",
    features: [
      {
        title: "Spam folder prohibitor integration",
      },
      {
        title: "1000 qualified prospects/month",
      },
      {
        title: "Email flow + follow up",
      },
      {
        title: "Professional copywriting",
      },
      {
        title: "Email only",
      },
    ],
    ctaText: "Get it now",
  },
  {
    id: "standard",
    title: "Standard",
    subtitle: "",
    price: "2395",
    fees: "$200 system fee",
    features: [
      {
        title: "Spam folder prohibitor integration",
      },
      {
        title: "2500 qualified prospects/month + A/B testing",
      },
      {
        title: "Email flow + follow up",
      },
      {
        title: "Professional copywriting",
      },
      {
        title: "IAdditional social media outreach",
      },
    ],
    ctaText: "Get it now",
  },
  {
    id: "premium",
    title: "Premium",
    subtitle: "",
    price: "3395",
    fees: "$370 system fee",
    features: [
      {
        title: "Spam folder prohibitor integration",
      },
      {
        title: "5000 qualified prospects/month + A/B testing",
      },
      {
        title: "Email flow + follow up",
      },
      {
        title: "Professional copywriting",
      },
      {
        title: "Additional social media outreach",
      },
      {
        title: "Instagram outreach (100/month)",
      },
      {
        title: "Branded chat bot + CRM",
      },
    ],
    ctaText: "Get it now",
  },
  {
    id: "elite",
    title: "Elite",
    subtitle: "",
    price: "5495",
    fees: "$500 system fee",
    features: [
      {
        title: "Email warm up",
      },
      {
        title: "10 000 prospects per month",
      },
      {
        title: "500 emails per business day (7 email domains needed)",
      },
      {
        title: "A/B testing",
      },
      {
        title:
          "Email/Linkedin/Whatsapp (optional) (8 both for Linkedin & Whatsapp)",
      },
      {
        title: "IG outreach (100)",
      },
      {
        title: "Chatbot",
      },
      {
        title: "Copywriter",
      },
      {
        title: "Premium support",
      },
    ],
    ctaText: "Get it now",
  },
];
