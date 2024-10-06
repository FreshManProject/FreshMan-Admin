
import { deleteMember, getUserInfo, postMember, putMember, putMemberAddress } from '@/apis/user';
import { useAuthStore } from '@/store/user';
import { UserEditAddressType, UserEditType, UserType } from '@/types/user/registerUser';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

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

export function usePostJoinMember() {
    const navigate = useNavigate();
    const { setUserInfo } = useAuthStore();
    const { mutate: mutatePostJoinMember, isPending: isPendingPostJoinMember } =
        useMutation({
            mutationFn: async (data: UserType) => {
                await postMember(data);
                setUserInfo(data);
            },
            onSuccess: () => {
                navigate('/auth/success');
            },
            onError: () => {},
        });

    return {
        mutatePostJoinMember,
        isPendingPostJoinMember,
    };
}

export function useDeleteMember() {
    const navigate = useNavigate();
    const { mutate: mutateDeleteMember, isPending: isPendingDeleteMember } =
        useMutation({
            mutationFn: () => deleteMember(),
            onSuccess: () => {
                navigate('/login');
            },
            onError: () => {},
        });

    return {
        mutateDeleteMember,
        isPendingDeleteMember,
    };
}

export function usePutMember() {
    const { mutate: mutatePutMember, isPending: isPendingPutMember } =
        useMutation({
            mutationFn: (data: UserEditType) => putMember(data),
            onSuccess: () => {
                console.log('수정 완료');
            },
            onError: () => {},
        });

    return {
        mutatePutMember,
        isPendingPutMember,
    };
}

export function usePutMemberAddress() {
    const { mutate: mutatePutAddress, isPending: isPendingPutAddress } =
        useMutation({
            mutationFn: (data: UserEditAddressType) => putMemberAddress(data),
            onSuccess: () => {
                console.log('수정 완료');
            },
            onError: () => {},
        });

    return {
        mutatePutAddress,
        isPendingPutAddress,
    };
}
