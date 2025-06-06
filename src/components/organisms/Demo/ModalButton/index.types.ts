import type { BackgroundTheme } from "@/lib";

export type ModalDemoButtonProps = {
  buttonText: string;
  alignment?: "left" | "right" | "";
  onClick: () => void;
} & BackgroundTheme;
