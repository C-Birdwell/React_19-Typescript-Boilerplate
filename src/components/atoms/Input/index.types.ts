import type { ChangeEvent } from "react";

import type { PropsSpreadOperator, DataMaskConfig } from "@/lib";

export type InputProps = {
  name: string;
  disabled?: boolean;
  type: string;
  value: string | number | "" | undefined;
  placeholder?: string;
  dataMask?: DataMaskConfig;
  onUpdate: (e: ChangeEvent<HTMLInputElement>) => void;
} & PropsSpreadOperator;
