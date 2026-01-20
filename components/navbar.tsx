"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all  ${
        isScrolled
          ? "bg-white text-black shadow-md py-4"
          : "bg-transparent text-white py-4"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 text-xl font-medium">
        <div
          className={`w-8 h-8 rounded-full border border-[#A6FF79] flex items-center justify-center backdrop-blur-sm transition-colors bg-[#A6FF79]}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-5 h-5 text-accent`}
          >
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
          </svg>
        </div>
        Sunergy
      </Link>

      {/* Center Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <Link href="#" className="hover:text-accent transition-colors">
          Home
        </Link>
        <Link href="#about" className="hover:text-accent transition-colors">
          About us
        </Link>
        <Link href="#projects" className="hover:text-accent transition-colors">
          Projects
        </Link>
        <Link href="#services" className="hover:text-accent transition-colors">
          Services
        </Link>
        <Link href="#blog" className="hover:text-accent transition-colors">
          Blog
        </Link>
      </div>

      {/* CTA Button */}
      <Link
        href="#contact"
        className={`hidden md:block px-6 py-2.5 text-sm font-medium ease-in-out transition-all duration-300 rounded-full ${
          isScrolled
            ? "bg-[#A6FF79] text-black "
            : "bg-white text-black hover:bg-[#A6FF79] "
        }`}
      >
        Contact us
      </Link>

      {/* Mobile Menu Toggle (Placeholder) */}
      <button className="md:hidden">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </nav>
  );
}
