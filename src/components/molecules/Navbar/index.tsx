import type { NavbarProps } from "./index.types";

import { NavigationLink } from "@/components";

export const Navbar: React.FC<NavbarProps> = ({ links, className }) => {
  const linksMapped = links.map((link) => {
    const { target, targetText, type } = link;
    return (
      <NavigationLink
        target={target}
        targetText={targetText}
        type={type}
        key={`${className}-${targetText}`}
      />
    );
  });

  return <nav>{linksMapped}</nav>;
};
