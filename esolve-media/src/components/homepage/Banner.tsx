import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white px-4 sm:px-6 bg-black">
      {/* Shaddow */}
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
    </div>
  );
}
