import type { NavLinkProps } from "@/components/index.types";
import {
  ThemeColorsTypes,
  TITLE_CARDS,
  TITLE_HOME,
  TITLE_MODALS,
  URL_CARDS,
  URL_HOME,
  URL_MODALS,
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
  onDismiss: () => {},
});
const homeLink = createLinkItem(URL_HOME, TITLE_HOME);
const modalLink = createLinkItem(URL_MODALS, TITLE_MODALS);
const cardsLink = createLinkItem(URL_CARDS, TITLE_CARDS);

export const linksArray: NavLinkProps[] = [homeLink, modalLink, cardsLink];
