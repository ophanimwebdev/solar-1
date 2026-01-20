import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Info */}
          <div className="space-y-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-medium text-dark-green"
            >
              <div className="w-8 h-8 rounded-full border border-accent flex items-center justify-center bg-accent/5">
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
              </div>
              Sunergy
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              234 Green Energy Blvd. Suite 500, Eco City, CA 90210, United
              States
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-dark-green hover:bg-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-dark-green hover:bg-accent transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-dark-green hover:bg-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-lg font-medium text-dark-green mb-6">
              Company
            </h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Our team
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  How we work
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Projects */}
          <div>
            <h4 className="text-lg font-medium text-dark-green mb-6">
              Projects
            </h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Eco factory transformation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Solar future project
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Wind power for community
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h4 className="text-lg font-medium text-dark-green mb-6">
              Services
            </h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Custom solar solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Wind energy systems
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Advanced energy storage
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © Sunergy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
