"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Button from "./button";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      {/* Background Video */}
      <video
        className="absolute inset-0 z-0 w-full h-full object-cover"
        src="/hero_video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Overlay */}
      <section className="absolute inset-0 bg-black/40 z-0" />

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

          <Button href="#get-started">Get started</Button>
        </motion.section>
      </article>
    </section>
  );
}
