import { postProduct } from "@/apis/product";
import { useMutation } from "@tanstack/react-query";


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
