import React from "react";
import Logo from "./Logo";

export default function Navigation() {
  return (
    <header className="w-screen px-10 py-14">
      <nav className="flex justify-between items-center">
        <Logo />
        <ul className="pr-6">
          <li>
            <a
              href="#"
              className="text-3xl text-white tracking-wider border-2 border-transparent hover:border-b-white duration-200"
            >
              Sign Out
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
