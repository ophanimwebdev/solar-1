"use client";

import { motion } from "motion/react";
import Link from "next/link";

const stats = [
  { value: "70%", label: "Savings on Energy Bills" },
  { value: "100%", label: "Renewable Energy" },
  { value: "50K+", label: "Homes Powered" },
  { value: "30%", label: "Increase in Home Value" },
  { value: "$31M", label: "Worth of savings" },
  { value: "10M+", label: "Tons of CO₂ Avoided" },
];

export default function About() {
  return (
    <section className="relative py-20 px-6 md:px-12 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-30 pointer-events-none bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/map.png')",
        }}
      ></div>

      <div className="z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-36">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 text-sm font-medium mb-4 text-gray-500">
            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
            What we do
            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
          </div>

          <h2 className="text-3xl md:text-5xl font-medium leading-none tracking-tighter mb-6 text-black">
            We are dedicated to making clean power accessible, affordable, and
            effective.
          </h2>

          <Link
            href="#about-company"
            className="inline-block bg-accent px-8 py-4 text-dark-green font-medium hover:bg-opacity-90 transition-colors"
          >
            About Company
          </Link>
        </motion.div>

        {/* Right Image/Content - Using a placeholder wind farm image to match screenshot roughly */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] w-full"
        >
          <div className="absolute top-0 right-0 w-full h-full bg-gray-200">
            {/* Image Placeholder */}
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop')",
              }}
            ></div>

            {/* Green Box Overlay */}
            <div className="absolute -bottom-10 -left-10 bg-accent p-10 max-w-xs shadow-lg hidden md:block">
              <div className="mb-4">
                <svg
                  className="w-10 h-10 text-dark-green"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  ></path>
                </svg>
              </div>
              <p className="text-dark-green text-lg leading-snug mb-6">
                Sunergy was founded with a vision to drive sustainable energy
                solutions.
              </p>
              <Link
                href="#learn-more"
                className="flex items-center gap-2 text-dark-green font-medium hover:gap-3 transition-all"
              >
                Learn more <span className="text-xl">→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center md:text-left">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-4xl font-semibold text-dark-green mb-2">
              {stat.value}
            </h3>
            <p className="text-sm text-gray-600 leading-tight">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
