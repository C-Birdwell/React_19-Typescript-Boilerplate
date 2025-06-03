import { Navbar, Row, Column, Logo } from "@/components";

import { linksArray } from "./utils";
import type { HeaderProps } from "./index.types";

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={className}>
      <Row parentName="header">
        <Column classNames={["justify_center", "align_start"]}>
          <Logo />
        </Column>
        <Column size={4} classNames={["align_end"]}>
          <Navbar links={linksArray} className={className} />
        </Column>
      </Row>
    </header>
  );
};
