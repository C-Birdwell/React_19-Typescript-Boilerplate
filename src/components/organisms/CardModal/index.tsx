import type { CardModalProps } from "./index.types";
import { Card } from "@/components";

export const CardModal: React.FC<CardModalProps> = ({
  title,
  sizeType = "medium",
  backgroundTheme = "light",
  children,
}) => {
  const modalCardClassNames = [sizeType, backgroundTheme];

  return (
    <Card classNames={modalCardClassNames} parentName="modal">
      <div className="modal_card_header">
        <h3>{title}</h3>
      </div>
      <div className="modal_card_content">{children}</div>
    </Card>
  );
};
