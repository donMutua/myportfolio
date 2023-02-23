import { useState } from "react";
import Link from "next/link";

const navItems = [
  { id: "about", name: "About" },
  { id: "skills", name: "Skills" },
  { id: "experience", name: "Experience" },
  { id: "projects", name: "Projects" },
  { id: "contact", name: "Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex md:flex-row text-gray-400 uppercase justify-between md:items-center p-6 ml-8 mr-8 ">
      <h2 className="text-4xl mb-7">DM</h2>

      {/* Mobile menu, show/hide based on menu state */}
      <div className="md:hidden ml-auto">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-yellow-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6 `}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {isMenuOpen && (
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link href={`#${item.id}`} key={item.id} legacyBehavior>
                <a className="text-gray-400 hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium">
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex md:space-x-6">
        {navItems.map((item) => (
          <li key={item.id}>
            <Link href={`#${item.id}`} legacyBehavior>
              <a className="text-gray-400 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium hover:animate-bounce">
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
