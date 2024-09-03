import React, { useState, useEffect, useRef } from "react";
import { BaseNode } from "./baseNode";
import { NameComponent } from "../components/nameComponent";
import { Textarea } from "../components/textArea";
import IconFileText from "../components/icons/textIcon";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [variableHandles, setVariableHandles] = useState([]);
  const [nodeSize, setNodeSize] = useState({ width: "auto", height: "auto" });
  const nodeRef = useRef(null);

  useEffect(() => {
    updateHandles(currText);
  }, [currText]);

  useEffect(() => {
    const textArea = document.getElementById(`textarea-${id}`);
    if (textArea) {
      const { scrollWidth, scrollHeight } = textArea;
      setNodeSize({
        width: Math.max(200, scrollWidth + 40) + "px",
        height:
          Math.max(100, scrollHeight + 40 + variableHandles.length * 24) + "px",
      });
    }
  }, [currText, id, variableHandles]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const updateHandles = (text) => {
    const variableRegex = /\{\{(\w+)\}\}/g;
    const matches = [...text.matchAll(variableRegex)];
    const handles = matches.map((match, index) => ({
      type: "target",
      position: "left",
      id: match[1],
      style: { top: `${index * 24 + 40}px` },
      label: match[1],
    }));
    setVariableHandles(handles);
  };

  return (
    <div
      ref={nodeRef}
      style={{
        position: "relative",
        width: nodeSize.width,
        height: nodeSize.height,
      }}
    >
      <BaseNode
        id={id}
        type="Text"
        handles={[
          ...variableHandles,
          { type: "source", position: "right", id: "output" },
        ]}
        icon={IconFileText}
      >
        <label className="block text-xs">
          <NameComponent text="Text" />
          <Textarea
            id={`textarea-${id}`}
            value={currText}
            onChange={handleTextChange}
            className="resize-none overflow-hidden w-full"
            style={{ minHeight: "60px" }}
          />
        </label>
      </BaseNode>
      {variableHandles.map((handle) => (
        <div
          key={`label-${handle.id}`}
          style={{
            position: "absolute",
            top: handle.style.top,
            right: "100%",
            paddingRight: "10px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "100px",
            direction: "rtl",
            textAlign: "left",
          }}
          className="text-xs text-[#5d7f9e]"
        >
          {handle.label}
        </div>
      ))}
    </div>
  );
};
