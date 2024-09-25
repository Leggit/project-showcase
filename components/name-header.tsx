"use client";

import React, { useEffect } from "react";

function NameHeader() {
  const placeholder = "{name}";

  useEffect(() => {
    const placeholder = document.getElementById("placeholder")!;
    const newText = document.getElementById("newText")!;

    placeholder.classList.add("animate-slideOutUp");
    newText.classList.add("animate-slideInUp", "opacity-100");
  }, []);

  return (
    <h1 className="text-7xl">
      {"Hi,"}
      <div className="flex">
        {"I'm"}&nbsp;
        <div className="relative">
          <pre
            id="placeholder"
            className="font-light delay-500 absolute font-serif"
          >
            {placeholder}
          </pre>
          <div
            id="newText"
            className="opacity-0 translate-y-1 delay-500 absolute "
          >
            Ollie.
          </div>
        </div>
      </div>
    </h1>
  );
}

export default NameHeader;
