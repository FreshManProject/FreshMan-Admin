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
    const { mutate: putMutateCategory, isPending: isPendingPutMutateCategory } =
        useMutation({
            mutationFn: (data: { categorySeq: number; name: string }) =>
                putCategory(data),
        });

    return {
        putMutateCategory,
        isPendingPutMutateCategory,
    };
}

export function useDeleteCategory() {
    const {
        mutate: deleteMutateCategory,
        isPending: isPendingDeleteMutateCategory,
    } = useMutation({
        mutationFn: (data: { categorySeq: number }) => deleteCategory(data),
    });

    return {
        deleteMutateCategory,
        isPendingDeleteMutateCategory,
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
