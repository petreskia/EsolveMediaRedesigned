interface SectionHeaderProps {
  heading: string;
  subheading: string;
}

export default function SectionHeader({
  heading,
  subheading,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:justify-between mt-20 mb-10 md:mb-25">
      <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold uppercase whitespace-pre-line">
        {heading}
      </h2>
      <p className="text-lg md:text-xl lg:text-2xl whitespace-pre-line text-white/70 max-w-xs md:max-w-sm lg:max-w-md md:text-end leading-6">
        {subheading}
      </p>
    </div>
  );
}
