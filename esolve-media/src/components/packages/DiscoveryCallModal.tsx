"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface AdditionalService {
  id: string;
  title: string;
  description: string;
}

export default function DiscoveryCallModal({
  onClose,
}: {
  onClose: () => void;
}) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const additionalServices: AdditionalService[] = [
    {
      id: "internal-systems",
      title:
        "Would it help to get your internal systems structured and optimized?",
      description:
        "We offer custom internal workflow setup - including: Dashboards, content pipelines, client onboarding flows, custom automations, AI agents, collaboration tools and delivery systems with more. Tailored to your business, your needs.",
    },
    {
      id: "ai-outreach",
      title:
        "Are you interested in generating leads on autopilot with AI-powered outreach?",
      description:
        "We can set up outreach systems including ICP setup, lead sourcing & outreach + follow-ups (up to 5,000/month) – esp. using ChatGPT, Hyperwrite, or combinations of AI tools.",
    },
    {
      id: "reels",
      title:
        "Would you benefit from help running high-converting, targeted Reels ad campaigns?",
      description:
        "We'll manage your boosted reels for growth - including targeting, A/B testing, copywriting and optimization (ad spend not included).",
    },
    {
      id: "community",
      title: "Thinking about launching a community or membership platform?",
      description:
        "We can help you build a community in your preferred platform – including structure, engagement systems, onboarding flows, and positioning.",
    },
    {
      id: "landing-page",
      title: "Want a complete full-stack landing page?",
      description:
        "Including hosting & domain setup, 3-5 page design, contact form, social links, SEO setup, Google Analytics, Contact form integrated with your CRM, fully branded & custom styled to your brand, integrated with contact form, Instagram API or WhatsApp.",
    },
  ];

  const handleToggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleBookCall = () => {
    // Here you would handle the booking logic
    console.log("Selected services:", selectedServices);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-neutral-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold">Want to expand your setup?</h2>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          <p className="text-white/70 mb-8">
            Based on your selected package, would any of the following be
            valuable for your business right now?
          </p>

          {/* Additional services checkboxes */}
          <div className="space-y-6 mb-8">
            {additionalServices.map((service) => (
              <div key={service.id} className="flex gap-3">
                <div className="pt-1">
                  <input
                    type="checkbox"
                    id={service.id}
                    checked={selectedServices.includes(service.id)}
                    onChange={() => handleToggleService(service.id)}
                    className="h-5 w-5 rounded border-gray-600 text-teal-400 focus:ring-teal-400/50"
                  />
                </div>
                <div>
                  <label
                    htmlFor={service.id}
                    className="font-medium cursor-pointer"
                  >
                    {service.title}
                  </label>
                  <p className="text-sm text-white/70 mt-1">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button
              onClick={handleBookCall}
              className="py-3 px-8 bg-teal-400/80 hover:bg-teal-400 text-black font-medium rounded-full transition-colors"
            >
              Book a discovery call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
