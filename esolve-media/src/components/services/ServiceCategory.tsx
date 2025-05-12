// components/services/ServiceCategory.tsx
"use client";

import { useState } from "react";
import ServiceCard from "./ServiceCard";
import type { Service } from "@/types/service-types";
import ProcessSteps from "@/components/layouts/ProcessSteps";

interface ServiceCategoryProps {
  title: string;
  services: Service[];
  showProcessToggle?: boolean;
}

export default function ServiceCategory({
  title,
  services,
  showProcessToggle = false,
}: ServiceCategoryProps) {
  const [showProcess, setShowProcess] = useState(false);

  return (
    <section className="mb-20">
      <h2 className="text-2xl md:text-4xl font-bold mb-20 text-center xl:w-1/2 mx-auto">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>

      {showProcessToggle && (
        <>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowProcess(!showProcess)}
              className="bg-neutral-800 hover:bg-neutral-700 text-white/80 rounded-full px-6 py-2 text-sm transition-colors"
            >
              {showProcess ? "Hide the process" : "See the process"}
            </button>
          </div>

          {showProcess && <ProcessSteps />}
        </>
      )}
    </section>
  );
}
