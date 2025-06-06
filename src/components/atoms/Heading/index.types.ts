import type { PropChildren } from "@/lib";

export type HeadingProps = {
  size: 1 | 2 | 3 | 4 | 5 | 6;
  alignment?: "left" | "center" | "right";
} & PropChildren;
