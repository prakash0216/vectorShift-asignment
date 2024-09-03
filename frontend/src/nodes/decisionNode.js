import { useState } from "react";
import { BaseNode } from "./baseNode";
import { TextInput } from "../components/textInput";
import { NameComponent } from "../components/nameComponent";
import IconArrowDecision from "../components/icons/decisionIcon";

export const DecisionNode = ({ id }) => {
  const [condition, setCondition] = useState("Condition");

  const handleConditionChange = (e) => setCondition(e.target.value);

  return (
    <BaseNode
      id={id}
      type="Decision"
      handles={[
        { type: "source", position: "right", id: "true" },
        { type: "source", position: "right", id: "false" },
      ]}
      icon={IconArrowDecision}
    >
      <label className="block text-xs">
        <NameComponent text="Condition" />
        <TextInput value={condition} onChange={handleConditionChange} />
      </label>
    </BaseNode>
  );
};
