import InputField from '@/components/common/InputField';
import { Button } from '@/components/ui/button';
import { usePostAdmin } from '@/hooks/query/user';
import useMemberValidation from '@/hooks/useMemberValidation';
import {
    LoginUserFormData,
    loginUserSchema,
} from '@/types/validation/yupRegister';

export default function LoginPage() {
    const { register, handleSubmit, errors } =
        useMemberValidation<LoginUserFormData>(loginUserSchema, {
            email: '',
            password: '',
        });

    const { mutatePostAdmin } = usePostAdmin();
    const onSubmit = (data: LoginUserFormData) => {
        const joinData = {
            email: data.email,
            password: data.password,
        };

        mutatePostAdmin(joinData);
    };

    return (
        <div className="bg-black flex h-screen flex-col items-center justify-around ">
            <div className="text-center">
                <h1 className="h-16 w-56 overflow-hidden text-center">
                    <img
                        alt="freshman"
                        src="/images/logo-wt.svg"
                        className="w-56"
                    />
                </h1>
                <p className="text-body1 text-white">
                    남성 뷰티는 프레시맨으로 부터
                </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-[75vw]">
                <InputField
                    name="이메일"
                    type="text"
                    id="email"
                    placeholder="이메일 입력"
                    register={register}
                    errorMsg={errors.email?.message || ''}
                />
                <InputField
                    name="비밀번호"
                    type="text"
                    id="password"
                    placeholder="비밀번호 입력"
                    register={register}
                    errorMsg={errors.password?.message || ''}
                />
                <div className="flex w-full flex-col gap-3 px-4">
                    <Button
                        variant="outline"
                        className="h-[60px]"
                        type="submit"
                    >
                        <span className="block w-full">로그인 하기</span>
                    </Button>
                </div>
            </form>
        </div>
    );
}
