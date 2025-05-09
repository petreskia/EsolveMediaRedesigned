"use client";

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

export default function Button({ text, onClick, className = "" }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-10 py-3 bg-white text-black rounded-4xl text-xl font-semibold hover:bg-gray-500 hover:text-white transition cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
}
