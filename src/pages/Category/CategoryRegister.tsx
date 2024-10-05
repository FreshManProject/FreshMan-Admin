import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { usePostCategory } from '@/hooks/category';
import { checkCategoryField } from '@/lib/actions/action';
import { X, Plus } from 'lucide-react';
import { useState } from 'react';

type ICategoryRegister = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function CategoryRegister({ onClick }: ICategoryRegister) {
    const { mutateCategory, isPendingMutateCategory } = usePostCategory();
    const [category, setCategory] = useState<string>('');

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const data = {
            name: category,
        };

        const success = await checkCategoryField(data);
        if (success.error !== undefined) {
            alert(success.error);
            return;
        }
        console.log(success.success);
        const response = await mutateCategory(data);
        console.log(response);

        try {
            mutateCategory(data);
            if (!isPendingMutateCategory) {
                alert(success.success);
                setCategory('');
                onClick(e);
            }
        } catch (e) {
            alert(e);
        }
    };

    return (
        <>
            <div className="flex gap-2 bg-transparent items-center">
                <Input
                    id="category"
                    type="text"
                    className="bg-transparent max-h-7"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <Button size={'icon'} onClick={handleSubmit}>
                    <Plus size={15} />
                </Button>
                <Button variant="destructive" size={'icon'} onClick={onClick}>
                    <X size={15} />
                </Button>
            </div>
        </>
    );
}
