import type { RowProps } from "./index.types";
import { setClassNames } from "@/utils";

export const Row: React.FC<RowProps> = ({
  parentName = "",
  className = "",
  classNames = [],
  gutter = 0,
  children,
  ...rest
}) => {
  const gutterSize = gutter > 0 ? `gutter-${gutter}` : "";

  const rowClassName = `${setClassNames(
    "row",
    parentName,
    classNames.concat(gutterSize)
  )}${className ? " " + className : ""}`;

  return (
    <div className={rowClassName} {...rest}>
      {children}
    </div>
  );
};
