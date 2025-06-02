import type { BackgroundTheme } from "@/lib";

export type NavLinkProps = {
  target: string;
  targetText: string;
  type: "text" | "button";
} & BackgroundTheme;
