import { ListType } from "./list";

export type categoryType = {
    categorySeq: number;
    name: string;
};

export type categoryListType = ListType<categoryType>;