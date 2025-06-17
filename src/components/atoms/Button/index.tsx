import type { ButtonProps } from "./index.types";
import { disabledClassName, setClassNames } from "@/utils";

export const Button: React.FC<ButtonProps> = ({
  buttonText,
  disabled = false,
  onClick = () => alert("Add a Function to this button"),
  children,
  parentName = "",
  className = "",
  backgroundTheme,
  marginBottom = 0,
}) => {
  const buttonClassNames = setClassNames("button", parentName, [
    className,
    disabledClassName(disabled),
    backgroundTheme,
  ]);
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonClassNames}
      style={{ marginBottom: marginBottom }}
    >
      {buttonText}
      {children}
    </button>
  );
};
