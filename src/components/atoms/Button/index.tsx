import type { ButtonProps } from "./index.types";
import { convertClassName, disabledClassName } from "@/utils";

import { buttonCLS } from "@/constants";

export const Button: React.FC<ButtonProps> = ({
  buttonText,
  disabled = false,
  onClick,
  children,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={convertClassName(buttonCLS, [
        disabledClassName(disabled),
        className,
      ])}
    >
      {buttonText}
      {children}
    </button>
  );
};
