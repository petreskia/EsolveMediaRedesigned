import type { ReactNode } from "react";

interface ServiceCardProps {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
}

export default function ServiceCard({
  number,
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <div className="bg-neutral-900/90 rounded-lg p-5 relative">
      {/* Number badge */}
      <div className="absolute top-3 left-3 w-6 h-6 rounded-full bg-teal-400/20 flex items-center justify-center text-xs text-teal-400">
        {number}
      </div>

      {/* Content */}
      <div className="pt-8">
        <div className="mb-3 h-24 flex items-center justify-center">{icon}</div>
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-sm text-white/70">{description}</p>
      </div>
    </div>
  );
}
