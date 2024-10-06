import { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useGetCategory } from '@/hooks/query/category';

interface CartOptionProps {
    setSelectedItem: (value: number) => void;
}
export default function CartOption({
    setSelectedItem,
}: CartOptionProps) {
    const { category, isLoadingCategory } = useGetCategory();

    const handleChangeOption = (value: string) => {
        setSelectedItem(Number(value));
    };
    if (isLoadingCategory) {
        return <div>Loading...</div>;
    }
    return (
        <Select onValueChange={handleChangeOption}>
            <SelectTrigger
                className={'h-12 w-full border-gray200 bg-white text-gray400'}
            >
                <SelectValue placeholder={'옵션을 선택해주세요.'} />
            </SelectTrigger>
            <SelectContent className={'h-56 bg-white'}>
                <SelectGroup>
                    {category?.list?.map(({ categorySeq, name }) => (
                        <SelectItem value={`${categorySeq}`} key={categorySeq}>
                            {name}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
