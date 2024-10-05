import * as z from 'zod';

export const CategorySchema = z.object({
    name: z.string().min(1, {
        message: '카테고리 이름을 입력해주세요',
    }),
});
