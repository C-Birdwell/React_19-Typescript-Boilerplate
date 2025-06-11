import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import type { ActionCreators } from "./index.types";

export const useActionCreators = <
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends { [key: string]: (...args: any[]) => unknown }
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
