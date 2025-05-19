import { User } from "lucide-react";
import Image from "next/image";

export default function ProcessFlowDiagram() {
  return (
    <div className="flex flex-col items-center w-full py-12 px-4">
      {/* First Row - Client and Brand Developer */}
      <div className="flex justify-start items-center lg:ms-45 gap-8 md:gap-10 lg:gap-12 mb-8 w-full">
        {/* Your client */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-zinc-800/80 border border-zinc-700 flex items-center justify-center mb-3">
            <User className="w-8 h-8 text-zinc-400" />
          </div>
          <p className="text-sm text-white/80">Your client</p>
        </div>

        {/* Arrow */}
        <div className="flex-grow max-w-32 h-px bg-zinc-700 relative">
          <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 border-t border-r border-zinc-700"></div>
        </div>

        {/* Brand developer */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-zinc-800/80 border border-zinc-700 flex items-center justify-center mb-3">
            <User className="w-8 h-8 text-zinc-400" />
          </div>
          <p className="text-sm text-white/80 text-center">
            Brand
            <br />
            developer (you)
          </p>
        </div>
      </div>

      {/* Vertical Arrow */}
      <div className="h-16 w-px bg-zinc-700 relative mb-8">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-135 w-2 h-2 border-t border-r border-zinc-700"></div>
      </div>

      {/* Center Hub with Text */}
      <div className="flex mb-12 items-center">
        {/* Left Text */}
        <div className="text-right mr-8 hidden md:block">
          <p className="text-sm text-white/80 mb-1">We gather information</p>
          <p className="text-sm text-white/80">We oversee the entire process</p>
        </div>

        {/* Center Hub */}
        <div className="relative">
          <Image src="/images/logo.svg" alt="logo" height={100} width={100} />
        </div>

        {/* Right Text */}
        <div className="text-left ml-8 hidden md:block">
          <p className="text-sm text-white/80">
            We deliver one seamless solution
          </p>
        </div>
      </div>

      {/* Mobile Text (visible only on small screens) */}
      <div className="text-center mb-8 md:hidden">
        <p className="text-sm text-white/80 mb-1">We gather information</p>
        <p className="text-sm text-white/80 mb-1">
          We oversee the entire process
        </p>
        <p className="text-sm text-white/80">
          We deliver one seamless solution
        </p>
      </div>

      {/* Arrows to Experts */}
      <div className="flex justify-between w-30 mb-8">
        {/* Left Arrow */}
        <div className="h-16 w-px bg-zinc-700 transform rotate-45 origin-top relative">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-135 w-2 h-2 border-t border-r border-zinc-700"></div>
        </div>
        {/* Middle Arrow */}
        <div className="h-16 w-px bg-zinc-700 relative">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-135 w-2 h-2 border-t border-r border-zinc-700"></div>
        </div>

        {/* Right Arrow */}

        <div className="h-16 w-px bg-zinc-700 transform -rotate-45 origin-top relative">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-135 w-2 h-2 border-t border-r border-zinc-700"></div>
        </div>
      </div>

      {/* Experts Row */}
      <div className="flex justify-between w-full max-w-md">
        {/* Expert 1 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-zinc-800/80 border border-zinc-700 flex items-center justify-center mb-3">
            <User className="w-8 h-8 text-zinc-400" />
          </div>
          <p className="text-sm text-white/80">Expert 1</p>
        </div>

        {/* Expert 2 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-zinc-800/80 border border-zinc-700 flex items-center justify-center mb-3">
            <User className="w-8 h-8 text-zinc-400" />
          </div>
          <p className="text-sm text-white/80">Expert 2</p>
        </div>

        {/* Expert 3 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-zinc-800/80 border border-zinc-700 flex items-center justify-center mb-3">
            <User className="w-8 h-8 text-zinc-400" />
          </div>
          <p className="text-sm text-white/80">Expert 3</p>
        </div>
      </div>
    </div>
  );
}
