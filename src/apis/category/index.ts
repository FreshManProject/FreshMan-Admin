import { axiosAuth } from '..';
import { categoryListType } from '@/types/category';

export async function getCategory(): Promise<categoryListType> {
    try {
        const response = await axiosAuth.get('/products/categories');

        if (response.data.status === 200) return response.data;

        throw new Error(`${response.data.status} ${response.data.message}`);
    } catch (error) {
        throw new Error(`${error}\n카테고리 목록을 불러오는데 실패했습니다.`);
    }
}

export async function postCategory(data: { name: string }): Promise<void> {
    try {
        const response = await axiosAuth.post('/products/categories', data);

        if (response.data.status === 200) return response.data;

        throw new Error(`${response.data.status} ${response.data.message}`);
    } catch (error) {
        throw new Error(`${error}\n카테고리 등록에 실패했습니다.`);
    }
}

export async function putCategory(data: {
    categorySeq: number;
    name: string;
}): Promise<void> {
    try {
        const response = await axiosAuth.put('/products/categories', data);

        if (response.data.status === 200) return response.data;

        throw new Error(`${response.data.status} ${response.data.message}`);
    } catch (error) {
        throw new Error(`${error}\n카테고리 수정에 실패했습니다.`);
    }
}

export async function deleteCategory({
    categorySeq,
}: {
    categorySeq: number;
}): Promise<void> {
    try {
        const response = await axiosAuth.delete(
            `/products/categories/${categorySeq}`,
        );

        if (response.data.status === 200) return response.data;

        throw new Error(`${response.data.status} ${response.data.message}`);
    } catch (error) {
        throw new Error(`${error}\n카테고리 삭제에 실패했습니다.`);
    }
}
