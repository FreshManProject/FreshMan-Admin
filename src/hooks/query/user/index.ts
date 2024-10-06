import { getUserQnaList } from '@/apis/qna';
import {
    deleteMember,
    getInfiniteLikedList,
    getUserInfo,
    postMember,
    putMember,
    putMemberAddress,
} from '@/apis/user';
import { pageSize } from '@/constants/infinitescroll';
import { useAuthStore } from '@/store/user';
import { productListType } from '@/types/Product/productList';
import { QnaListType } from '@/types/User/qna';
import {
    UserEditAddressType,
    UserEditType,
    UserType,
} from '@/types/User/registerUser';
import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
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

export function useGetUserQnaList() {
    return useInfiniteQuery<QnaListType, Error>({
        queryKey: ['myQnaList'],
        queryFn: getUserQnaList,
        initialPageParam: undefined,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = allPages.length + 1;
            // 상품이 0개이거나 rowsPerPage보다 작을 경우 마지막 페이지로 인식한다.
            return lastPage?.count === 0 || lastPage?.count < pageSize
                ? undefined
                : nextPage;
        },
        retry: 0,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
    });
}

export function useGetInfiniteLikedList() {
    return useInfiniteQuery<productListType, Error>({
        queryKey: ['LikeList'],
        queryFn: getInfiniteLikedList,
        initialPageParam: undefined,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = allPages.length + 1;
            // 상품이 0개이거나 rowsPerPage보다 작을 경우 마지막 페이지로 인식한다.
            return lastPage?.count === 0 || lastPage?.count < pageSize
                ? undefined
                : nextPage;
        },
        retry: 0,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
    });
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
