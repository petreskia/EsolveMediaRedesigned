export default function ProcessSteps() {
  return (
    <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
      {/* Step 1 */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full flex items-center justify-center small-icon-green text-4xl mb-3 custom-green">
          1
        </div>
        <p className="text-sm text-center px-8">Your CRM</p>
      </div>

      {/* Connector line */}
      <div className="hidden md:block w-20 h-0.5 bg-teal-400/20"></div>

      {/* Step 2 */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full flex items-center justify-center small-icon-green text-4xl mb-3 custom-green">
          2
        </div>
        <p className="text-sm text-center whitespace-nowrap">
          Your Project
          <br />
          Management Tools
        </p>
      </div>

      {/* Connector line */}
      <div className="hidden md:block w-20 h-0.5 bg-teal-400/20"></div>

      {/* Step 3 */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full flex items-center justify-center small-icon-green text-4xl mb-3 custom-green">
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
