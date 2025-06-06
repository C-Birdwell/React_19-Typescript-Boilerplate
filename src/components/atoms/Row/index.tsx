import type { RowProps } from "./index.types";
import { setClassNames } from "@/utils";

export const Row: React.FC<RowProps> = ({
  parentName = "",
  className = "",
  classNames = [],
  children,
  ...rest
}) => {
  const rowClassName = `${setClassNames("row", parentName, classNames)}${
    className ? " " + className : ""
  }`;

  return (
    <div className={rowClassName} {...rest}>
      {children}
    </div>
  );
};
