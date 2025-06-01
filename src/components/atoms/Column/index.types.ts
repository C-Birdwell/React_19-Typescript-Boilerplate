import type { ClassNamesList, PropChildren, ParentClassName } from "@/lib";

export type ColumnProps = { size?: number } & ParentClassName &
  ClassNamesList &
  PropChildren &
  React.ComponentPropsWithoutRef<"div">;
