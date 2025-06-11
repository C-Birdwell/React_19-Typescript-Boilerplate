import { useNavigate } from "react-router-dom";
import type { LogoProps } from "./index.types";
import { logo } from "@/assets";
import { URL_HOME } from "@/constants";

export const Logo: React.FC<LogoProps> = ({ onDismiss }) => {
  const envTitle = import.meta.env.VITE_API_TITLE;
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate(URL_HOME);
  };

  return (
    <div className="logo" onClick={onDismiss}>
      <img onClick={navigateHandler} src={logo} alt={`Logo for ${envTitle}.`} />
    </div>
  );
};
