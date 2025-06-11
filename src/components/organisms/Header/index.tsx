import { useState, type FC } from "react";
import {
  MobileNav,
  MobileNavButton,
  Navbar,
  Backdrop,
  Row,
  Column,
  Logo,
} from "@/components";
import { useStoreSelector } from "@/hooks";

import { linksArray } from "./utils";
import type { HeaderProps } from "./index.types";
import type { RootState } from "@/store";
import { BREAKPOINT_TABLET } from "@/constants";

export const Header: FC<HeaderProps> = ({ className }) => {
  const { width } = useStoreSelector((state: RootState) => state.interface);
  const [isActive, setIsActive] = useState(false);

  const clickHandler = () => {
    setIsActive((state) => !state);
  };

  const onDismiss = () => {
    setIsActive(false);
  };

  const desktopLayout = width > BREAKPOINT_TABLET;

  return (
    <>
      <header className={className}>
        <Row parentName="header">
          <Column classNames={["justify-center", "align-start"]}>
            <Logo onDismiss={onDismiss} />
          </Column>
          <Column size={4} classNames={["justify-center", "align-end"]}>
            {desktopLayout ? (
              <Navbar
                links={linksArray}
                parentName={className}
                onDismiss={() => {}}
              />
            ) : (
              <MobileNavButton onPress={clickHandler} isActive={isActive} />
            )}
          </Column>
        </Row>
      </header>
      {isActive && !desktopLayout && (
        <>
          <Backdrop
            backgroundTheme=""
            className="mobile"
            onDismiss={onDismiss}
          />
          <MobileNav links={linksArray} onDismiss={onDismiss} />
        </>
      )}
    </>
  );
};
