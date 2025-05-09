export default function ProcessSteps() {
  return (
    <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
      {/* Step 1 */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-teal-400/20 flex items-center justify-center text-teal-400 text-xl font-medium mb-3">
          1
        </div>
        <p className="text-sm text-center">Your Click</p>
      </div>

      {/* Connector line */}
      <div className="hidden md:block w-16 h-0.5 bg-teal-400/20"></div>

      {/* Step 2 */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-teal-400/20 flex items-center justify-center text-teal-400 text-xl font-medium mb-3">
          2
        </div>
        <p className="text-sm text-center whitespace-nowrap">
          Your Project
          <br />
          Management Tools
        </p>
      </div>

      {/* Connector line */}
      <div className="hidden md:block w-16 h-0.5 bg-teal-400/20"></div>

      {/* Step 3 */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-teal-400/20 flex items-center justify-center text-teal-400 text-xl font-medium mb-3">
          3
        </div>
        <p className="text-sm text-center whitespace-nowrap">
          Your Communication
          <br />
          Platform
        </p>
      </div>
    </div>
  );
}
