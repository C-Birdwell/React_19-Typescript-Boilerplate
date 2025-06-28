import type { BackgroundTheme } from "@/lib";
export type InitialState = {
  visible: boolean;
  modalRoute: "light" | "dark" | "success" | "demo" | "redux" | "";
} & BackgroundTheme;
