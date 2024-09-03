export const TextInput = ({ value, onChange, className = "" }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={`w-full mt-1 border border-gray-300 rounded p-1 ${className}`}
    />
  );
};
