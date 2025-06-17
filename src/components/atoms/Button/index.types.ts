import type {
  PropChildren,
  ClassName,
  BackgroundTheme,
  ParentClassName,
  MarginBottom,
} from "@/lib";

export type ButtonProps = {
  buttonText: string;
  disabled?: boolean;
  onClick: React.MouseEventHandler | void;
} & MarginBottom &
  ClassName &
  PropChildren &
  BackgroundTheme &
  ParentClassName;
