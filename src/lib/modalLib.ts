import type { ActionType, OnDismiss } from "./index";

export type ModalNavigation = {
  modalIndex: number;
  modalIndexLength: number;
  onNext: () => void;
  onPrev: () => void;
} & OnDismiss;

export type ModalRoute = {
  title: string;
  slide: React.ReactElement;
  id: string;
  customActions?: ActionType[] | null;
};
