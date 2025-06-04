import type { ActionType, ModalNavigation, CustomActions } from "@/lib";

export type ModalNavProps = {
  endAction?: ActionType;
} & ModalNavigation &
  CustomActions;
