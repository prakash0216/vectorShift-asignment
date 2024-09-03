export const SelectInput = ({
  value,
  onChange,
  options = [],
  className = "",
}) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`w-full mt-1 border border-gray-300 rounded p-1 focus:outline-[#A9ABF7] ${className}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
