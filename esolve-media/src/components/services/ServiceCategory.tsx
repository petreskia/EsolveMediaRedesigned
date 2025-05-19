// components/services/ServiceCategory.tsx
"use client";

import ServiceCard from "./ServiceCard";
import ProcessSteps from "@/components/layouts/ProcessSteps";
import Button from "@/components/ui/Button";
import type { Service } from "@/types/service-types";

interface ServiceCategoryProps {
  title: string;
  services: Service[];
  showProcessToggle?: boolean;
  showPortfolioButton?: boolean;
}

export default function ServiceCategory({
  title,
  services,
  showProcessToggle = false,
  showPortfolioButton = false,
}: ServiceCategoryProps) {
  const handleButtonClick = () => {
    window.location.href = "/process";
  };

  return (
    <section className="mb-20">
      <h2 className="text-2xl md:text-4xl font-bold mb-20 text-center xl:w-1/2 mx-auto">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>

      {showProcessToggle && (
        <>
          <ProcessSteps />
          <Button
            text={"See the process"}
            onClick={handleButtonClick}
            className="flex items-center justify-center mx-auto mt-8 py-3 px-20 rounded-full services-btn"
          />
        </>
      )}
      {showPortfolioButton && (
        <Button
          text={"Request portfolio access"}
          onClick={() => {
            window.location.href = "/portfolio-request"; // suggested route
          }}
          className="flex items-center justify-center mx-auto mt-8 py-3 px-6 services-btn font-extralight rounded-full"
        />
      )}
    </section>
  );
}
