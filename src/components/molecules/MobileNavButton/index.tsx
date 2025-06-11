import type { MobileNavButtonProps } from "./index.types";

export const MobileNavButton: React.FC<MobileNavButtonProps> = ({
  isActive,
  onPress,
}) => {
  const classNameActive = isActive ? "open" : "closed";

  return (
    <button
      className={`mobile-nav_button mobile-nav_button--${classNameActive}`}
      onClick={onPress}
      aria-label={`Mobile navigation menu is ${classNameActive}.`}
    >
      <div className="mobile-nav_button_bar mobile-nav_button_bar--1" />
      <div className="mobile-nav_button_bar mobile-nav_button_bar--2" />
      <div className="mobile-nav_button_bar mobile-nav_button_bar--3" />
    </button>
  );
};
