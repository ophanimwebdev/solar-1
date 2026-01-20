"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Button from "./button";

export const achievements = [
  {
    title: "1,500+ Solar Installations",
    description:
      "Successfully delivered high-efficiency solar panel systems for residential, commercial, and industrial clients.",
  },
  {
    title: "25+ MW Clean Energy Generated",
    description:
      "Generated sustainable solar power that significantly reduced carbon emissions and dependence on fossil fuels.",
  },
  {
    title: "98% Customer Satisfaction",
    description:
      "Maintained exceptional client satisfaction through reliable service, transparent processes, and long-term support.",
  },
  {
    title: "10+ Years of Industry Experience",
    description:
      "Built a strong reputation with over a decade of expertise in renewable energy solutions and solar innovation.",
  },
];

export default function Achievements() {
  return (
    <section className="bg-dark-green py-24 px-6 md:px-12 relative overflow-hidden text-white">
      {/* Background Logo Pattern */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <svg
          className="w-[500px] h-[500px]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-sm font-medium mb-6 text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            Our achievements
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter">
            We're proud to advance renewable innovation, making a real impact on
            communities and the environment.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-40 gap-y-16">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-[#26393F] border-b border-b-accent p-6 z-10 w-96 ${index % 2 !== 0 ? "md:justify-self-end text-end text-" : ""}`}
            >
              <h3 className="text-xl font-medium text-accent mb-4">
                {item.title}
              </h3>
              <p className="text-gray-300 tracking-tight text-md">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button href="#get-started">Let's get started</Button>
        </div>
      </div>
    </section>
  );
}
