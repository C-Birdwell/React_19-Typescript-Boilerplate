import { Navbar } from "../Navbar";
import type { MobileNavProps } from "./index.types";

export const MobileNav: React.FC<MobileNavProps> = ({ links, onDismiss }) => {
  return (
    <div className="mobile-nav_container">
      <Navbar
        links={links}
        parentName="mobile-nav_container"
        onDismiss={onDismiss}
      />
    </div>
  );
};
