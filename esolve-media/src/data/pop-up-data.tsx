export type AdditionalService = {
  id: string;
  title: string;
  description: string;
};

export const additionalServices: AdditionalService[] = [
  {
    id: "internal-systems",
    title:
      "Would it help to get your internal systems structured and optimized?",
    description:
      "We offer custom internal workflow setup – including  Dashboards, content pipelines, client onboarding flows, custom automations, AI agents, collaboration tools and delivery systems with more. Tailored to your business, your needs",
  },
  {
    id: "ai-outreach",
    title:
      "Are you interested in generating leads on autopilot with AI-powered outreach?",
    description:
      "We create full outreach systems including ICP  setup, lead sourcing & outreach + follow-ups (up to 10 000/month!) – via email, LinkedIn or Instagram - or a combination of all three",
  },
  {
    id: "reels-ad-campaigns",
    title:
      "Would you benefit from help running high-converting, targeted Reels ad campaigns?",
    description:
      "We’ll manage your boosted reels for growth – including targeting, A/B testing, copywriting and optimization (ad spend not included)",
  },
  {
    id: "community-membership-platform",
    title: "Thinking about launching a community or membership platform?",
    description:
      "We can help you build a community to your preferred platform - including structure, engagement strategy and offer positioning",
  },
  {
    id: "landing-page",
    title: "Want a complete full-stack landing page?",
    description:
      "Mobile-friendly full-page design with custom-branded sections (Hero to Contact) and integrated contact options (form, Instagram DM, or WhatsApp)",
  },
];
