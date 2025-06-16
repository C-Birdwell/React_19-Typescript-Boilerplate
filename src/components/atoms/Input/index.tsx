import type { InputProps } from "./index.types";

export const Input: React.FC<InputProps> = ({
  name,
  disabled = false,
  type,
  value,
  onUpdate,
  placeholder,
  ...rest
}) => {
  return (
    <input
      value={value}
      disabled={disabled}
      type={type}
      onChange={onUpdate}
      name={name}
      id={name}
      placeholder={placeholder}
      {...rest}
    />
  );
};
