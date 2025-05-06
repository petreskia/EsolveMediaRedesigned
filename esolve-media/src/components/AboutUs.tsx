"use client";

import Image from "next/image";
import Button from "./UI/Button";
import SectionHeader from "./UI/sectionHeader";

export default function AboutUs() {
  // Function to handle button click
  const handleButtonClick = () => {
    // Logic for button click
    window.location.href = "/contact";
  };
  return (
    <div className="p-16">
      {/* Header */}
      <SectionHeader
        heading="About Us"
        subheading={`Expert teams.\nTailored to your mission.`}
      />
      {/* Main Content */}
      <p className="mb-5 mt-30 text-3xl">
        At Esolve Media, we specialize in assembling high-performing teams of
        verified specialists across creative, tech, and marketing disciplines.
        Our core experts are already onboarded, vetted, and ready to deliver —
        ensuring professional project experiences for you as a client – faster,
        smarter and with better cost efficiency than building in-house.
      </p>
      <p className="text-3xl">
        We continually recruit and qualify new talent to stay ahead of market
        demands, keeping our delivery sharp and flexible without sacrificing
        quality or timelines.
      </p>
      {/* Contact */}
      <div className="w-full text-center mt-30 flex flex-col items-center justify-center">
        <p className="text-4xl font-bold leading-1">Got skills?</p>
        <span className="text-2xl text-teal-200/60 my-10">
           We’re always looking for the best.
        </span>
        <Button text="Let's talk" onClick={handleButtonClick} />
      </div>
      {/* Image */}
      <div className="relative w-full h-[800px] mt-20">
        <Image
          src="/images/Eskil.jpg"
          alt="Co-Founder"
          fill
          className="object-cover"
        />
      </div>
      <div className="mt-5">
        <h2 className="text-4xl">Eskil</h2>
        <h3 className="text-2xl text-white/50">Co-Founder</h3>
      </div>
    </div>
  );
}
