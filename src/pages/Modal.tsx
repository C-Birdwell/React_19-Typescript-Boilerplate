import { useState, type FC } from "react";
import { useNavigate } from "react-router";

import { Backdrop, ModalTemplate } from "@/components";
import { useStoreSelector, useActionCreators } from "@/hooks";
import { modalRoutes } from "@/routes";

//import type { ModalProps } from "./index.types";
import { _modalReset, type RootState } from "@/store";

const actionCreators = { _modalReset };

export const Modal: FC = () => {
  const { visible, backgroundTheme, modalRoute } = useStoreSelector(
    (state: RootState) => state.modal
  );
  const { _modalReset } = useActionCreators(actionCreators);

  const [modalIndex, setModalIndex] = useState(0);
  const navigate = useNavigate();

  if (!visible) {
    return <></>;
  }

  const onDismiss = () => {
    _modalReset();
    setModalIndex(0);
  };

  const onPrev = () => {
    setModalIndex((modalIndex) => modalIndex - 1);
  };

  const onNext = () => {
    setModalIndex((modalIndex) => modalIndex + 1);
  };

  const renderModalContent = modalRoutes(modalRoute, navigate, onDismiss);

  const { title, slide, customActions } = renderModalContent[modalIndex];
  const modalIndexLength = renderModalContent.length;
  return (
    <div className="modal">
      <Backdrop backgroundTheme={backgroundTheme} onDismiss={onDismiss} />
      <ModalTemplate
        title={title}
        sizeType="medium"
        backgroundTheme={backgroundTheme}
        modalIndex={modalIndex}
        modalIndexLength={modalIndexLength}
        onDismiss={onDismiss}
        onPrev={onPrev}
        onNext={onNext}
        customActions={customActions}
      >
        {slide}
      </ModalTemplate>
    </div>
  );
};
