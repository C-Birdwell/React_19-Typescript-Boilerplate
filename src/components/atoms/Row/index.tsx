import type { RowProps } from "./index.types";
import { setClassNames } from "@/utils";

export const Row: React.FC<RowProps> = ({
  parentName = "",
  classNames = [],
  children,
  ...rest
}) => {
  return (
    <div className={setClassNames("row", parentName, classNames)} {...rest}>
      {children}
    </div>
  );
};
