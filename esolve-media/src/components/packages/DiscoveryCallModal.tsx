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

  const handleToggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleBookCall = () => {
    console.log("Selected services:", selectedServices);
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
