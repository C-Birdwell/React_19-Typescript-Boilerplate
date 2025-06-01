import type { ClassNamesList, PropChildren, ParentClassName } from "@/lib";

export type RowProps = ParentClassName &
  ClassNamesList &
  PropChildren &
  React.ComponentPropsWithoutRef<"div">;
