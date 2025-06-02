import type {
  PropChildren,
  ClassName,
  BackgroundTheme,
  ParentClassName,
} from "@/lib";

export type ButtonProps = {
  buttonText: string;
  disabled?: boolean;
  onClick: React.MouseEventHandler;
} & ClassName &
  PropChildren &
  BackgroundTheme &
  ParentClassName;
