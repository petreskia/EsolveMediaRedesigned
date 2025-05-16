"use client";

import Image from "next/image";
import Button from "../ui/Button";
import SectionHeader from "../layouts/SectionHeader";
import SectionContainer from "../layouts/SectionContainer";

export default function AboutUs() {
  // Function to handle button click
  const handleButtonClick = () => {
    window.location.href = "/contact";
  };

  return (
    <div id="about-us-section">
      <SectionContainer>
        {/* Header */}
        <SectionHeader
          heading={`The pursuit of\nexpert impact`}
          subheading={`Expert teams.\nTailored to your mission.`}
        />
        {/* Main Content */}
        <div className="space-y-6 md:space-y-5 mt-12">
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
            At Esolve Media, we specialize in assembling{" "}
            <span className="font-medium">
              high-performing teams of verified specialists across creative,
              tech, and marketing disciplines
            </span>
            . Our core experts are already onboarded, vetted, and ready to
            deliver — ensuring professional project experiences for you as a
            client –{" "}
            <span className="font-medium">
              faster, smarter and with better cost efficiency than building
              in-house
            </span>
            .
          </p>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
            We continually recruit and qualify new talent to stay ahead of
            market demands, keeping our delivery sharp and flexible without
            sacrificing quality or timelines.
          </p>
        </div>
      </SectionContainer>
      {/* Contact */}
      <div className="w-full text-center mt-10 flex flex-col items-center justify-center">
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Got skills?
        </p>
        <p className="text-lg md:text-xl lg:text-2xl custom-green mt-3 mb-8">
          We&apos;re always looking for the best.
        </p>
        <Button text="Let's talk" onClick={handleButtonClick} />
      </div>

      {/* Image */}
      <div className="mt-16 md:mt-20 lg:mt-24">
        <div className="relative w-full aspect-[16/9] xl:h-[900px]">
          <Image
            src="/images/Eskil.jpg"
            alt="Co-Founder"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="p-4 md:p-6 lg:p-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white">
            Eskil
          </h2>
          <h3 className="text-lg md:text-xl lg:text-2xl text-white/50">
            Co-Founder
          </h3>
        </div>
      </div>
    </div>
  );
}
