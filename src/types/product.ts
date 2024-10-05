export type productType = {
    name: string;
    price: number;
    description: string;
    brand: string;
    categorySeq: string;
    thumbnailImage: File;
    mainImages: File;
};

// export type filterType = 'price' | 'sort' | 'categorySeq';

// export interface productListParamsType {
//     categorySeq?: number;
//     lowPrice?: number;
//     highPrice?: number;
//     sort?: string;
//     keyword?: string;
// }

// export type productListType = {
//     list: productItemType[];
//     count: number;
// };
