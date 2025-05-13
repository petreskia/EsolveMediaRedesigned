import { User, ArrowRight, ArrowDown } from "lucide-react";
import SectionContainer from "../layouts/SectionContainer";

export default function BrandDevelopersSection() {
  return (
    <SectionContainer>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-2">
            You build the brand.
            <br />
            We build the backend.
          </h3>
        </div>

        <div className="space-y-8 mb-16">
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            You are the visionary — crafting content, guiding clients, and
            building the frame for growth. But when it comes to tech setup,
            systems, funnels and follow-ups... it is not why you started.
          </p>

          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            We partner with brand developers like you to{" "}
            <span className="text-teal-400 font-medium">
              handle the entire backend:
            </span>{" "}
            funnels, automation, CRMs, booking flows, content systems & more —
            all built around your clients needs.
          </p>
        </div>

        <div className="text-center mb-16">
          <p className="text-lg md:text-xl text-white/90 mb-2">
            You focus on what you do best, we will handle what needs to be done.
          </p>
          <p className="text-lg md:text-xl text-white/90 italic">
            Remember what you are here to do:
          </p>
        </div>

        <div className="text-center mb-20">
          <h4 className="text-xl md:text-2xl lg:text-3xl text-teal-400/90 font-medium">
            Create impact for your clients.
          </h4>
        </div>

        {/* Process Flow Diagram */}
        <div className="flex flex-col items-center">
          {/* First Row */}
          <div className="flex justify-center gap-16 md:gap-24 mb-4">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-neutral-800/80 flex items-center justify-center mb-2">
                <User className="w-8 h-8 text-white/70" />
              </div>
              <p className="text-sm text-center">Your client</p>
            </div>

            <div className="flex items-center">
              <ArrowRight className="w-8 h-8 text-white/30" />
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-neutral-800/80 flex items-center justify-center mb-2">
                <User className="w-8 h-8 text-white/70" />
              </div>
              <p className="text-sm text-center">
                Brand
                <br />
                developer (you)
              </p>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="my-4">
            <ArrowDown className="w-8 h-8 text-white/30" />
          </div>

          {/* Center Hub */}
          <div className="flex flex-col items-center mb-4">
            <div className="w-24 h-24 rounded-full border-2 border-teal-400/30 flex items-center justify-center relative mb-2">
              <div className="w-16 h-16 rounded-full border-2 border-teal-400/50 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-teal-400/20"></div>
              </div>
              {/* Decorative circles around the main hub */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-teal-400/40"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-teal-400/40"></div>
              <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-teal-400/40"></div>
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-teal-400/40"></div>
            </div>
            <div className="text-center text-sm max-w-[200px]">
              <p className="text-white/90">We gather information</p>
              <p className="text-white/90">We oversee the entire process</p>
              <p className="text-white/90">We deliver one seamless solution</p>
            </div>
          </div>

          {/* Arrows to Experts */}
          <div className="flex justify-center gap-8 md:gap-16 mb-4">
            <ArrowDown className="w-8 h-8 text-white/30 -rotate-45" />
            <ArrowDown className="w-8 h-8 text-white/30" />
            <ArrowDown className="w-8 h-8 text-white/30 rotate-45" />
          </div>

          {/* Experts Row */}
          <div className="flex justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-neutral-800/80 flex items-center justify-center mb-2">
                <User className="w-8 h-8 text-white/70" />
              </div>
              <p className="text-sm text-center">Expert 1</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-neutral-800/80 flex items-center justify-center mb-2">
                <User className="w-8 h-8 text-white/70" />
              </div>
              <p className="text-sm text-center">Expert 2</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-neutral-800/80 flex items-center justify-center mb-2">
                <User className="w-8 h-8 text-white/70" />
              </div>
              <p className="text-sm text-center">Expert 3</p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
