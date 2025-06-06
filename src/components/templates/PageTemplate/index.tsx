import { Card, Heading } from "@/components/atoms";
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
      <Card border parentName="page">
        <div className={`page_card_title`}>
          <Heading size={2}>{title}</Heading>
          <Heading size={3}>{subtitle}</Heading>
        </div>
        <section>{children}</section>
      </Card>
    </div>
  );
};
