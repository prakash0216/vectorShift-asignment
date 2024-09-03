import { Handle } from "reactflow";
import PropTypes from "prop-types";

export const BaseNode = ({
  id,
  type,
  children,
  icon: Icon,
  handles = [],
  style,
}) => {
  return (
    <div
      className="
        w-auto
        p-2
        rounded-[6px]
        relative
        border-box
        border-[1px]
        text-[#5d7f9e]
        border-pipelinenodeborder-default
        shadow-[0px_0px_0px_2px_#cecffc]
        bg-[#ffffff]
        hover:border-[#A9ABF7]
        hover:text-[#6563E4]
        hover:shadow-[0px_0px_0px_4px_#cecffc]
        transition-colors
        transition-opacity
        transition-shadow
        transition-border
        duration-200
      "
      style={style}
    >
      <div className="flex items-center">
        <div>{Icon && <Icon height="1.2rem" width="1.2rem" />}</div>
        <div className="font-medium text-center ml-1">{type}</div>
      </div>

      <div className="mt-2">{children}</div>
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style}
        />
      ))}
    </div>
  );
};

BaseNode.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  icon: PropTypes.elementType,
  handles: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      position: PropTypes.oneOf(["top", "bottom", "left", "right"]).isRequired,
      id: PropTypes.string.isRequired,
      style: PropTypes.object,
    })
  ),
  style: PropTypes.object,
};
