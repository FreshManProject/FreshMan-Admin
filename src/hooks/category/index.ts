import { postCategory } from '@/apis/category';
import { useMutation } from '@tanstack/react-query';

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
