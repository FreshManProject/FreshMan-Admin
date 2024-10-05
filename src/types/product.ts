export type productType = {
    name: string;
    price: number;
    description: string;
    brand: string;
    categorySeq: string;
    thumbnailImage: File;
    mainImages: File;
};

export type categoriesType = {
    seq: number;
    name: string;
};