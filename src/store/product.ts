import { PRODUCT_STORAGE } from '@/constants/storage';
import { ProductDetailType } from '@/types/product';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface stateType extends ProductDetailType {
    setProduct: (data: ProductDetailType) => void;
}

export const useProductStore = create(
    persist<stateType>(
        (set) => ({
            productSeq: 0,
            name: '',
            price: 0,
            sale: {
                salePrice: 0,
                saleRate: 0,
            },
            description: '',
            brand: '',
            imageList: [],
            setProduct: (data: ProductDetailType) => set(data),
        }),
        { name: PRODUCT_STORAGE },
    ),
);
