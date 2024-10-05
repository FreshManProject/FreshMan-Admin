import {
    deleteCategory,
    getCategory,
    postCategory,
    putCategory,
} from '@/apis/category';
import { useMutation, useQuery } from '@tanstack/react-query';

export function usePostCategory() {
    const { mutate: mutateCategory, isPending: isPendingMutateCategory } =
        useMutation({
            mutationFn: (data: { name: string }) => postCategory(data),
        });

    return {
        mutateCategory,
        isPendingMutateCategory,
    };
}

export function usePutCategory() {
    const { mutate: mutateCategory, isPending: isPendingMutateCategory } =
        useMutation({
            mutationFn: (data: { categorySeq: number; name: string }) =>
                putCategory(data),
        });

    return {
        mutateCategory,
        isPendingMutateCategory,
    };
}

export function useDeleteCategory() {
    const { mutate: mutateCategory, isPending: isPendingMutateCategory } =
        useMutation({
            mutationFn: (data: { categorySeq: number }) => deleteCategory(data),
        });

    return {
        mutateCategory,
        isPendingMutateCategory,
    };
}

export function useGetCategory() {
    const { data: category, isLoading: isLoadingCategory } = useQuery({
        queryKey: ['category'],
        queryFn: getCategory,
    });

    return {
        category,
        isLoadingCategory,
    };
}
