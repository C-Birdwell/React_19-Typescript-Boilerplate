import type { ChangeEvent } from "react";

import type { PropsSpreadOperator } from "@/lib";

export type InputProps = {
  name: string;
  disabled?: boolean;
  type: string;
  value: string | number | "";
  placeholder?: string;
  onUpdate: (e: ChangeEvent<HTMLInputElement>) => void;
} & PropsSpreadOperator;
