import React from "react";
import "./ImageLinkForm.css";

export default function ImageLinkForm() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-10">
      <p className="text-2xl text-white">
        {"This Magic Brain will detect faces in your pictures. Give it a try."}
      </p>
      <div className="bg-black bg-opacity-50 rounded p-10 w-[700px]">
        <input className="w-2/3 p-2 outline-none tracking-wide" type="text" />
        <button className="w-1/3 p-2 cursor-pointer bg-cyan-200 hover:bg-cyan-400 font-bold duration-500">
          Detect
        </button>
      </div>
    </div>
  );
}
