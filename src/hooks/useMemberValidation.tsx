import { yupResolver } from '@hookform/resolvers/yup';
import { DefaultValues, FieldValues, useForm } from 'react-hook-form';
import * as yup from 'yup';

// TODO: type이 애매....
export default function useMemberValidation<T extends FieldValues>(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    schema: yup.ObjectSchema<any>,
    defaultValues: DefaultValues<T>,
) {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isValid },
    } = useForm<T>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues,
        resolver: yupResolver(schema),
    });

    return {
        register,
        handleSubmit,
        setValue,
        errors,
        isValid,
    };
}
