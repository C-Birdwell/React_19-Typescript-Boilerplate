import type {
  PropChildren,
  PropsSpreadOperator,
  ClassNamesList,
  ParentClassName,
  MarginBottom,
} from "@/lib";

export type CardProps = {
  border?: boolean;
  animationSlide?: "left" | "right" | "top" | "bottom" | "";
  animationTriggerOnce?: boolean;
  fadeIn?: boolean;
  flipIn?: "left" | "right";
} & PropChildren &
  PropsSpreadOperator &
  ClassNamesList &
  MarginBottom &
  ParentClassName;
