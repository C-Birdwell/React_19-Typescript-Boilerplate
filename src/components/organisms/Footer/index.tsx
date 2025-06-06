import type { FooterProps } from "./index.types";
import { Button, Row, Column } from "@/components";
import { setAppTheme } from "@/utils";

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const buttonHandlerLight = () => {
    setAppTheme("light");
  };

  const buttonHandlerDark = () => {
    setAppTheme("dark");
  };

  return (
    <footer className={className}>
      <Row classNames={["theme"]}>
        <Column classNames={["justify-center", "align-center"]}>
          <Button
            buttonText="Light Theme"
            onClick={buttonHandlerLight}
            backgroundTheme="light"
          />
        </Column>
        <Column classNames={["justify-center", "align-center"]}>
          <Button
            buttonText="Dark Theme"
            onClick={buttonHandlerDark}
            backgroundTheme="dark"
          />
        </Column>
      </Row>
    </footer>
  );
};
