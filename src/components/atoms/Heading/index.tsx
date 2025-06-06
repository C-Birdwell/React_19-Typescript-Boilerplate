import type { HeadingProps } from "./index.types";

export const Heading: React.FC<HeadingProps> = ({
  size,
  children,
  alignment,
}) => {
  switch (size) {
    case 1:
      return <h1 className={alignment}>{children}</h1>;
    case 2:
      return <h2 className={alignment}>{children}</h2>;
    case 3:
      return <h3 className={alignment}>{children}</h3>;
    case 4:
      return <h4 className={alignment}>{children}</h4>;
    case 5:
      return <h5 className={alignment}>{children}</h5>;
    case 6:
      return <h6 className={alignment}>{children}</h6>;
  }
};
