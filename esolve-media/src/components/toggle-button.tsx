"use client";

import { useState } from "react";

interface ToggleButtonProps {
  options: string[];
  onToggle: (selectedOption: string) => void;
}

export default function ToggleButton({ options, onToggle }: ToggleButtonProps) {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleToggle = (option: string) => {
    setSelectedOption(option);
    onToggle(option);
  };

  return (
    <div className="flex justify-center mb-10">
      <div className="bg-neutral-800/80 rounded-full overflow-hidden flex">
        {options.map((option) => (
          <button
            key={option}
            className={`px-6 py-3 text-sm md:text-base transition-colors ${
              selectedOption === option
                ? "bg-neutral-700 text-white"
                : "text-white/70 hover:text-white"
            }`}
            onClick={() => handleToggle(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
