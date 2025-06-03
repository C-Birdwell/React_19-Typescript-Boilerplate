import type { ActionType, ModalNavigation } from "@/lib";

export type ModalNavProps = {
  customActions?: ActionType[];
  endAction?: ActionType;
} & ModalNavigation;
