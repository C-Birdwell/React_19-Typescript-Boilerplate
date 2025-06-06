import { Row, Button, Column } from "@/components";
import type { ModalNavProps } from "./index.types";

export const ModalNav: React.FC<ModalNavProps> = ({
  modalIndex,
  modalIndexLength,
  onNext,
  onPrev,
  onDismiss,
  customActions = [],
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
            backgroundTheme="danger"
          />
        );
      }
    }

    return <></>;
  };

  const renderCustomActions = customActions?.map((custom) => {
    const { backgroundTheme, text, action, id } = custom;
    return (
      <Column key={id} classNames={["justify-center", "align-center"]}>
        <Button
          buttonText={text}
          onClick={action}
          backgroundTheme={backgroundTheme}
        />
      </Column>
    );
  });

  return (
    <div className="modal_card_nav">
      <Row>
        {modalIndexLength > 1 && (
          <Column classNames={["justify-center", "align-start"]}>
            {renderBackButton}
          </Column>
        )}

        <Column size={3} classNames={["align-center"]}>
          <Row>{renderCustomActions}</Row>
        </Column>
        {modalIndexLength > 1 && (
          <Column classNames={["justify-center", "align-end"]}>
            {renderNextButton}
            {renderDismissButton()}
          </Column>
        )}
      </Row>
    </div>
  );
};
