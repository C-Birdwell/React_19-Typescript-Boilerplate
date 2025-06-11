import type { ThemeSizeTypes } from "@/constants";
import type {
  ClassNamesList,
  PropChildren,
  ParentClassName,
  ClassName,
} from "@/lib";

export type RowProps = {
  gutter?: (typeof ThemeSizeTypes)[number];
} & ParentClassName &
  ClassName &
  ClassNamesList &
  PropChildren &
  React.ComponentPropsWithoutRef<"div">;
