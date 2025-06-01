import { Navbar, Row, Column, Logo } from "@/components";

import { linksArray } from "./utils";
import type { HeaderProps } from "./index.types";

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={className}>
      <Row parentName="header">
        <Column classNames={["justify-center"]}>
          <Logo />
        </Column>
        <Column size={4}>
          <Navbar links={linksArray} className={className} />
        </Column>
      </Row>
    </header>
  );
};
