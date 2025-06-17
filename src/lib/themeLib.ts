import type { ThemeColorsTypes, ThemeSizeTypes } from "@/constants";

export type BackgroundTheme = {
  backgroundTheme: (typeof ThemeColorsTypes)[number];
};

export type MarginBottom = { marginBottom?: (typeof ThemeSizeTypes)[number] };
