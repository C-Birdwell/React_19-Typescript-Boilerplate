import type { LabelProps } from "./index.types";

export const Label: React.FC<LabelProps> = ({ labelText, name, ...rest }) => {
  return (
    <label htmlFor={name} {...rest}>
      {labelText}
    </label>
  );
};
