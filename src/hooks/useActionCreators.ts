import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import type { ActionCreators } from "./types";

export const useActionCreators = <
  T extends { [key: string]: (...args: unknown[]) => unknown }
>(
  actionCreators: ActionCreators<T>
): T => {
  const dispatch = useDispatch();
  const actions = useMemo(
    () => bindActionCreators(actionCreators, dispatch),
    [dispatch, actionCreators]
  );

  return actions;
};
