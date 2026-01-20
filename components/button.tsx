"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "motion/react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const MotionLink = motion(Link);

export default function Button({
  children,
  href,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-8 py-3 text-sm font-medium whitespace-nowrap cursor-pointer " +
    "bg-[#A6FF79] text-black";

  const motionProps = {
    whileHover: {
      scale: 1.04,
      borderRadius: "9999px",
    },
    whileTap: {
      scale: 0.98,
    },
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as const, // GSAP-like easeOutExpo
    },
  };

  if (href) {
    return (
      <MotionLink
        href={href}
        className={`${baseStyles} ${className}`}
        {...motionProps}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${className}`}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
