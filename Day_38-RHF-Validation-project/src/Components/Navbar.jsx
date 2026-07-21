import React from "react";
import { UserCircle } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between bg-white px-6 py-4 shadow-md">
        {/* Left: Profile icon */}
        <button
          aria-label="Profile"
          className="text-gray-700 transition hover:text-blue-600"
        >
          <UserCircle size={32} />
        </button>

        {/* Middle: Navigation links */}
        <div className="flex gap-8 text-sm font-medium text-gray-700">
          <a href="#home" className="transition hover:text-blue-600">
            Home
          </a>
          <a href="#about" className="transition hover:text-blue-600">
            About
          </a>
          <a href="#contact" className="transition hover:text-blue-600">
            Contact
          </a>
        </div>

        {/* Right: CTA */}
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 cursor-pointer">
          Create Profile
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
