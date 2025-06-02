import type { BackgroundTheme, ModalNavigation } from "@/lib";

type CustomActionType = {
  buttonText: string;
  action: () => void;
} & BackgroundTheme;

export type ModalNavProps = {
  customActions?: CustomActionType[];
  endAction?: CustomActionType;
} & ModalNavigation;
