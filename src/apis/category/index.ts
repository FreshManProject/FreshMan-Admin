import { axiosDefault } from '..';
import { categoryListType } from '@/types/category';

export async function getCategory(): Promise<categoryListType> {
    try {
        const response = await axiosDefault.get('/products/categories');
        console.log(response.data);
        if (response.data) return response.data;
        throw new Error(
            `Unexpected response : ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        throw new Error('Failed to post category');
    }
}

export async function postCategory(data: { name: string }): Promise<void> {
    try {
        const response = await axiosDefault.post('/products/categories', data);

        if (response.data) return response.data;
    } catch (error) {
        throw new Error('카테고리 등록에 실패했습니다.');
    }
}

export async function putCategory(data: {
    categorySeq: number;
    name: string;
}): Promise<void> {
    try {
        const response = await axiosDefault.put(
            '/products/categories',
            data,
        );

        if (response.data) return response.data;
    } catch (error) {
        throw new Error('카테고리 수정에 실패했습니다.');
    }
}

export async function deleteCategory({categorySeq}: {
    categorySeq: number;
}): Promise<void> {
    try {
        const response = await axiosDefault.delete(
            `/products/categories/${categorySeq}`,
        );

        if (response.data) return response.data;
    } catch (error) {
        throw new Error('카테고리 삭제에 실패했습니다.');
    }
}
