import { AdminType, LoginAdminType } from '@/types/user/registerUser';
import { axiosAuth } from "..";

export async function getUserInfo(): Promise<Required<AdminType>> {
    try {
        const response = await axiosAuth.get('/admin');
        if (response.data) {
            return response.data.data;
        }
        throw new Error(
            `Unexpected response : ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        console.error(error);
        throw new Error('admin 정보 불러오기에 실패했습니다');
    }
}

export async function postAdmin(data: AdminType) {
    try {
        const response = (await axiosAuth.post('/admin/login', data)).data;
        if (response.status === 200) {
            return response.data;
        }
        throw new Error(
            `Unexpected response : ${response.status} ${response.message}`,
        );
    } catch (error) {
        console.error(error);
        return null;
    }
}
