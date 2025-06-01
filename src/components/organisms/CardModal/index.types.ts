import type { BackdropProps } from "@/components/index.types";

export type CardModalProps = {
  title: string;
  sizeType: "small" | "medium" | "large";
} & BackdropProps;
