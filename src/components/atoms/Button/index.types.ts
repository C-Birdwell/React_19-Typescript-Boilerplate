import type {
  PropChildren,
  ClassName,
  BackgroundColorTypes,
  ParentClassName,
} from "@/lib";

export type ButtonProps = {
  buttonText: string;
  disabled?: boolean;
  onClick: React.MouseEventHandler;
} & ClassName &
  PropChildren &
  BackgroundColorTypes &
  ParentClassName;
