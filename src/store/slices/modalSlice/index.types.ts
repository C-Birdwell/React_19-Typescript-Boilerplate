import { ThemeColorsTypes } from "@/constants";

export type InitialState = {
  visible: boolean;
  backgroundTheme?: (typeof ThemeColorsTypes)[number];
};
