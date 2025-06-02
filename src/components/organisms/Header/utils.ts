import type { NavLinkProps } from "@/components/index.types";
import {
  ThemeColorsTypes,
  TITLE_EXAMPLE,
  TITLE_HOME,
  URL_EXAMPLE,
  URL_HOME,
} from "@/constants";

const createLinkItem = (
  target: string,
  targetText: string,
  type: "text" | "button" = "text",
  backgroundTheme: (typeof ThemeColorsTypes)[number] = "primary"
) => ({
  target,
  targetText,
  type,
  backgroundTheme,
});
const homeLink = createLinkItem(URL_HOME, TITLE_HOME);
const exampleLink = createLinkItem(URL_EXAMPLE, TITLE_EXAMPLE);

export const linksArray: NavLinkProps[] = [
  homeLink,
  exampleLink,
  // {
  //   target: examplePageURL,
  //   targetText: "Example",
  //   type: "text",
  //   backgroundTheme: "primary",
  // },
];
