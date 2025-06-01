import type { ButtonProps } from "./index.types";
import { convertVariantClassNames, disabledClassName } from "@/utils";

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
      className={convertVariantClassNames(buttonCLS, [
        disabledClassName(disabled),
        className,
      ])}
    >
      {buttonText}
      {children}
    </button>
  );
};
