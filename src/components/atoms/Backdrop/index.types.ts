import type { ClassName, PropChildren, BackgroundTheme } from "@/lib";

export type BackdropProps = {
  onDismiss?: () => void;
} & ClassName &
  PropChildren &
  BackgroundTheme;
