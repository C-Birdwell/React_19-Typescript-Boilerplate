import type { BackgroundTheme, OnDismiss } from "@/lib";

export type NavLinkProps = {
  target: string;
  targetText: string;
  type: "text" | "button";
} & BackgroundTheme &
  OnDismiss;

export type NavLinksDataProps = { links: NavLinkProps[] };
