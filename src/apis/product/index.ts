import { productListType } from '@/types/product';
import { axiosAuth, axiosForm } from '..';


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
        // if (categorySeq < 0){
        //     const response = await axiosAuth.get('/products/all', {
        //         params: {
        //             page: pageParam,
        //         },
        //     });
        //     if (response.data.status === 200) return response.data;
        // }
        
        const response = await axiosAuth.get('/products', {
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

export async function getProductDetail(productSeq: number): Promise<void> {
    try {
        const response = await axiosAuth.get(`/products/${productSeq}`);

        if (response.data.status === 200) return response.data;

        throw new Error(`${response.data.status} ${response.data.message}`);
    } catch (error) {
        throw new Error(`${error}\n상품 상세 정보를 불러오는데 실패했습니다.`);
    }
}

export async function deleteProduct(productSeq: number): Promise<void> {
    try {
        const response = await axiosAuth.delete(`/products/${productSeq}`);

        if (response.data.status === 200) return response.data;

        throw new Error(`${response.data.status} ${response.data.message}`);
    } catch (error) {
        throw new Error(`${error}\n상품 삭제에 실패했습니다.`);
    }
}


export async function postSales(data: FormData): Promise<void> {
    try {
        const response = await axiosForm.post('/sales', data);

        if (response.data.status === 200) return response.data;

        throw new Error(`${response.data.status} ${response.data.message}`);
    } catch (error) {
        throw new Error(`${error}\n할인 정보 등록에 실패했습니다`);
    }
}

export async function deleteSales(saleSeq: number): Promise<void> {
    try {
        const response = await axiosAuth.delete(`/sales/${saleSeq}`);

        if (response.data.status === 200) return response.data;

        throw new Error(`${response.data.status} ${response.data.message}`);
    } catch (error) {
        throw new Error(`${error}\n할인 정보 삭제에 실패했습니다.`);
    }
}

export async function postStock(data: FormData): Promise<void> {
    try {
        const response = await axiosForm.post('/stocks', data);

        if (response.data.status === 200) return response.data;

        throw new Error(`${response.data.status} ${response.data.message}`);
    } catch (error) {
        throw new Error(`${error}\n재고 정보 등록에 실패했습니다`);
    }
}