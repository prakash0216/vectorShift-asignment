import { BaseNode } from "./baseNode";
import { NameComponent } from "../components/nameComponent";
import IconLlm from "../components/icons/llmIcon";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      type="LLM"
      handles={[
        {
          type: "target",
          position: "left",
          id: "system",
          style: { top: `${100 / 3}%` },
        },
        {
          type: "target",
          position: "left",
          id: "prompt",
          style: { top: `${200 / 3}%` },
        },
        { type: "source", position: "right", id: "response" },
      ]}
      icon={IconLlm}
    >
      <span className="text-center block text-xs">
        <NameComponent text="This is an LLM" />
      </span>
    </BaseNode>
  );
};
