"use client";

import { AnimatePresence, motion } from "motion/react";
import Button from "./button";
import { useState } from "react";

const benefits = [
  {
    id: "01",
    title: "Lower energy costs",
    content:
      "Our systems are designed to maximize efficiency, significantly reducing your monthly energy bills from day one. By generating your own power, you protect yourself from rising utility rates.",
    image:
      "/benefit1.png",
  },
  {
    id: "02",
    title: "Environmental stewardship",
    content:
      "Switching to solar reduces your carbon footprint and reliance on fossil fuels. Join the movement towards a cleaner, more sustainable future for our planet.",
    image:
      "/benefit2.png",
  },
  {
    id: "03",
    title: "Boosted property value",
    content:
      "Solar installations increase your property's value and market appeal. Homes with solar systems often sell faster and at a premium compared to those without.",
    image:
      "/benefit3.png",
  },
  {
    id: "04",
    title: "Energy independence",
    content:
      "Reduce your reliance on the grid and protect your home from power outages with our advanced battery storage solutions. Take control of your energy future.",
    image:
      "/benefit4.png",
  },
];

export default function Benefits() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-6 py-20 md:px-12">
      <div className="mb-4 flex items-center gap-2 text-sm font-medium text-gray-500">
        <span className="h-1.5 w-1.5 rounded-full bg-black"></span>
        Our benefits
        <span className="h-1.5 w-1.5 rounded-full bg-black"></span>
      </div>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        {/* Left: Accordion */}
        <div>
          <div className="mb-12 flex items-center gap-3">
            <h2 className="text-3xl font-medium tracking-tighter text-dark-green md:text-5xl">
              Benefits of
            </h2>
            <div className="flex items-center gap-2 text-3xl font-medium tracking-tighter text-dark-green md:text-5xl">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-accent"
                >
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </span>
              Sunergy
            </div>
          </div>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="border-t border-gray-200 py-6">
                <button
                  onClick={() => setOpenIndex(index)}
                  className="group flex w-full items-center justify-between text-left"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-xl text-gray-400 md:text-2xl">
                      {benefit.id}
                    </span>
                    <span
                      className={`text-xl font-medium tracking-tighter transition-colors md:text-2xl ${openIndex === index ? "text-dark-green" : "text-gray-600 group-hover:text-dark-green"}`}
                    >
                      {benefit.title}
                    </span>
                  </div>
                  <svg
                    className={`h-6 w-6 text-dark-green transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="max-w-lg text-gray-600 leading-relaxed md:ml-14 ml-12 mt-4 text-sm">
                    {benefit.content}
                  </p>
                </motion.div>
              </div>
            ))}
            <div className="border-t border-gray-200"></div>
          </div>

          <div className="mt-12">
            <p className="mb-8 max-w-md text-sm leading-relaxed text-gray-600">
              Our commitment to sustainability and cutting-edge technology
              ensures you'll enjoy energy that's not only reliable but also
              beneficial in multiple ways.
            </p>
            <Button href="#our-approach">Our approach</Button>
          </div>
        </div>

        {/* Right: Dynamic Image */}
        <div className="relative h-[500px] w-full overflow-hidden rounded-sm bg-gray-100 lg:h-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={openIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url('${benefits[openIndex].image}')`,
              }}
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
