import Link from "next/link";

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
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                  ></path>
                </svg>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-dark-green hover:bg-accent transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-dark-green hover:bg-accent transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                  ></path>
                </svg>
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
