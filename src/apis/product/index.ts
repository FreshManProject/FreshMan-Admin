import { productListType } from '@/types/product';
import { axiosDefault, axiosForm } from '..';

export async function postProduct(data: FormData): Promise<void> {
    try {
        const response = await axiosForm.post('/products', data);

        if (response.data.status === 200) return response.data;

        throw new Error(`${response.data.status} ${response.data.message}`);
    } catch (error) {
        throw new Error(`${error}\n상품 등록에 실패했습니다`);
    }
}

export async function getInfiniteProductList({
    pageParam,
    categorySeq,
}: {
    pageParam: unknown;
    categorySeq: number;
}): Promise<productListType> {
    try {
        const response = await axiosDefault.get('/products', {
            params: {
                page: pageParam,
                categorySeq,
            },
        });
        if (response.data.status === 200) return response.data;

        throw new Error(`${response.data.status} ${response.data.message}`);
    } catch (error) {
        throw new Error(`${error}\n상품 목록을 불러오는데 실패했습니다.`);
    }
}
