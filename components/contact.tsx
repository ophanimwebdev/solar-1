"use client";

import { motion } from "motion/react";
import Button from "./button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop')", // Solar panels/Renewable energy image
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6"
        >
          Join the renewable energy
          <br />
          movement with Sunergy.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-white/90 mb-10 max-w-2xl mx-auto"
        >
          Discover sustainable solutions that reduce costs and environmental
          impact. Take the first step today!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white p-2 rounded-sm max-w-2xl mx-auto flex flex-col md:flex-row gap-2"
        >
          <input
            type="tel"
            placeholder="Phone number"
            className="flex-1 px-6 py-4 text-gray-800 placeholder:text-gray-500 outline-none rounded-sm"
          />
          <Button className="bg-[#A6FF79] hover:bg-[#95e66d] text-black">
            Get a free consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
