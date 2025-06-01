import type {
  PropChildren,
  PropsSpreadOperator,
  ClassNamesList,
  ParentClassName,
} from "@/lib";

export type CardProps = PropChildren &
  PropsSpreadOperator &
  ClassNamesList &
  ParentClassName;
