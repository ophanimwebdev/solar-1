"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import Button from "./button";

const services = [
  {
    title: "Custom Solar Solutions",
    description:
      "Harness the power of the sun with our solar installations, designed to maximize efficiency and reduce costs for homes and businesses.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        ></path>
      </svg>
    ),
    bgColor: "bg-dark-green",
  },
  {
    title: "Smart Solar Panel Installation",
    description:
      "Our end-to-end solar panel installation services ensure seamless integration, optimal performance, and reliable renewable energy for every rooftop.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        ></path>
      </svg>
    ),
    bgColor: "bg-dark-green",
  },
  {
    title: "Advanced Energy Storage Systems",
    description:
      "Store excess solar energy with high-performance battery solutions that provide uninterrupted power and smart energy management during peak demand.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        ></path>
      </svg>
    ),
    bgColor: "bg-dark-green",
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // transforms for the 3 service cards
  const y1 = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const y2 = useTransform(scrollYProgress, [0.2, 0.45], [100, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);

  const y3 = useTransform(scrollYProgress, [0.45, 0.7], [100, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.7], [0, 1]);

  // transform for the image card
  const y4 = useTransform(scrollYProgress, [0.7, 0.9], [100, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);

  // Array of transform objects to map easily
  const transforms = [
    { y: y1, opacity: opacity1 },
    { y: y2, opacity: opacity2 },
    { y: y3, opacity: opacity3 },
  ];

  return (
    <section ref={containerRef} id="services" className="relative h-[250vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full flex-col justify-center px-6 md:px-12 py-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 text-sm font-medium mb-4 text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                Our Services
                <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
              </div>
              <h2 className="text-3xl md:text-5xl font-medium text-dark-green max-w-lg tracking-tighter">
                Our solutions, your sustainable future.
              </h2>
            </div>
            <Button href="#all-services">View all</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                style={{
                  y: transforms[index].y,
                  opacity: transforms[index].opacity,
                }}
                className="group relative bg-[#1D3D3E] py-8 px-6 flex flex-col justify-between text-white overflow-hidden h-[400px]"
              >
                <div className="">
                  <div className="w-12 h-12 bg-accent text-dark-green flex items-center justify-center rounded-sm mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-medium mb-4 leading-tight text-accent">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>

                <Link
                  href="#"
                  className="flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all text-white mt-5 hover:text-accent"
                >
                  Learn more <span className="text-lg">→</span>
                </Link>
              </motion.div>
            ))}

            {/* Image Card */}
            <motion.div
              style={{ y: y4, opacity: opacity4 }}
              className="relative w-full bg-cover bg-center h-[400px]"
              initial={{
                backgroundImage: "url('/panels.png')",
              }}
              animate={{
                backgroundImage: "url('/panels.png')",
              }}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute top-8 left-8 flex flex-col gap-3 items-start">
                <span className="bg-[#1D3D3E] backdrop-blur-md text-white px-3 py-1 text-lg font-medium mt-10">
                  Solar Power
                </span>
                <span className="bg-[#1D3D3E] mt-10 ml-20 backdrop-blur-md text-white px-3 py-1 text-lg font-medium">
                  Energy Storage
                </span>
                <span className="bg-[#1D3D3E] backdrop-blur-md text-white px-3 py-1 text-lg font-medium mt-10 ml-5">
                  Green Solutions
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
