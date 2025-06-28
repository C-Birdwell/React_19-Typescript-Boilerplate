import type { InputProps, LabelProps } from "../../atoms/index.types";

import type { DataMaskConfig, MarginBottom } from "@/lib";

export type InputFieldProps = {
  placeholder?: string;
  dataMask?: DataMaskConfig;
} & InputProps &
  LabelProps &
  MarginBottom;
