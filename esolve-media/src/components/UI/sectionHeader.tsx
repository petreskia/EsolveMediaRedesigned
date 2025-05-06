interface SectionHeaderProps {
  heading: string;
  subheading: string;
}

export default function sectionHeader({
  heading,
  subheading,
}: SectionHeaderProps) {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-7xl font-bold uppercase">{heading}</h2>
      <p className="text-3xl whitespace-pre-line text-white/70">{subheading}</p>
    </div>
  );
}
