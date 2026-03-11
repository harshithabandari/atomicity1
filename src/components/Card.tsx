import React from "react";

interface CardProps {
  title: string;
  value?: React.ReactNode;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, value, children }) => {
  const iconMap: Record<string, string> = {
    "CPU Usage": "⚙️",
    "Memory Usage": "🧠",
    "Cost Savings": "💰",
  };

  return (
    <div className="relative bg-white dark:bg-zinc-800 shadow-lg rounded-xl p-6 flex flex-col items-center text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
      <span className="absolute -top-4 text-3xl">
        {iconMap[title] || "🔹"}
      </span>
      <h3 className="mt-6 text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-50">
        {title}
      </h3>
      {value && <div className="text-3xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">{value}</div>}
      {children}
    </div>
  );
};

export default Card;
