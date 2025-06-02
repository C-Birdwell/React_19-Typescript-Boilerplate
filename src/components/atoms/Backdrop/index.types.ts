import type { ClassName, PropChildren, BackgroundColorTypes } from "@/lib";

export type BackdropProps = {
  onDismiss: () => void;
} & ClassName &
  PropChildren &
  BackgroundColorTypes;
