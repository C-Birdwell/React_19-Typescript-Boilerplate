import { setClassNames } from "@/utils";
import type { CardProps } from "./index.types";

export const Card: React.FC<CardProps> = ({
  border = false,
  children,
  classNames = [],
  parentName,
  marginBottom = 20,
  animationSlide = "",
  ...rest
}) => {
  let formatClassNames = classNames;
  if (border) {
    formatClassNames = [...formatClassNames, "border"];
  }
  if (animationSlide) {
    formatClassNames = [...formatClassNames, animationSlide];
  }
  const cardClassNames = setClassNames("card", parentName, formatClassNames);
  return (
    <div
      className={cardClassNames}
      style={{ marginBottom: marginBottom }}
      {...rest}
    >
      {children}
    </div>
  );
};
