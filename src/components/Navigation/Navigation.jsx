import React from "react";
import Logo from "./Logo";

export default function Navigation() {
  return (
    <header className="w-screen bg-white text-2xl p-8">
      <nav className="flex justify-between">
        <Logo />
        <ul>
          <li>
            <a
              href="#"
              className="duration-200 border-b-2 border-transparent hover:border-black"
            >
              Sign In
            </a>
          </li>
          {/* <li>
            <a href="#">Sign Out</a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
