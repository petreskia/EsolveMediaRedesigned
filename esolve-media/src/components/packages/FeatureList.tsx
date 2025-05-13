import { Check } from "lucide-react";

interface FeatureListProps {
  features: string[];
  showMore?: boolean;
}

export default function FeatureList({
  features,
  showMore = false,
}: FeatureListProps) {
  const visibleFeatures = showMore ? features : features.slice(0, 5);
  const hiddenCount = features.length - visibleFeatures.length;

  return (
    <ul className="space-y-3 mt-6">
      {visibleFeatures.map((feature, index) => (
        <li key={index} className="flex items-start gap-2">
          <Check className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
          <span className="text-sm md:text-base">{feature}</span>
        </li>
      ))}

      {!showMore && hiddenCount > 0 && (
        <li className="text-sm text-white/70 pl-7">
          and {hiddenCount} more...
        </li>
      )}
    </ul>
  );
}
