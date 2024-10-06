import { USER_AUTH_STORAGE } from '@/constants/token';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IUserState {
    user: {
        name: string;
        email: string;
        phone: string;
        address: string;
        addressDetail: string;
    };
    setUserInfo: (data: IUserState['user']) => void;
}

export const useAuthStore = create(
    persist<IUserState>(
        (set) => ({
            user: {
                name: '',
                email: '',
                phone: '',
                address: '',
                addressDetail: '',
            },
            setUserInfo: (data: IUserState['user']) => set({ user: data }),
        }),
        {
            name: USER_AUTH_STORAGE,
        },
    ),
);
