// icon:subtask | Tabler Icons https://tablericons.com/ | Csaba Kissi
import * as React from "react";

function IconSubtask(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      viewBox="0 0 24 24"
      height="2.2em"
      width="2.2em"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M6 9h6M4 5h4M6 5v11a1 1 0 001 1h5" />
      <path d="M13 7 H19 A1 1 0 0 1 20 8 V10 A1 1 0 0 1 19 11 H13 A1 1 0 0 1 12 10 V8 A1 1 0 0 1 13 7 z" />
      <path d="M13 15 H19 A1 1 0 0 1 20 16 V18 A1 1 0 0 1 19 19 H13 A1 1 0 0 1 12 18 V16 A1 1 0 0 1 13 15 z" />
    </svg>
  );
}

export default IconSubtask;
