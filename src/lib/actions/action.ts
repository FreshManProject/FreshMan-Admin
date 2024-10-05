import * as z from 'zod';
import { CategorySchema } from './shema';

export const checkCategoryField= async (
    values: z.infer<typeof CategorySchema>,
) => {
    const validatedFields = CategorySchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: 'Invalid fields' };
    }

    const { name } = validatedFields.data;
    // if name does not exist in database

    return {
        success: '카페고리가 성공적으로 등록되었습니다.',
    };
};
