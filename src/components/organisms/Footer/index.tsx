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
      <Row>
        <Column>
          <Button buttonText="Light Theme" onClick={buttonHandlerLight} />
        </Column>
        <Column>
          <Button buttonText="Dark Theme" onClick={buttonHandlerDark} />
        </Column>
      </Row>
    </footer>
  );
};
