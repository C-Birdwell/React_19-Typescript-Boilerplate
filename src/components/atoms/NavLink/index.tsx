import { useNavigate } from "react-router-dom";
import { Link } from "react-router";

import { Button } from "@/components";
import type { NavLinkProps } from "./index.types";

export const NavLink: React.FC<NavLinkProps> = ({
  target,
  targetText,
  type = "text",
  backgroundTheme = "primary",
}) => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`/${target}`);
  };

  const navLink = <Link to={target}>{targetText}</Link>;
  const navButton = (
    <Button
      buttonText={targetText}
      onClick={navigateHandler}
      backgroundTheme={backgroundTheme}
    />
  );
  return type === "text" ? navLink : navButton;
};
