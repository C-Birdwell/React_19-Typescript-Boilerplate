import { useNavigate, Link } from "react-router-dom";

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

  const navigateHandler = () => {
    navigate(`/${target}`);
    onDismiss?.();
  };

  const navLink = (
    <Link to={target} onClick={onDismiss}>
      {targetText}
    </Link>
  );
  const navButton = (
    <Button
      buttonText={targetText}
      onClick={navigateHandler}
      backgroundTheme={backgroundTheme}
    />
  );
  return type === "text" ? navLink : navButton;
};
