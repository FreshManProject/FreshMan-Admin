import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useDeleteCategory, usePutCategory } from '@/hooks/query/category';
import { useState } from 'react';

interface ICategoryPage {
    categorySeq: number;
    name: string;
}
export default function CategoryPage({ categorySeq, name }: ICategoryPage) {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const { putMutateCategory } = usePutCategory();
    const { deleteMutateCategory } = useDeleteCategory();

    const handleDeleteCategory = async () => {
        deleteMutateCategory(
            { categorySeq },
            {
                onSuccess: (_) => {
                    alert('카테고리가 삭제되었습니다.');
                },
                onError: (error) => {
                    alert(error.message);
                },
            },
        );
    };

    const handlePutCategory = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newName = (e.target as HTMLFormElement).category.value;

        putMutateCategory(
            { categorySeq, name: newName },
            {
                onSuccess: (_) => {
                    alert('카테고리가 수정되었습니다.');
                    setIsEdit(false);
                },
                onError: (error) => {
                    alert(error.message);
                },
            },
        );
    };

    return (
        <>
            <Card x-chunk="dashboard-07-chunk-0">
                <CardHeader className="flex justify-between font-bold text-xl">
                    {isEdit ? (
                        <form
                            className="flex gap-3 justify-between w-full"
                            onSubmit={handlePutCategory}
                        >
                            <Input
                                id="category"
                                name="category"
                                type="text"
                                defaultValue={name}
                            />

                            <div className="flex gap-2">
                                <Button variant="secondary" type="submit">
                                    수정
                                </Button>
                                <Button
                                    variant="destructive"
                                    onClick={() => setIsEdit(!isEdit)}
                                >
                                    취소
                                </Button>
                            </div>
                        </form>
                    ) : (
                        <>
                            {name}
                            <div className="flex gap-2">
                                <Button
                                    variant="secondary"
                                    onClick={() => setIsEdit(!isEdit)}
                                >
                                    수정
                                </Button>
                                <Button
                                    variant="destructive"
                                    onClick={handleDeleteCategory}
                                >
                                    삭제
                                </Button>
                            </div>
                        </>
                    )}
                </CardHeader>
                <CardContent>
                    <div className="flex justify-between">
                        <div className="flex gap-2 items-center">
                            <span>{categorySeq}</span>
                            <span>{name}</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}
