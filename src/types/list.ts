export interface ListType<T> {
    nextCursor: unknown;
    list: T[];
    count: number;
}
