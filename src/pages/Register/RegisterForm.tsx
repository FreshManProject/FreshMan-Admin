import {
    RegisterUserFormData,
    registerUserSchema,
} from '@/types/Validation/yupRegister';
import { usePostJoinMember } from '@/hooks/query/user';
import useMemberValidation from '@/hooks/useMemberValidation';
import { PrimaryBkButton } from '../common/Button';
import { InputField, PostCodeModal } from '../common';

export default function RegisterForm() {
    const { register, handleSubmit, setValue, errors, isValid } =
        useMemberValidation<RegisterUserFormData>(registerUserSchema, {
            name: '',
            email: '',
            phone: '',
            address: '',
            addressDetail: '',
        });
    const { mutatePostJoinMember } = usePostJoinMember();

    const onSubmit = (data: RegisterUserFormData) => {
        const joinData = {
            name: data.name,
            phone: data.phone,
            email: data.email,
            address: data.address,
            addressDetail: data.addressDetail,
        };
        mutatePostJoinMember(joinData);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="">
            <InputField
                name="이름"
                type="text"
                id="name"
                placeholder="이름 입력"
                register={register}
                errorMsg={errors.name?.message || ''}
            />
            <InputField
                name="이메일"
                type="text"
                id="email"
                placeholder="이메일 입력"
                register={register}
                errorMsg={errors.email?.message || ''}
            />
            <InputField
                name="연락처"
                type="number"
                id="phone"
                placeholder="숫자만 입력"
                register={register}
                errorMsg={errors.phone?.message || ''}
            />
            <InputField
                name="주소"
                type="text"
                id="address"
                placeholder="건물, 지번 또는 도로명 검색"
                register={register}
                readonly
                errorMsg={errors.address?.message || ''}
                inputBtn={<PostCodeModal setAddress={setValue} />}
            />
            <InputField
                type="text"
                id="addressDetail"
                placeholder="상세주소 입력"
                register={register}
                errorMsg={errors.addressDetail?.message || ''}
            />
            <div className="fixed bottom-0 left-0 right-0 m-auto max-w-default px-4 pb-8 [&>button]:w-full">
                <PrimaryBkButton disabled={!isValid} type="submit">
                    가입하기
                </PrimaryBkButton>
            </div>
        </form>
    );
}
