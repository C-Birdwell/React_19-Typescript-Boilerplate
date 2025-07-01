import type { InputProps, LabelProps } from "../../atoms/index.types";

import type { DataMaskConfig, MarginBottom, InputErrorRule } from "@/lib";

export type InputFieldProps = {
  placeholder?: string;
  dataMask?: DataMaskConfig;
  errorRules?: InputErrorRule[];
} & InputProps &
  LabelProps &
  MarginBottom;
