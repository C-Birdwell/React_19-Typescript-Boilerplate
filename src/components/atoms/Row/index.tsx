import type { RowProps } from "./index.types";
import { setClassNames } from "@/utils";

export const Row: React.FC<RowProps> = ({
  parentName = "",
  className = "",
  classNames = [],
  gutter = 0,
  breakPoint = "",
  children,
  ...rest
}) => {
  console.log("breakPoint", breakPoint);
  const gutterSize = gutter > 0 ? [`gutter--${gutter}`, "gutter"] : "";
  const breakClass = breakPoint ? `breakpoint--${breakPoint}` : breakPoint;
  const rowClassName = `${setClassNames("row", parentName, [
    ...classNames,
    ...gutterSize,
    breakClass,
  ])}${className ? " " + className : ""}`;

  return (
    <div className={rowClassName} {...rest}>
      {children}
    </div>
  );
};
