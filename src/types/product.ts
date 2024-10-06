import { ListType } from "./list";

export type productType = {
    name: string;
    price: number;
    description: string;
    brand: string;
    categorySeq: string;
    thumbnailImage: File;
    mainImages: File;
};

export interface ProductDetailType {
    productSeq: number;
    name: string;
    price: number;
    sale: {
        salePrice: number;
        saleRate: number;
    };
    description: string;
    brand: string;
    imageList: [];
}

export type productListType = ListType<productItemType>;

export interface productItemType {
    productSeq: number;
    name: string;
    price: number;
    brand: string;
    image: string;
    favorite: boolean;
    sale?: {
        salePrice: number;
        saleRate: number;
    };
}

export type filterType = 'price' | 'sort' | 'categorySeq';

export interface productListParamsType {
    categorySeq?: number;
    lowPrice?: number;
    highPrice?: number;
    sort?: string;
    keyword?: string;
}

