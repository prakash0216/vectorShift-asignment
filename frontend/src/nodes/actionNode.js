import { useState } from "react";
import { BaseNode } from "./baseNode";
import { TextInput } from "../components/textInput";
import { NameComponent } from "../components/nameComponent";
import IconPlay from "../components/icons/actionIcon";
export const ActionNode = ({ id }) => {
  const [action, setAction] = useState("Action");

  const handleActionChange = (e) => setAction(e.target.value);

  return (
    <BaseNode
      id={id}
      type="Action"
      handles={[{ type: "target", position: "left", id: "action" }]}
      icon={IconPlay}
    >
      <label className="block text-xs">
        <NameComponent text="Action" />
        <TextInput value={action} onChange={handleActionChange} />
      </label>
    </BaseNode>
  );
};
