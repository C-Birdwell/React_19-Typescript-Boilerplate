import type { BackdropProps, ModalNavProps } from "@/components/index.types";
import type { CustomActions } from "@/lib";

export type ModalTemplateProps = {
  title: string;
  sizeType: "small" | "medium" | "large";
} & BackdropProps &
  ModalNavProps &
  CustomActions;
