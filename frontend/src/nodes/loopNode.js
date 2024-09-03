import { useState } from "react";
import { BaseNode } from "./baseNode";
import { TextInput } from "../components/textInput";
import { NameComponent } from "../components/nameComponent";
import IconLoop from "../components/icons/loopIcon";
export const LoopNode = ({ id }) => {
  const [iterations, setIterations] = useState(1);

  const handleIterationsChange = (e) => setIterations(Number(e.target.value));

  return (
    <BaseNode
      id={id}
      type="Loop"
      handles={[
        { type: "source", position: "right", id: "start" },
        { type: "target", position: "left", id: "end" },
      ]}
      icon={IconLoop}
    >
      <label className="block text-xs">
        <NameComponent text="Iterations" />
        <TextInput value={iterations} onChange={handleIterationsChange} />
      </label>
    </BaseNode>
  );
};
