import type {
  ClassName,
  PropChildren,
  BackgroundTheme,
  OnDismiss,
} from "@/lib";

export type BackdropProps = OnDismiss &
  ClassName &
  PropChildren &
  BackgroundTheme;
