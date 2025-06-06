import type {
  ClassNamesList,
  PropChildren,
  ParentClassName,
  ClassName,
} from "@/lib";

export type RowProps = ParentClassName &
  ClassName &
  ClassNamesList &
  PropChildren &
  React.ComponentPropsWithoutRef<"div">;
