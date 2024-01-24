import React from "react";
import "./ImageLinkForm.css";

export default function ImageLinkForm() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-10">
      <p className="text-2xl">
        {"This Magic Brain will detect faces in your pictures. Give it a try."}
      </p>
      <div className="flex justify-center">
        <div className="form shadow shadow-gray-900 p-8 w-[700px]">
          <input className="w-2/3 p-2 outline-none tracking-wide" type="text" />
          <button className="w-1/3 p-2 cursor-pointer text-white bg-blue-800 font-bold tracking-widest hover:bg-blue-950 duration-300">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}
