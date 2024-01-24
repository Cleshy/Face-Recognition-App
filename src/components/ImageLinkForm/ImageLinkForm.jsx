import React from "react";
import "./ImageLinkForm.css";

export default function ImageLinkForm() {
  return (
    <div>
      <p className="text-2xl">
        {"This Magic Brain will detect faces in your pictures. Give it a try."}
      </p>
      <div className="flex justify-center">
        <div className="form shadow shadow-gray-900 p-8 w-[700px]">
          <input className="w-2/3 p-2" type="text" />
          <button className="w-1/3 p-2 bg-gray-300 font-bold tracking-widest hover:bg-gray-400 duration-200">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}
