import type { BackgroundTheme, MarginBottom } from "@/lib";

export type ModalDemoButtonProps = {
  buttonText: string;
  alignment?: "left" | "right" | "";
  onClick: () => void;
} & BackgroundTheme &
  MarginBottom;
