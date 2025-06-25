import { Column, Button } from "@/components";
import type { ModalDemoButtonProps } from "./index.types";

export const ModalDemoButton: React.FC<ModalDemoButtonProps> = ({
  buttonText,
  onClick,
  backgroundTheme,
  alignment = "",
  marginBottom = 0,
}) => {
  let alignmentClass = "";

  switch (alignment) {
    case "left":
      alignmentClass = "align-start";
      break;
    case "right":
      alignmentClass = "align-end";
      break;
    default:
      alignmentClass = "align-center";
  }

  return (
    <Column classNames={[alignmentClass, "justify-center"]}>
      <Button
        buttonText={buttonText}
        onClick={onClick}
        backgroundTheme={backgroundTheme}
        marginBottom={marginBottom}
      />
    </Column>
  );
};
