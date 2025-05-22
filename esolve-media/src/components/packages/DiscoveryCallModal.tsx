"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { additionalServices } from "@/data/pop-up-data";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function DiscoveryCallModal({
  onClose,
}: {
  onClose: () => void;
}) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleToggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleBookCall = async () => {
    if (!email || !name) {
      alert("Please fill in your name and email.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/discovery-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, selectedServices }),
      });

      if (!res.ok) {
        throw new Error("Failed to save data.");
      }

      onClose();

      setTimeout(() => {
        if (typeof window !== "undefined" && window.Calendly) {
          window.Calendly.initPopupWidget({
            url: "https://calendly.com/eskil-esolvemedia/30min",
          });
        } else {
          console.error("Calendly is not loaded");
        }
      }, 300);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div
        role="dialog"
        aria-modal="true"
        className="bg-neutral-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold">Want to expand your setup?</h2>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Name and Email */}
          <div className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded bg-neutral-800 text-white placeholder-white/60"
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded bg-neutral-800 text-white placeholder-white/60"
            />
          </div>

          <p className="text-white/70 mb-8">
            Based on your selected package, would any of the following be
            valuable for your business right now?
          </p>

          {/* Additional services */}
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

          {/* CTA */}
          <div className="flex justify-center">
            <button
              onClick={handleBookCall}
              className="py-3 px-8 bg-teal-400/80 hover:bg-teal-400 text-black font-medium rounded-full transition-colors disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Booking..." : "Book a discovery call"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
