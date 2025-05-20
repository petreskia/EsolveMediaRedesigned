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
    description: "We offer custom internal workflow setup...",
  },
  {
    id: "ai-outreach",
    title:
      "Are you interested in generating leads on autopilot with AI-powered outreach?",
    description: "We can set up outreach systems including ICP setup...",
  },
  {
    id: "reels",
    title:
      "Would you benefit from help running high-converting, targeted Reels ad campaigns?",
    description: "We'll manage your boosted reels for growth...",
  },
  {
    id: "community",
    title: "Thinking about launching a community or membership platform?",
    description:
      "We can help you build a community in your preferred platform...",
  },
  {
    id: "landing-page",
    title: "Want a complete full-stack landing page?",
    description: "Including hosting & domain setup, 3-5 page design...",
  },
];
