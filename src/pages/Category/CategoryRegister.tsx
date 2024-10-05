import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { usePostCategory } from '@/hooks/category';
import { X, Plus } from 'lucide-react';
import { useState } from 'react';

type ICategoryRegister = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function CategoryRegister({ onClick }: ICategoryRegister) {
    const { mutateCategory } = usePostCategory();
    const [category, setCategory] = useState<string>('');

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const data = {
            name: category,
        };

        mutateCategory(data, {
            onSuccess: (data) => {
                alert("카테고리가 등록되었습니다.");
                setCategory('');
                onClick(e);
            },
            onError: (error) => {
                alert(error.message);
            }
        });
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
