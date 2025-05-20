import { Navbar } from "@/components";
import type { NavigationLinkProps } from "@/components/index.types";
import { headerCLS, homePageURL, examplePageURL } from "@/constants";

const linksArray: NavigationLinkProps[] = [
  { target: homePageURL, targetText: "Home", type: "text" },
  { target: examplePageURL, targetText: "Example", type: "text" },
];

export const Header: React.FC = () => {
  return (
    <header className={headerCLS}>
      Header
      <Navbar links={linksArray} />
    </header>
  );
};
