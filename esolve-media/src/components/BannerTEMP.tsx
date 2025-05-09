export default function Banner() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 sm:px-6">
      {/* Center logo with circular design */}
      <div className="relative mb-8">
        <div className="w-48 h-48 md:w-64 md:h-64 relative">
          {/* Outer circle */}
          <div className="absolute inset-0 border-2 border-white rounded-full flex items-center justify-center">
            {/* Inner circles and gaps */}
            <div className="w-3/4 h-3/4 border-2 border-white rounded-full flex items-center justify-center">
              {/* Center blue dot with inner circle */}
              <div className="w-1/2 h-1/2 rounded-full bg-transparent border-2 border-white flex items-center justify-center">
                <div className="w-1/2 h-1/2 rounded-full bg-blue-500"></div>
              </div>
            </div>
          </div>

          {/* Gaps in the circles */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-8 bg-black"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-8 bg-black"></div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-4 bg-black"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-4 bg-black"></div>
        </div>
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
