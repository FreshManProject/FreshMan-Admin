import { getInfiniteProductList, postProduct } from "@/apis/product";
import { productListType } from "@/types/product";
import { useInfiniteQuery, useMutation } from "@tanstack/react-query";


export function usePostProduct() {
    const { mutate: mutateProduct, isPending: isPendingMutateProduct } =
        useMutation({
            mutationFn: (data: FormData) =>
                postProduct(data),
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
