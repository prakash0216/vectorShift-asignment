import { useState } from "react";
import { BaseNode } from "./baseNode";
import { TextInput } from "../components/textInput";
import { NameComponent } from "../components/nameComponent";
import IconBxErrorCircle from "../components/icons/errorIcon";
export const ErrorNode = ({ id }) => {
  const [errorMessage, setErrorMessage] = useState("Error message");

  const handleErrorChange = (e) => setErrorMessage(e.target.value);

  return (
    <BaseNode
      id={id}
      type="Error"
      handles={[{ type: "target", position: "left", id: "error" }]}
      icon={IconBxErrorCircle}
    >
      <label className="block text-xs">
        <NameComponent text="Error Message" />
        <TextInput value={errorMessage} onChange={handleErrorChange} />
      </label>
    </BaseNode>
  );
};
