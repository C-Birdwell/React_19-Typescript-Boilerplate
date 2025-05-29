import type { ClassName, PropChildren } from "@/lib";
import { ThemeColorsTypes } from "@/constants";

export type BackdropProps = {
  backgroundTheme?: (typeof ThemeColorsTypes)[number];
  onDismiss?: () => void;
} & ClassName &
  PropChildren;
