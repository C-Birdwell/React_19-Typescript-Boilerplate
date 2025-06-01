import { setClassNames } from "@/utils";
import type { CardProps } from "./index.types";

export const Card: React.FC<CardProps> = ({
  children,
  classNames,
  parentName,
  ...rest
}) => {
  const cardClassNames = setClassNames("card", parentName, classNames);
  return (
    <div className={cardClassNames} {...rest}>
      {children}
    </div>
  );
};
