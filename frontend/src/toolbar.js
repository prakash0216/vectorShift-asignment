import IconFileInput from "./components/icons/inputIcon";
import IconFileOutput from "./components/icons/outputIcon";
import IconLlm from "./components/icons/llmIcon";
import IconText from "./components/icons/textIcon";
import IconAction from "./components/icons/actionIcon";
import IconError from "./components/icons/errorIcon";
import IconDecision from "./components/icons/decisionIcon";
import IconTask from "./components/icons/taskIcon";
import IconLoop from "./components/icons/loopIcon";
import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div className="p-2.5">
      <div className="mt-5 flex flex-wrap gap-2.5">
        <DraggableNode type="customInput" label="Input" icon={IconFileInput} />
        <DraggableNode type="llm" label="LLM" icon={IconLlm} />
        <DraggableNode
          type="customOutput"
          label="Output"
          icon={IconFileOutput}
        />
        <DraggableNode type="text" label="Text" icon={IconText} />
        <DraggableNode type="action" label="Action" icon={IconAction} />
        <DraggableNode type="error" label="Error" icon={IconError} />
        <DraggableNode type="decision" label="Decision" icon={IconDecision} />
        <DraggableNode type="task" label="Task" icon={IconTask} />
        <DraggableNode type="loop" label="Loop" icon={IconLoop} />
      </div>
    </div>
  );
};
