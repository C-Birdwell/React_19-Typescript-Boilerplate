import { Input, Label } from "@/components";
import { convertVariantClassNames, disabledClassName } from "@/utils";
import type { InputFieldProps } from "./index.types";

export const InputField: React.FC<InputFieldProps> = ({
  name,
  type,
  disabled = false,
  value,
  labelText,
  onUpdate,
  placeholder,
  dataMask,
}) => {
  return (
    <div
      className={convertVariantClassNames("input-field", [
        disabledClassName(disabled),
      ])}
    >
      <Label name={name} labelText={labelText} />
      <Input
        name={name}
        type={type}
        value={value}
        onUpdate={onUpdate}
        disabled={disabled}
        placeholder={placeholder}
        dataMask={dataMask}
      />
    </div>
  );
};
