"use client";
import Image from "next/image";

export default function Banner() {
  const scrollToNextSection = () => {
    // Smooth scroll to the next section
    const nextSection = document.getElementById("about-us-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white px-4 sm:px-6 bg-black">
      {/* Shadow */}
      <div className="custom-shadow"></div>

      {/* Center logo with circular design */}
      <div className="relative mb-8 z-2">
        <Image src="/images/logo.svg" alt="logo" height={250} width={250} />
      </div>

      {/* Text content */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-4">
        ESOLVE MEDIA
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-center max-w-2xl">
        Expert teams. Tailored to your mission.
      </p>

      {/* Modern scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <button
          onClick={scrollToNextSection}
          className="group flex flex-col items-center space-y-3 transition-all focus:outline-none"
          aria-label="Scroll to About Us section"
        >
          <span className="text-sm md:text-base text-white/70 group-hover:text-white transition-colors tracking-wider uppercase font-light">
            Discover
          </span>
          <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4db5ff]/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-px h-5 bg-white/30 group-hover:bg-white/70 transition-colors"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-px bg-white/30 group-hover:bg-white/70 transition-colors origin-left rotate-45"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-px bg-white/30 group-hover:bg-white/70 transition-colors origin-right -rotate-45"></div>
          </div>
        </button>
      </div>
    </div>
  );
}
