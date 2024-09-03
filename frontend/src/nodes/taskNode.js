import { useState } from "react";
import { BaseNode } from "./baseNode";
import { TextInput } from "../components/textInput";
import { NameComponent } from "../components/nameComponent";
import IconSubtask from "../components/icons/taskIcon";

export const TaskNode = ({ id, data }) => {
  const [taskName, setTaskName] = useState(data?.taskName || "New Task");

  const handleNameChange = (e) => setTaskName(e.target.value);

  return (
    <BaseNode
      id={id}
      type="Task"
      handles={[{ type: "source", position: "right", id: "task" }]}
      icon={IconSubtask}
    >
      <label className="block text-xs">
        <NameComponent text="Task Name " />
        <TextInput value={taskName} onChange={handleNameChange} />
      </label>
    </BaseNode>
  );
};
