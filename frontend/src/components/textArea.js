import React, { forwardRef, useRef, useEffect } from "react";

export const Textarea = forwardRef(
  ({ value, onChange, className = "" }, ref) => {
    const textareaRef = useRef(null);

    // Auto-resize textarea based on content
    useEffect(() => {
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto"; // Reset height
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set new height
      }
    }, [value]);

    return (
      <textarea
        ref={(node) => {
          textareaRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        value={value}
        onChange={onChange}
        rows={1}
        className={`w-full mt-1 border border-gray-300 rounded p-1 pb-1.5 resize-none overflow-hidden text-[#3938ED] focus:outline-[#A9ABF7]  ${className}`}
      />
    );
  }
);
