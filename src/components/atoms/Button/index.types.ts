import type { PropChildren, ClassName } from "@/lib";

export type ButtonProps = {
  buttonText: string;
  disabled?: boolean;
  onClick: React.MouseEventHandler;
} & ClassName &
  PropChildren;
