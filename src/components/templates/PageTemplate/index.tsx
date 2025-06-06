import { type PageDefaultProps } from "./index.types";
import { convertVariantClassNames } from "@/utils";

export const PageTemplate: React.FC<PageDefaultProps> = ({
  title,
  subtitle,
  children,
}) => {
  const classNames = `${convertVariantClassNames("page", [title])}`;
  return (
    <div className={classNames}>
      <div className={`page_title`}>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
      <section>{children}</section>
    </div>
  );
};
