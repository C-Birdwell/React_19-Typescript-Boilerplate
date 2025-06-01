import { COLOR_DEF_DARK } from "@/constants";
import type { BackdropProps } from "./index.types";
import { convertVariantClassNames } from "@/utils";

export const Backdrop: React.FC<BackdropProps> = ({
  backgroundTheme = COLOR_DEF_DARK,
  onDismiss,
  className = "",
  children,
}) => {
  const applyClassNames = convertVariantClassNames("backdrop", [
    className,
    backgroundTheme,
  ]);
  return (
    <div className={applyClassNames} onClick={onDismiss}>
      {children}
    </div>
  );
};
