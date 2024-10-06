import { UserEditAddressType, UserEditType, UserType } from "@/types/user/registerUser";
import { axiosAuth } from "..";

export async function getUserInfo(): Promise<Required<UserType>> {
    try {
        const response = await axiosAuth.get('/members');
        if (response.data) {
            return response.data.data;
        }
        throw new Error(
            `Unexpected response : ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        console.error(error);
        throw new Error('user 정보 불러오기에 실패했습니다');
    }
}

export async function postMember(data: UserType) {
    try {
        const response = await axiosAuth.post('/members', data);
        if (response.status !== 200) {
            return true;
        }
        throw new Error(
            `Unexpected response : ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function deleteMember() {
    try {
        const response = await axiosAuth.delete('/members');
        if (response.status !== 200) {
            return true;
        }
        throw new Error(
            `Unexpected response : ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function putMember(data: UserEditType) {
    try {
        const response = await axiosAuth.put('/members/personal-info', data);
        if (response.status !== 200) {
            return true;
        }
        throw new Error(
            `Unexpected response : ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function putMemberAddress(data: UserEditAddressType) {
    try {
        const response = await axiosAuth.put('/members/address', data);
        if (response.status !== 200) {
            return true;
        }
        throw new Error(
            `Unexpected response : ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        console.error(error);
        return null;
    }
}
