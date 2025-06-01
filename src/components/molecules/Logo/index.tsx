import type { LogoProps } from "./index.types";
import { logo } from "@/assets";

export const Logo: React.FC<LogoProps> = () => {
  const envTitle = import.meta.env.VITE_API_TITLE;

  return <img src={logo} className="logo" alt={`Logo for ${envTitle}`} />;
};
