"use client";

import { useState, type ReactNode } from "react";
import ProcessSteps from "./ProcessSteps";
import ServiceCard from "./ServiceCard";

interface ServiceItem {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
}

interface ServiceCategoryProps {
  title: string;
  services: ServiceItem[];
}

export default function ServiceCategory({
  title,
  services,
}: ServiceCategoryProps) {
  const [showProcess, setShowProcess] = useState(false);

  return (
    <div className="mb-20">
      {/* Category title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-8">{title}</h2>

      {/* Service cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {services.map((service) => (
          <ServiceCard
            key={`${title}-${service.number}`}
            number={service.number}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>

      {/* Process toggle button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowProcess(!showProcess)}
          className="bg-neutral-800 hover:bg-neutral-700 text-white/80 rounded-full px-6 py-2 text-sm transition-colors"
        >
          {showProcess ? "Hide the process" : "See the process"}
        </button>
      </div>

      {/* Process steps (conditionally rendered) */}
      {showProcess && <ProcessSteps />}
    </div>
  );
}
