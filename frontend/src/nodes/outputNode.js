import { useState } from "react";
import { BaseNode } from "./baseNode";
import { NameComponent } from "../components/nameComponent";
import { TextInput } from "../components/textInput";
import { SelectInput } from "../components/selectInput";
import IconFileOutput from "../components/icons/outputIcon";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setOutputType(e.target.value);

  return (
    <BaseNode
      id={id}
      type="Output"
      handles={[{ type: "target", position: "left", id: "value" }]}
      icon={IconFileOutput}
    >
      <label className="block text-xs">
        <NameComponent text="Name" />
        <TextInput value={currName} onChange={handleNameChange} />
      </label>
      <label className="block mt-2 text-xs">
        <NameComponent text="Type" />
        <SelectInput
          value={outputType}
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
