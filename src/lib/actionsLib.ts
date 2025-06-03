import type { BackgroundTheme } from "@/lib";

export type ActionType = {
  text: string;
  action: () => void;
} & BackgroundTheme;
