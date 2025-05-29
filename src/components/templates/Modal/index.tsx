import { Backdrop } from "@/components";
import { useAppSelector, useActionCreators } from "@/hooks";

//import type { ModalProps } from "./index.types";
import { _modalSetVisible, type RootState } from "@/store";

const actionCreators = { _modalSetVisible };

export const Modal: React.FC = () => {
  const { visible, backgroundTheme } = useAppSelector(
    (state: RootState) => state.modal
  );
  const { _modalSetVisible } = useActionCreators(actionCreators);

  if (!visible) {
    return <></>;
  }

  const dismissHandler = () => {
    _modalSetVisible(false);
  };

  return (
    <div className="modal">
      <Backdrop backgroundTheme={backgroundTheme} onDismiss={dismissHandler} />
    </div>
  );
};
