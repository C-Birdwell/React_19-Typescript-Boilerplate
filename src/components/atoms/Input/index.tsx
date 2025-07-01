import { useRef } from "react";
import { useMask } from "@react-input/mask";

import type { InputProps } from "./index.types";

export const Input: React.FC<InputProps> = ({
  name,
  disabled = false,
  type,
  value,
  onUpdate,
  placeholder,
  dataMask = null,
  error = false,
  ...rest
}) => {
  const initRef = useRef(null);

  const maskRef = useMask({
    mask: dataMask?.mask,
    replacement: dataMask?.replacement,
  });
  const inputRef = dataMask !== null ? maskRef : initRef;

  return (
    <input
      value={value}
      disabled={disabled}
      type={type}
      onChange={onUpdate}
      name={name}
      id={name}
      placeholder={placeholder}
      ref={inputRef}
      aria-invalid={!!error}
      {...rest}
    />
  );
};
