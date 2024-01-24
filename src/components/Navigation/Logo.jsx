import React from "react";
import Tilt from "react-parallax-tilt";

export default function Logo() {
  return (
    <Tilt>
      <div>
        <a
          className="text-3xl border-4 border-black p-5 hover:text-white hover:border-white duration-200"
          href="https://zerotomastery.io/"
          target="_blank"
        >
          Face Recognition
        </a>
      </div>
    </Tilt>
    // <a
    //   href="https://zerotomastery.io/"
    //   target="_blank"
    //   className="border-4 p-3 font-bold tracking-wider uppercase border-black hover:border-white hover:text-white duration-200"
    // >
    //   Face Recognition App
    // </a>
  );
}
