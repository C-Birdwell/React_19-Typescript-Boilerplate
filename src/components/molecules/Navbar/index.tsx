import type { NavbarProps } from "./index.types";

import { NavLink, Column } from "@/components";

export const Navbar: React.FC<NavbarProps> = ({ links, className }) => {
  const linksMapped = links.map((link) => {
    const { target, targetText, type } = link;
    return (
      <Column
        key={`${className}-${targetText}`}
        classNames={["justify-center"]}
      >
        <NavLink target={target} targetText={targetText} type={type} />
      </Column>
    );
  });

  return <nav>{linksMapped}</nav>;
};
