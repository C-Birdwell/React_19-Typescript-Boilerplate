import type { ActionType } from "./actionsLib";

export type ModalNavigation = {
  modalIndex: number;
  modalIndexLength: number;
  onNext: () => void;
  onPrev: () => void;
  onDismiss: () => void;
};

export type ModalRoute = {
  title: string;
  slide: React.ReactElement;
  id: string;
  customActions?: ActionType[] | null;
};
