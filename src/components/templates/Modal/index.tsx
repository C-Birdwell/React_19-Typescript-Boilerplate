import { Backdrop, CardModal } from "@/components";
import { useAppSelector, useActionCreators } from "@/hooks";

//import type { ModalProps } from "./index.types";
import { _modalReset, type RootState } from "@/store";

const actionCreators = { _modalReset };

export const Modal: React.FC = () => {
  const { visible, backgroundTheme } = useAppSelector(
    (state: RootState) => state.modal
  );
  const { _modalReset } = useActionCreators(actionCreators);

  if (!visible) {
    return <></>;
  }

  const dismissHandler = () => {
    _modalReset();
  };

  return (
    <div className="modal">
      <Backdrop backgroundTheme={backgroundTheme} onDismiss={dismissHandler} />
      <CardModal
        title="FOo Bar"
        sizeType="medium"
        backgroundTheme={backgroundTheme}
      >
        <p>Hello World</p>
      </CardModal>
    </div>
  );
};
