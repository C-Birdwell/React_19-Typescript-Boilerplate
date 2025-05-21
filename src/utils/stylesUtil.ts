export const setAppTheme = (color: "light" | "dark") => {
  document.documentElement.setAttribute("theme-mode", color);
};
