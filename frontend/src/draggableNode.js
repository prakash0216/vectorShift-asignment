export const DraggableNode = ({ type, label, icon: Icon }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`cursor-grab min-w-[80px] h-[60px] flex flex-col items-center justify-center rounded-lg border border-gray-300 text-[#6F6C8B] font-normal text-sm  ${type}`}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = "grab")}
        draggable
      >
        <div className="flex items-center justify-center ">
          {Icon && <Icon />}
        </div>
        <div>{label}</div>
      </div>
    </div>
  );
};
