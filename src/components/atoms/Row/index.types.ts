import type { ThemeSizeTypes, ThemeScreenSizesTypes } from "@/constants";
import type {
  ClassNamesList,
  PropChildren,
  ParentClassName,
  ClassName,
} from "@/lib";

export type RowProps = {
  gutter?: (typeof ThemeSizeTypes)[number];
  breakPoint?: (typeof ThemeScreenSizesTypes)[number];
} & ParentClassName &
  ClassName &
  ClassNamesList &
  PropChildren &
  React.ComponentPropsWithoutRef<"div">;
