import type { BackgroundColorTypes, ModalNavigation } from "@/lib";

type CustomActionType = {
  buttonText: string;
  action: () => void;
} & BackgroundColorTypes;

export type ModalNavProps = {
  customActions?: CustomActionType[];
  endAction?: CustomActionType;
} & ModalNavigation;
