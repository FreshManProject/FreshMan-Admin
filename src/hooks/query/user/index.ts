import { getUserInfo, postAdmin } from "@/apis/user";
import { useAuthStore } from "@/store/user";
import { AdminType } from "@/types/user/registerUser";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useGetUserInfo(status = true) {
    const {
        data: userInfo,
        isLoading: isLoadingUserInfo,
        isError: isErrorUserInfo,
    } = useQuery({
        queryKey: [`user`],
        queryFn: () => getUserInfo(),
        enabled: status,
    });
    return {
        userInfo,
        isLoadingUserInfo,
        isErrorUserInfo,
    };
}

export function usePostAdmin() {
    const navigate = useNavigate();
    const { setUserInfo } = useAuthStore();
    const { mutate: mutatePostAdmin, isPending: isPendingPostAdmin } =
        useMutation({
            mutationFn: async (data: AdminType) => {
                await postAdmin(data);
                setUserInfo(data);
            },
            onSuccess: () => {
                navigate('/');
            },
            onError: () => {},
        });

    return {
        mutatePostAdmin,
        isPendingPostAdmin,
    };
}
