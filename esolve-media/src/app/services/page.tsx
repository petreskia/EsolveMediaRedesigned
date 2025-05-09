import ServiceCategory from "@/components/ServiceCategory";
import {
  WebDesignIcon,
  FunnelIcon,
  PlatformIcon,
  CommunityIcon,
  StrategyIcon,
  AnalyticsIcon,
  LogoIcon,
  BrandingIcon,
  ResourceIcon,
  SystemIcon,
  AutomationIcon,
  EmailIcon,
  AiIcon,
  AnalyticToolIcon,
  ContentIcon,
  VideoIcon,
  AnimationIcon,
  ManagementIcon,
  SocialIcon,
} from "../../components/ServiceIcons"; // Adjust the import path as necessary
import SectionHeader from "@/components/SectionHeader";

export default function ServicesPage() {
  // Web Design, Funnels & Platform Development services
  const webDesignServices = [
    {
      number: 1,
      title: "Coding complex websites",
      description:
        "Custom websites built with modern technologies for optimal performance",
      icon: <WebDesignIcon />,
    },
    {
      number: 2,
      title: "Funnels",
      description:
        "Strategic sales funnels designed to convert visitors into customers",
      icon: <FunnelIcon />,
    },
    {
      number: 3,
      title: "Platform development",
      description: "Custom platforms tailored to your specific business needs",
      icon: <PlatformIcon />,
    },
    {
      number: 4,
      title: "Community platforms",
      description:
        "Engaging spaces for your audience to connect and collaborate",
      icon: <CommunityIcon />,
    },
    {
      number: 5,
      title: "Strategy & kickstart",
      description:
        "Strategic planning and implementation to get your project off the ground",
      icon: <StrategyIcon />,
    },
    {
      number: 6,
      title: "Analytic tools/ SEO",
      description:
        "Data-driven insights and optimization for maximum visibility",
      icon: <AnalyticsIcon />,
    },
  ];

  // Graphic Design & Branding services
  const graphicDesignServices = [
    {
      number: 1,
      title: "Logo design",
      description:
        "Distinctive logos that capture your brand's essence and values",
      icon: <LogoIcon />,
    },
    {
      number: 2,
      title: "Free resource development",
      description:
        "Valuable content to attract and engage your target audience",
      icon: <ResourceIcon />,
    },
    {
      number: 3,
      title: "Branding",
      description:
        "Comprehensive brand identity development for consistent messaging",
      icon: <BrandingIcon />,
    },
  ];

  // Systems & automations services
  const systemsServices = [
    {
      number: 1,
      title: "Internal workflow",
      description:
        "Streamlined processes to improve efficiency and productivity",
      icon: <SystemIcon />,
    },
    {
      number: 2,
      title: "Custom automations",
      description:
        "Tailored automation solutions to save time and reduce errors",
      icon: <AutomationIcon />,
    },
    {
      number: 3,
      title: "Email flow set up",
      description:
        "Automated email sequences to nurture leads and drive conversions",
      icon: <EmailIcon />,
    },
    {
      number: 4,
      title: "AI agent",
      description:
        "Intelligent assistants to handle routine tasks and customer inquiries",
      icon: <AiIcon />,
    },
    {
      number: 5,
      title: "Analytic tools",
      description:
        "Data collection and analysis tools to inform business decisions",
      icon: <AnalyticToolIcon />,
    },
  ];

  // Lead generation & outbound sales services
  const leadGenServices = [
    {
      number: 1,
      title: "Coding complex outbound systems",
      description:
        "Advanced systems to identify and engage potential customers",
      icon: <WebDesignIcon />,
    },
    {
      number: 2,
      title: "Funnels",
      description:
        "Optimized conversion paths to turn prospects into customers",
      icon: <FunnelIcon />,
    },
    {
      number: 3,
      title: "Platform development",
      description: "Custom platforms to manage and scale your outbound efforts",
      icon: <PlatformIcon />,
    },
    {
      number: 4,
      title: "Community platforms",
      description:
        "Spaces for engagement and relationship building with prospects",
      icon: <CommunityIcon />,
    },
    {
      number: 5,
      title: "Ads ad platforms",
      description:
        "Strategic ad campaigns across relevant platforms for maximum reach",
      icon: <StrategyIcon />,
    },
    {
      number: 6,
      title: "Analytic tools/ SEO",
      description: "Performance tracking and optimization for better results",
      icon: <AnalyticsIcon />,
    },
    {
      number: 7,
      title: "Coding complex outbound systems",
      description: "Sophisticated systems for targeted outreach and follow-up",
      icon: <WebDesignIcon />,
    },
    {
      number: 8,
      title: "Funnels",
      description:
        "Multi-stage funnels designed to nurture leads through the sales process",
      icon: <FunnelIcon />,
    },
    {
      number: 9,
      title: "Platform development",
      description:
        "Scalable platforms to support your growing sales operations",
      icon: <PlatformIcon />,
    },
  ];

  // Short form content services
  const shortFormServices = [
    {
      number: 1,
      title: "Idea development & management",
      description:
        "Strategic content planning aligned with your business goals",
      icon: <ContentIcon />,
    },
    {
      number: 2,
      title: "Post production editing",
      description:
        "Professional editing to ensure high-quality, engaging content",
      icon: <VideoIcon />,
    },
    {
      number: 3,
      title: "2D animation",
      description: "Eye-catching animations to enhance your content's appeal",
      icon: <AnimationIcon />,
    },
  ];

  // Management services
  const managementServices = [
    {
      number: 1,
      title: "Project/reel management",
      description:
        "Comprehensive management of your content and marketing projects",
      icon: <ManagementIcon />,
    },
    {
      number: 2,
      title: "Social media management",
      description:
        "Strategic management of your social media presence and engagement",
      icon: <SocialIcon />,
    },
  ];

  return (
    <main className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
        {/* Header */}
        <SectionHeader
          heading="SERVICES"
          subheading="Creative branding & Marketing for Consultants"
        />

        {/* What we offer */}
        <div className="flex justify-center my-12">
          <div className="bg-neutral-800/80 rounded-full px-8 py-3 text-white/80 text-sm md:text-base">
            WHAT WE OFFER
          </div>
        </div>

        {/* Service Categories */}
        <ServiceCategory
          title="Web Design, Funnels & Platform Development"
          services={webDesignServices}
        />

        <ServiceCategory
          title="Graphic Design & Branding"
          services={graphicDesignServices}
        />

        <ServiceCategory
          title="Systems & automations"
          services={systemsServices}
        />

        <ServiceCategory
          title="Lead generation & outbound sales"
          services={leadGenServices}
        />

        <ServiceCategory
          title="Short form content"
          services={shortFormServices}
        />

        <ServiceCategory title="Management" services={managementServices} />
      </div>
    </main>
  );
}
