import { Row, Button, Column } from "@/components";
import type { ModalNavProps } from "./index.types";

export const ModalNav: React.FC<ModalNavProps> = ({
  modalIndex,
  modalIndexLength,
  onNext,
  onPrev,
  onDismiss,
  customActions,
  endAction,
}) => {
  const renderBackButton = modalIndex > 0 && (
    <Button buttonText="Back" onClick={onPrev} backgroundTheme="secondary" />
  );

  const renderNextButton = modalIndex < modalIndexLength - 1 && (
    <Button buttonText="Next" onClick={onNext} backgroundTheme="primary" />
  );

  const renderDismissButton = () => {
    if (modalIndex === modalIndexLength - 1) {
      console.log(endAction);
      if (endAction !== undefined) {
        return (
          <Button
            buttonText={endAction.text}
            onClick={endAction.action}
            backgroundTheme={endAction.backgroundTheme}
          />
        );
      } else {
        return (
          <Button
            buttonText="Close"
            onClick={onDismiss}
            backgroundTheme="dark"
          />
        );
      }
    }

    return <></>;
  };

  return (
    <div className="modal_card_nav">
      <Row>
        <Column>{renderBackButton}</Column>
        <Column size={3}></Column>
        <Column>
          {renderNextButton}
          {renderDismissButton()}
        </Column>
      </Row>
    </div>
  );
};
