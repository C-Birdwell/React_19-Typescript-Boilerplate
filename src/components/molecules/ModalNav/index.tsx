import { Row, Button, Column } from "@/components";
import type { ModalNavProps } from "./index.types";
import { BREAKPOINT_PHONE } from "@/constants";
import type { RootState } from "@/store";
import { useStoreSelector } from "@/hooks";

export const ModalNav: React.FC<ModalNavProps> = ({
  modalIndex,
  modalIndexLength,
  onNext,
  onPrev,
  onDismiss,
  customActions = [],
  endAction,
}) => {
  const { width } = useStoreSelector((state: RootState) => state.interface);

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
      <Column key={id} classNames={["justify-center", "custom-action"]}>
        <Button
          buttonText={text}
          onClick={action}
          backgroundTheme={backgroundTheme}
        />
      </Column>
    );
  });

  const hasCustomActions =
    customActions !== null && customActions.length > 0
      ? `modal_card_nav modal_card_nav--custom-actions modal_card_nav--custom-actions-${customActions.length}`
      : "modal_card_nav";

  return (
    <div className={hasCustomActions}>
      {BREAKPOINT_PHONE > width &&
        customActions !== null &&
        customActions.length && (
          <Row className="modal_card_nav--custom-actions-mobile">
            {renderCustomActions}
          </Row>
        )}
      <Row>
        {modalIndexLength > 1 && (
          <Column classNames={["justify-center", "align-start"]}>
            {renderBackButton}
          </Column>
        )}

        {BREAKPOINT_PHONE < width && renderCustomActions}

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
