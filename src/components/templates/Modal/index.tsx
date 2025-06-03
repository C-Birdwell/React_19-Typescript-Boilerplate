import { useState, type FC } from "react";

import { Backdrop, CardModal } from "@/components";
import { useAppSelector, useActionCreators } from "@/hooks";
import { modalRoutes } from "@/routes";

//import type { ModalProps } from "./index.types";
import { _modalReset, type RootState } from "@/store";

const actionCreators = { _modalReset };

export const Modal: FC = () => {
  const { visible, backgroundTheme } = useAppSelector(
    (state: RootState) => state.modal
  );
  const { _modalReset } = useActionCreators(actionCreators);

  const [modalIndex, setModalIndex] = useState(0);

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

  const { title, slide } = modalRoutes("demo")[modalIndex];
  const modalIndexLength = modalRoutes("demo").length;
  return (
    <div className="modal">
      <Backdrop backgroundTheme={backgroundTheme} onDismiss={onDismiss} />
      <CardModal
        title={title}
        sizeType="medium"
        backgroundTheme={backgroundTheme}
        modalIndex={modalIndex}
        modalIndexLength={modalIndexLength}
        onDismiss={onDismiss}
        onPrev={onPrev}
        onNext={onNext}
      >
        {slide}
      </CardModal>
    </div>
  );
};
