import { Navbar } from "@/components";

import { linksArray } from "./utils";
import type { HeaderProps } from "./index.types";

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={className}>
      Header
      <Navbar links={linksArray} className={className} />
    </header>
  );
};
