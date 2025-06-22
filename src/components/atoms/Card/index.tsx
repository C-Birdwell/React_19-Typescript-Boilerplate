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
  animationTriggerOnce = true,
  fadeIn = false,
  flipIn = "",
  ...rest
}) => {
  const [ref, inView] = useInView({
    triggerOnce: animationTriggerOnce,
  });

  const formatClassNames = [
    ...classNames,
    ...(border ? ["border"] : []),
    ...(animationSlide
      ? [...(inView ? ["in-view"] : []), `animation--${animationSlide}`]
      : []),
    ...(flipIn
      ? [...(inView ? ["in-view"] : []), `animation--flip-in-${flipIn}`]
      : []),
    ...(fadeIn ? [...(inView ? ["in-view"] : []), `animation--fade-in`] : []),
  ];

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
