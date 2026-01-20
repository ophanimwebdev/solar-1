"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <section
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        {/* Overlay */}
        <section className="absolute inset-0 bg-black/40" />
      </section>

      {/* Content */}
      <article className="relative z-10 w-full h-full flex flex-col justify-center px-6 md:px-12">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter">
            Power Your Future with
            <br />
            <span className="text-accent">Clean Solar Energy</span>
          </h1>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-2xl mt-4"
        >
          <p className="text-md md:text-lg text-white/90 leading-relaxed mb-4">
            High-efficiency solar panels designed to reduce costs, cut
            emissions, and create a sustainable tomorrow.
          </p>

          <Link
            href="#get-started"
            className="inline-block bg-white text-black px-6 py-2.5 font-medium transition-colors rounded-full hover:bg-[#A6FF79]"
          >
            Get started
          </Link>
        </motion.section>
      </article>
    </section>
  );
}
