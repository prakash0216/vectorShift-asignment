// icon:file-input | Lucide https://lucide.dev/ | Lucide
import * as React from "react";

function IconFileInput(props, { height = "2.2em", width = "2.2em" }) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      viewBox="0 0 24 24"
      height={height}
      width={width}
      {...props}
    >
      <path d="M4 22h14a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v4" />
      <path d="M14 2v6h6M2 15h10M9 18l3-3-3-3" />
    </svg>
  );
}

export default IconFileInput;
