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
}) => {
  const buttonClassNames = setClassNames("button", parentName, [
    className,
    disabledClassName(disabled),
    backgroundTheme,
  ]);
  return (
    <button onClick={onClick} disabled={disabled} className={buttonClassNames}>
      {buttonText}
      {children}
    </button>
  );
};
