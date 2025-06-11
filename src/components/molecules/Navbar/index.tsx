import type { NavbarProps } from "./index.types";
import { NavLink, Column } from "@/components";

export const Navbar: React.FC<NavbarProps> = ({
  links,
  parentName,
  onDismiss,
}) => {
  const linksMapped = links.map((link) => {
    const { target, targetText, type, backgroundTheme } = link;
    return (
      <Column
        key={`${parentName}-${targetText}`}
        classNames={["align-center", "justify-center"]}
      >
        <NavLink
          target={target}
          targetText={targetText}
          type={type}
          backgroundTheme={backgroundTheme}
          onDismiss={onDismiss}
        />
      </Column>
    );
  });

  return <nav className={`${parentName}_navbar`}>{linksMapped}</nav>;
};
