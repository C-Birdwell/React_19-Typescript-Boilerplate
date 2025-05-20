export type ActionCreators<
  T extends { [key: string]: (...args: unknown[]) => unknown }
> = T;
