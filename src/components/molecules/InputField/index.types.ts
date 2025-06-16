import type { InputProps, LabelProps } from "../../atoms/index.types";

export type InputFieldProps = { placeholder?: string } & InputProps &
  LabelProps;
