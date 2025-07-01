import type { InputErrorRule } from "@/lib";

export const getInputFieldErrors = (
  value: string | number | "" | undefined,
  errorRules: InputErrorRule[] = []
): string[] => {
  if (!errorRules.length) return [];
  return errorRules
    .filter((rule) => rule.rule.test(String(value)))
    .map((rule) => rule.message);
};
