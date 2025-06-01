import { type PageDefaultProps } from "./index.types";
import { convertVariantClassNames } from "@/utils";

export const PageTemplate: React.FC<PageDefaultProps> = ({
  title,
  subtitle,
  children,
}) => {
  const classNames = `${convertVariantClassNames("page", [
    title.toLowerCase(),
  ])}`;
  return (
    <div className={classNames}>
      <div className={`page_title`}>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </div>
      <section>{children}</section>
    </div>
  );
};
