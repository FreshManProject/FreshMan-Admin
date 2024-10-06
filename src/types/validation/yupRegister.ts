import * as yup from 'yup';

export type RegisterUserFormData = yup.InferType<typeof registerUserSchema>;
export type PartialUserData = yup.InferType<typeof partialUserSchema>;
export type PartialAddressData = yup.InferType<typeof partialAddressSchema>;
export type imageFileData = yup.InferType<typeof imageFileSchema>;

export const registerUserSchema = yup.object().shape({
    name: yup
        .string()
        .required('이름을 입력해주세요.')
        .matches(/^[가-힣]{2,10}$/, '이름 형식에 맞지 않습니다.(한글 2~10자)'),
    email: yup
        .string()
        .required('이메일을 입력해주세요.')
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|kr|net|org|edu)$/,
            '이메일 형식에 맞지 않습니다.',
        ),
    phone: yup
        .string()
        .required('전화번호를 입력해주세요.')
        .matches(/^\d{11}$/, '전화번호 형식에 맞지 않습니다.'),
    address: yup.string().required('주소를 입력해주세요.'),
    addressDetail: yup.string().required('상세주소를 입력해주세요.'),
});

export const partialUserSchema = registerUserSchema.pick([
    'name',
    'email',
    'phone',
]);
export const partialAddressSchema = registerUserSchema.pick([
    'address',
    'addressDetail',
]);

export const qnaSchema = yup.object().shape({
    type: yup.string().required('문의 유형을 선택해주세요.'),
    content: yup
        .string()
        .required('문의 내용을 입력해주세요.')
        .min(20, '문의 내용은 최소 20자 이상이어야 합니다.'),
});

export const imageFileSchema = yup.object().shape({
    image: yup
        .mixed()
        .required('이미지를 입력해주세요.')
        .test('file', '파일 크기는 2MB 이하이어야 합니다.', (value) => {
            if (value instanceof File)
                return value && value.size <= 2 * 1024 * 1024;
            return false;
        }),
});
