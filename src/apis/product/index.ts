import { axiosForm } from '..';

export async function postProduct(data: FormData): Promise<void> {
    try {
        const response = await axiosForm.post('/products', data);
        if (response.data) return response.data; 
        throw new Error(
            `Unexpected response : ${response.status} ${response.statusText}`,
        );
    } catch (error) {
        throw new Error('Failed to fetch cart list');
    }
}
