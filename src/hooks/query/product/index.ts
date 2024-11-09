import {
    deleteProduct,
    getInfiniteProductList,
    getProductDetail,
    postProduct,
} from '@/apis/product';
import { productListType } from '@/types/product';
import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';

export function usePostProduct() {
    const { mutate: mutateProduct, isPending: isPendingMutateProduct } =
        useMutation({
            mutationFn: (data: FormData) => postProduct(data),
        });

    return {
        mutateProduct,
        isPendingMutateProduct,
    };
}

export function useGetCategoryProductList(categorySeq: number) {
    return useInfiniteQuery<productListType, Error>({
        queryKey: ['categoryProductList'],
        queryFn: ({ pageParam }) =>
            getInfiniteProductList({ pageParam, categorySeq }),
        initialPageParam: 0,
        getNextPageParam: (lastPage, _) => lastPage.nextCursor,
    });
}

export function useDeleteProduct() {
    const { mutate: mutateDeleteProduct, isPending: isPendingDeleteProduct } =
        useMutation({
            mutationFn: (productSeq: number) => deleteProduct(productSeq),
        });

    return {
        mutateDeleteProduct,
        isPendingDeleteProduct,
    };
}

export function usePutProduct() {
    const { mutate: mutateProduct, isPending: isPendingMutateProduct } =
        useMutation({
            mutationFn: (data: FormData) => postProduct(data),
        });

    return {
        mutateProduct,
        isPendingMutateProduct,
    };
}

export function useGetProductDetail(productSeq: number) {
    const {
        data: productInfo,
        isLoading: isLoadingProductInfo,
        isError: isErrorProductInfo,
    } = useQuery({
        queryKey: [`productDetail${productSeq}`],
        queryFn: () => getProductDetail(productSeq),
    });
    return {
        productInfo,
        isErrorProductInfo,
        isLoadingProductInfo,
    };
}