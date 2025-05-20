export type OnCreate<T> = { [K: string]: () => T };
export type OnDelete = { onDelete: (id: number) => void };
