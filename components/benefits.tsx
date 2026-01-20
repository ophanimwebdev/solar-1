"use client";

import { motion } from "motion/react";
import { useState } from "react";
import Link from "next/link";

const benefits = [
  {
    id: "01",
    title: "Lower energy costs",
    content:
      "Our systems are designed to maximize efficiency, significantly reducing your monthly energy bills from day one. By generating your own power, you protect yourself from rising utility rates.",
  },
  {
    id: "02",
    title: "Environmental stewardship",
    content:
      "Switching to solar reduces your carbon footprint and reliance on fossil fuels. Join the movement towards a cleaner, more sustainable future for our planet.",
  },
  {
    id: "03",
    title: "Boosted property value",
    content:
      "Solar installations increase your property's value and market appeal. Homes with solar systems often sell faster and at a premium compared to those without.",
  },
];

export default function Benefits() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="flex items-center gap-2 text-sm font-medium mb-4 text-gray-500">
        <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
        Our benefits
        <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Accordion */}
        <div>
          <div className="flex items-center gap-3 mb-12">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-dark-green">
              Benefits of
            </h2>
            <div className="flex items-center gap-2 text-3xl md:text-5xl font-medium tracking-tighter text-dark-green">
              <span className="w-8 h-8 rounded-full border border-accent flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-accent"
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
                  className="w-full flex items-center justify-between group text-left"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-gray-400 text-xl md:text-2xl">
                      {benefit.id}
                    </span>
                    <span
                      className={`text-xl md:text-2xl font-medium tracking-tighter ${openIndex === index ? "text-dark-green" : "text-gray-600 group-hover:text-dark-green"} transition-colors`}
                    >
                      {benefit.title}
                    </span>
                  </div>
                  <svg
                    className={`w-6 h-6 text-dark-green transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
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
                  <p className="mt-4 text-gray-600 leading-relaxed max-w-lg ml-12 md:ml-14">
                    {benefit.content}
                  </p>
                </motion.div>
              </div>
            ))}
            <div className="border-t border-gray-200"></div>
          </div>

          <div className="mt-12">
            <p className="text-gray-600 max-w-md mb-8 text-sm leading-relaxed">
              Our commitment to sustainability and cutting-edge technology
              ensures you'll enjoy energy that's not only reliable but also
              beneficial in multiple ways.
            </p>
            <Link
              href="#our-approach"
              className="inline-block bg-accent px-8 py-4 text-dark-green font-medium hover:bg-opacity-90 transition-colors"
            >
              Our approach
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-[500px] lg:h-auto w-full bg-gray-100 rounded-sm overflow-hidden"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop')",
            }}
          ></div>
        </motion.div>
      </div>
    </section>
  );
}
