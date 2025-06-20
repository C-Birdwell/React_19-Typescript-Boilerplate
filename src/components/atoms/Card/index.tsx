import { type FC } from "react";
import { useInView } from "react-intersection-observer";
import { setClassNames } from "@/utils";
import type { CardProps } from "./index.types";

export const Card: FC<CardProps> = ({
  border = false,
  children,
  classNames = [],
  parentName,
  marginBottom = 20,
  animationSlide = "",
  ...rest
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  let formatClassNames = classNames;
  if (border) {
    formatClassNames = [...formatClassNames, "border"];
  }
  if (animationSlide) {
    if (inView) {
      formatClassNames = [...formatClassNames, "in-view"];
    }
    formatClassNames = [...formatClassNames, `animation--${animationSlide}`];
  }

  const cardClassNames = setClassNames("card", parentName, formatClassNames);
  return (
    <div
      ref={ref}
      className={cardClassNames}
      style={{ marginBottom: marginBottom }}
      {...rest}
    >
      {children}
    </div>
  );
};
