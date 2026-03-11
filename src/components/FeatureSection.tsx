"use client";

import React from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import Card from "./Card";
import AnimatedNumber from "./AnimatedNumber";

interface Metrics {
  cpu: number;
  memory: number;
  savings: number;
}

async function fetchMetrics(): Promise<Metrics> {
  const res = await fetch("/api/metrics");
  if (!res.ok) {
    throw new Error("Failed to load metrics");
  }
  return res.json();
}

const FeatureSection: React.FC = () => {
  const { data, isLoading } = useQuery<Metrics>({
    queryKey: ["metrics"],
    queryFn: fetchMetrics,
    refetchOnWindowFocus: false,
  });

  const metrics = data || { cpu: 0, memory: 0, savings: 0 };

  const features = [
    { title: "CPU Usage", value: metrics.cpu },
    { title: "Memory Usage", value: metrics.memory },
    { title: "Cost Savings", value: metrics.savings },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* subtle decorative circles in background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-indigo-100 opacity-20 dark:bg-indigo-900" />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-yellow-100 opacity-20 dark:bg-yellow-900" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center px-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-zinc-900 dark:text-zinc-50">
          Cloud Cost Optimization
        </h2>
        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-16">
          Save 30% on infrastructure – numbers update in real time as you scroll.
        </p>
      </div>

      <motion.div
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {features.map((f) => (
          <motion.div
            key={f.title}
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          >
            <Card
              title={f.title}
              value={isLoading ? "–" : <AnimatedNumber value={f.value} />}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeatureSection;
