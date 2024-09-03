import { useState } from "react";
import { BaseNode } from "./baseNode";
import { NameComponent } from "../components/nameComponent";
import { TextInput } from "../components/textInput";
import { SelectInput } from "../components/selectInput";
import IconFileInput from "../components/icons/inputIcon";
export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setInputType(e.target.value);

  return (
    <BaseNode
      id={id}
      type="Input"
      handles={[{ type: "source", position: "right", id: "value" }]}
      icon={IconFileInput}
    >
      <label className="block text-xs">
        <NameComponent text="Name" />
        <TextInput value={currName} onChange={handleNameChange} />
      </label>
      <label className="block mt-2 text-xs">
        <NameComponent text="Type" />
        <SelectInput
          value={inputType}
          onChange={handleTypeChange}
          options={[
            { value: "Text", label: "Text" },
            { value: "File", label: "File" },
          ]}
        />
      </label>
    </BaseNode>
  );
};
