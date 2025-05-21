import type { NavigationLinkProps } from "@/components/index.types";
import { homePageURL, examplePageURL } from "@/constants";

export const linksArray: NavigationLinkProps[] = [
  { target: homePageURL, targetText: "Home", type: "text" },
  { target: examplePageURL, targetText: "Example", type: "text" },
];
