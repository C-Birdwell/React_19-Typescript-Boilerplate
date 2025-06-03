import type { CardModalProps } from "./index.types";
import { Card, Button, ModalNav } from "@/components";

export const CardModal: React.FC<CardModalProps> = ({
  title,
  sizeType = "medium",
  backgroundTheme = "light",
  children,
  modalIndex,
  modalIndexLength,
  onNext,
  onPrev,
  onDismiss,
}) => {
  const modalCardClassNames = [sizeType, backgroundTheme];
  return (
    <Card classNames={modalCardClassNames} parentName="modal">
      <div className="modal_card_header">
        <h3>{title}</h3>
        <Button
          onClick={onDismiss}
          buttonText="X"
          backgroundTheme={"danger"}
          parentName="modal_card_header"
        />
      </div>
      <div className="modal_card_content">{children}</div>
      <ModalNav
        modalIndex={modalIndex}
        modalIndexLength={modalIndexLength}
        onNext={onNext}
        onPrev={onPrev}
        onDismiss={onDismiss}
      />
    </Card>
  );
};
