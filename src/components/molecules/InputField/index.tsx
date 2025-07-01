import { type FC, useState } from "react";

import { Input, Label } from "@/components";
import type { InputOnChangeEvent } from "@/lib";
import { useInputFieldErrors } from "@/hooks";
import { convertVariantClassNames, disabledClassName } from "@/utils";
import type { InputFieldProps } from "./index.types";

export const InputField: FC<InputFieldProps> = ({
  name,
  type,
  disabled = false,
  value,
  ruleValue,
  labelText,
  onUpdate,
  placeholder,
  dataMask,
  marginBottom = 0,
  errorRules = [],
}) => {
  const [hasInteracted, setHasInteracted] = useState(false);
  const checkValue = ruleValue ? ruleValue : value;
  const errors = useInputFieldErrors(checkValue, errorRules);
  const handleFocus = () => setHasInteracted(true);
  const handleBlur = () => setHasInteracted(true);
  const updateHandler = (e: InputOnChangeEvent) => {
    onUpdate(e);
    setHasInteracted(true);
  };
  return (
    <div
      className={convertVariantClassNames("input-field", [
        disabledClassName(disabled),
        hasInteracted && errors.length > 0 ? "error" : "",
      ])}
      style={{ marginBottom: marginBottom }}
    >
      <Label name={name} labelText={labelText} />
      <Input
        name={name}
        type={type}
        value={value}
        onUpdate={updateHandler}
        disabled={disabled}
        placeholder={placeholder}
        dataMask={dataMask}
        error={hasInteracted && !!errors.length}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {hasInteracted &&
        errors.map((msg) => (
          <p className="input-field_error-message" key={msg}>
            {msg}
          </p>
        ))}
    </div>
  );
};
