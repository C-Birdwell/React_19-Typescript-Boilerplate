import { useNavigate, Link } from "react-router";

import { Button } from "@/components";
import type { NavLinkProps } from "./index.types";

export const NavLink: React.FC<NavLinkProps> = ({
  target,
  targetText,
  type = "text",
  backgroundTheme = "primary",
  onDismiss,
}) => {
  const navigate = useNavigate();

  const linkHandler = () => {
    window.scrollTo(0, 0);
    onDismiss?.();
  };

  const buttonHandler = () => {
    linkHandler();
    navigate(`/${target}`);
  };

  const navLink = (
    <Link to={target} onClick={linkHandler}>
      {targetText}
    </Link>
  );
  const navButton = (
    <Button
      buttonText={targetText}
      onClick={buttonHandler}
      backgroundTheme={backgroundTheme}
    />
  );
  return type === "text" ? navLink : navButton;
};
