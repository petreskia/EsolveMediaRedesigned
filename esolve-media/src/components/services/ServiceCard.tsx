// ServiceCard.tsx
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
}

export default function ServiceCard({
  title,
  description,
  iconName,
}: ServiceCardProps) {
  return (
    <div
      className="bg-custom-gradient-card border-b-gray-300 border rounded-4xl
 p-6 relative flex flex-col h-full"
    >
      {/* Top-left small icon */}
      <div className="absolute top-3 left-3">
        <div className="w-14 h-14 rounded-full bg-teal-300/40 flex items-center justify-center">
          <Image
            src={`/icons/small-icons/${iconName}.svg`}
            alt={`${title} small icon`}
            width={35}
            height={35}
            className="object-contain"
          />
        </div>
      </div>

      {/* Center large icon */}
      <div className="flex-grow flex items-center justify-center py-10">
        <Image
          src={`/icons/bg-icons/${iconName}.svg`}
          alt={`${title} large icon`}
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Bottom text content */}
      <div className="mt-auto">
        <h3 className="text-2xl font-medium text-white mb-2">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  );
}
