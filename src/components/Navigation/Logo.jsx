import React from "react";
import recognition from "./recognition.png";
import Tilt from "react-parallax-tilt";

export default function Logo() {
  return (
    <Tilt>
      <div className="bg-cyan-100 bg-opacity-30 hover:bg-cyan-200 p-3 cursor-pointer rounded duration-500">
        <a href="https://zerotomastery.io/" target="_blank">
          <img title="Zero To Mastery Academy" src={recognition} alt="logo" />
        </a>
      </div>
    </Tilt>
  );
}
