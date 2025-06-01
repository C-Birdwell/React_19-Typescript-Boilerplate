import type { ColumnProps } from "./index.types";
import { setClassNames } from "@/utils";

export const Column: React.FC<ColumnProps> = ({
  size = 1,
  classNames = [],
  parentName = "",
  children,
  ...rest
}) => {
  if (size <= 0) {
    return <></>;
  }

  return (
    <div
      className={setClassNames(
        "column",
        parentName,
        classNames.concat(`${size}`)
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
