import type { NavLinkProps } from "@/components/index.types";
import {
  ThemeColorsTypes,
  TITLE_CARDS,
  TITLE_HOME,
  TITLE_MODALS,
  TITLE_REDUX,
  URL_CARDS,
  URL_HOME,
  URL_MODALS,
  URL_REDUX,
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
const reduxLink = createLinkItem(URL_REDUX, TITLE_REDUX);

export const linksArray: NavLinkProps[] = [
  homeLink,
  cardsLink,
  modalLink,
  reduxLink,
];
