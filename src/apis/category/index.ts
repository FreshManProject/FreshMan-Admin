import { axiosDefault } from '..';

export async function postCategory(data: { name: string }): Promise<void> {
    try {
        const response = await axiosDefault.post('/products/categories', data);

        if (response.data) return response.data; 
    } catch (error) {
        throw new Error('카테고리 등록에 실패했습니다.');
    }
}

// export async function getCategory(data: { name: string }): Promise<void> {
//     try {
//         const response = await axiosDefault.post('/products/categories', {
//             data,
//         });

//         if (response.data) return response.data;
//         throw new Error(
//             `Unexpected response : ${response.status} ${response.statusText}`,
//         );
//     } catch (error) {
//         throw new Error('Failed to post category');
//     }
// }
