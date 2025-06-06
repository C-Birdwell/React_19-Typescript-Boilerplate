import type {
  PropChildren,
  PropsSpreadOperator,
  ClassNamesList,
  ParentClassName,
} from "@/lib";

import { ThemeSizeTypes } from "@/constants";

export type CardProps = {
  border?: boolean;
  animationSlide?: "left" | "right" | "top" | "bottom" | "";
  marginBottom?: (typeof ThemeSizeTypes)[number];
} & PropChildren &
  PropsSpreadOperator &
  ClassNamesList &
  ParentClassName;
