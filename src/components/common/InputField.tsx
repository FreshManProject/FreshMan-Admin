import { FieldValues, UseFormRegister, Path } from 'react-hook-form';
import { Input } from '../ui/input';
import { RegisterUserFormData } from '@/types/validation/yupRegister';

interface Props<T extends FieldValues> {
    name?: string;
    id: Path<T>;
    type: 'text' | 'number';
    placeholder: string;
    register: UseFormRegister<T>;
    errorMsg: string;
    inputBtn?: React.ReactNode;
    readonly?: boolean;
    defaultValue?: string | number;
}

export default function InputField<T extends RegisterUserFormData>({
    name,
    id,
    type,
    placeholder,
    register,
    errorMsg,
    inputBtn,
    readonly,
    defaultValue,
}: Props<T>) {
    return (
        <div className={'mb-5 mt-5'}>
            {name && (
                <label className="text-body2 text-gray400" htmlFor={'name'}>
                    {name}
                </label>
            )}

            <div className={'flex flex-row'}>
                <Input
                    id={id as string}
                    type={type}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    readOnly={readonly}
                    className={
                        'rounded-none text-body3 text-bk placeholder:text-gray300'
                    }
                    {...register(id)}
                    // {...register('name')}
                />
                {inputBtn}
            </div>
            {errorMsg && (
                <p className="mt-1 text-body3 text-pointRed">{errorMsg}</p>
            )}
        </div>
    );
}
