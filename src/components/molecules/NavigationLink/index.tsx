import { useNavigate } from "react-router-dom";
import { Link } from "react-router";

import { Button } from "@/components";
import type { NavigationLinkProps } from "./index.types";

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  target,
  targetText,
  type = "text",
}) => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`/${target}`);
  };

  const navLink = <Link to={target}>{targetText}</Link>;
  const navButton = (
    <Button buttonText={targetText} onClick={navigateHandler} />
  );
  return type === "text" ? navLink : navButton;
};
