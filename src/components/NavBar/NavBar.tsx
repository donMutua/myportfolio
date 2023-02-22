import Link from "next/link";
import React from "react";

const navItems = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

function NavBar() {
  return (
    <div className="flex text-gray-400 uppercase justify-between  items-center p-6 ml-8 mr-8">
      <h2 className=" text-4xl">DM</h2>
      <ul className="flex gap-4">
        {navItems.map((item) => (
          <li key={item.id}>
            <Link href={`#${item.id}`} legacyBehavior>
              <a className="text-gray-400 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium">
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
