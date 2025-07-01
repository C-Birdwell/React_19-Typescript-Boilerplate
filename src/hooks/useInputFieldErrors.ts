import { useMemo } from "react";
import { getInputFieldErrors } from "@/utils/errorsUtil";
import type { InputErrorRule } from "@/lib";

export const useInputFieldErrors = (
  value: string | number | "" | undefined,
  errorRules: InputErrorRule[] = []
): string[] => {
  return useMemo(
    () => getInputFieldErrors(value, errorRules),
    [value, errorRules]
  );
};
