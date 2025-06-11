export type OnCreate<T> = { [K: string]: () => T };
export type OnDelete = { onDelete: (id: number) => void };
export type OnDismiss = { onDismiss: () => void | null };

export type ClassNamesList = { classNames?: string[] };
export type ParentClassName = { parentName?: string };
