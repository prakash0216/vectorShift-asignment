import { useState, useEffect } from "react";
import { BaseNode } from "./baseNode";
import { NameComponent } from "../components/nameComponent";
import { Textarea } from "../components/textArea";
import IconFileText from "../components/icons/textIcon";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [variableHandles, setVariableHandles] = useState([]);
  const [nodeSize, setNodeSize] = useState({ width: "auto", height: "auto" });

  useEffect(() => {
    updateHandles(currText);
  }, [currText]);

  useEffect(() => {
    // Update node size based on the text length and other factors
    const textArea = document.getElementById(`textarea-${id}`);
    if (textArea) {
      const { scrollWidth, scrollHeight } = textArea;
      setNodeSize({
        width: Math.max(80, scrollWidth + 20) + "px",
        height: Math.max(40, scrollHeight + 20) + "px",
      });
    }
  }, [currText, id]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const updateHandles = (text) => {
    const variableRegex = /\{\{(\w+)\}\}/g;
    const matches = [...text.matchAll(variableRegex)];
    const handles = matches.map((match, index) => ({
      type: "target",
      position: "left",
      id: match[1], // Variable name as ID
      style: { top: `${index * 30 + 20}px` }, // Adjust positioning dynamically
      label: match[1], // Store the variable name
    }));
    setVariableHandles(handles);
  };

  return (
    <BaseNode
      id={id}
      type="Text"
      handles={[
        ...variableHandles,
        { type: "source", position: "right", id: "output" },
      ]}
      icon={IconFileText}
      style={{ width: nodeSize.width, height: nodeSize.height }}
    >
      <label className="block text-xs">
        <NameComponent text="Text" />
        <Textarea
          id={`textarea-${id}`} // Unique ID for textarea
          value={currText}
          onChange={handleTextChange}
          className="resize-none overflow-hidden" // Ensure textarea doesn't resize manually
        />
      </label>
      {/* Render variable labels */}
      {variableHandles.map((handle) => (
        <div
          key={`label-${handle.id}`}
          style={{
            position: "absolute",
            top: handle.style.top,
            left: handle.position === "left" ? "-42px" : "auto",
            right: handle.position === "right" ? "-50px" : "auto",
            whiteSpace: "nowrap",
          }}
          className="text-xs text-[#5d7f9e]"
        >
          {handle.label}
        </div>
      ))}
    </BaseNode>
  );
};
