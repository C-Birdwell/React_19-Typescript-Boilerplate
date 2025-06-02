import { Row, Button, Column } from "@/components";
import type { ModalNavProps } from "./index.types";

export const ModalNav: React.FC<ModalNavProps> = ({
  modalIndex,
  onNext,
  onPrev,
  customActions,
  endAction,
}) => {
  return (
    <div className="modal_card_nav">
      <Row>
        <Column>
          {modalIndex > 0 && (
            <Button
              buttonText="Back"
              onClick={onPrev}
              backgroundTheme="secondary"
            />
          )}
        </Column>
        <Column>
          <Button
            buttonText="Next"
            onClick={onNext}
            backgroundTheme="primary"
          />
        </Column>
      </Row>
    </div>
  );
};
