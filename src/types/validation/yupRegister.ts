import * as yup from 'yup';

export type LoginUserFormData = yup.InferType<typeof loginUserSchema>;

export const loginUserSchema = yup.object().shape({
    email: yup
        .string()
        .required('이메일을 입력해주세요.')
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|kr|net|org|edu)$/,
            '이메일 형식에 맞지 않습니다.',
        ),
    password: yup
        .string()
        .required('비밀번호를 입력해주세요.')
        .min(4, '비밀번호는 4자 이상이어야 합니다.'),
});
