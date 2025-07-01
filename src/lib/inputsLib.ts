export type DataMaskConfig = {
  mask: string;
  replacement: { [key: string]: RegExp };
};

export type InputErrorRule = {
  rule: RegExp;
  message: string;
};
