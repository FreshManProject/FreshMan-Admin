import { Button } from '@/components/ui/button';
import { Upload, X } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { usePostProduct } from '@/hooks/query/product';
import { useNavigate } from 'react-router';
import CategoryOption from '../Category/CategoryOption';

export default function ProductRegistration() {
    const [thumbnail, setThumbnail] = useState<File>();
    const [productImages, setProductImages] = useState<File[]>([]);

    const [selectedItem, setSelectedItem] = useState<number>();

    const { mutateProduct } = usePostProduct();
    const navigate = useNavigate();

    function handleThumbnailChange(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            setThumbnail(e.target.files[0]);
        }
    }

    function handleProductImage(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        if (e.target.files) {
            const newImages = Array.from(e.target.files).map((file) => file);
            setProductImages((prevImages) => [...prevImages, ...newImages]);
        }
    }

    function handleDeleteProductImage(fileName: string) {
        console.log(
            fileName,
            productImages.filter((image) => image.name !== fileName),
        );

        const newImages = [
            ...productImages.filter((image) => image.name !== fileName),
        ];

        setProductImages(newImages);
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        // 임시로 categorySeq를 1로 설정
        if (selectedItem !== undefined) {
            formData.append('categorySeq', selectedItem.toString());
        } else {
            alert('카테고리를 선택해주세요.');
            return;
        }

        mutateProduct(formData, {
            onSuccess: (_) => {
                alert('상품이 등록되었습니다.');
                // navigate('/product');
            },
            onError: (error) => {
                alert(error.message);
            },
        });
    };

    return (
        <>
            <Card x-chunk="dashboard-07-chunk-0">
                <CardHeader className="font-bold text-xl">상품 등록</CardHeader>
                <CardContent>
                    <form
                        className="grid w-full items-start gap-6 overflow-auto"
                        onSubmit={handleSubmit}
                    >
                        <fieldset className="grid gap-6">
                            <div className="basic-input-label-box">
                                <Label htmlFor="thumbnailimages">썸네일</Label>
                                <Label className="cursor-pointer flex aspect-square w-5 h-5 items-center justify-center rounded-md border border-dashed">
                                    <Upload className="h-4 w-4 text-muted-foreground" />
                                    <input
                                        name="thumbnailimages"
                                        type="file"
                                        onChange={handleThumbnailChange}
                                        className="hidden"
                                    />
                                </Label>
                                {thumbnail && (
                                    <div className="w-40 h-40 bg-slate-400">
                                        <img
                                            src={URL.createObjectURL(thumbnail)}
                                            alt={URL.createObjectURL(thumbnail)}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="basic-input-label-box">
                                <Label htmlFor="mainimages">
                                    상품 이미지(최대 5개)
                                </Label>
                                <Label className="cursor-pointer flex aspect-square w-5 h-5 items-center justify-center rounded-md border border-dashed">
                                    <Upload className="h-4 w-4 text-muted-foreground" />
                                    <input
                                        name="mainimages"
                                        type="file"
                                        className="hidden"
                                        multiple
                                        onChange={handleProductImage}
                                    />
                                </Label>
                                {/* 미리보기 이미지 */}
                                <ul className="flex gap-2 w-full overflow-x-auto">
                                    {productImages.map((image, index) => (
                                        <li
                                            key={index}
                                            className="relative w-40 h-40 bg-slate-400 shrink-0"
                                        >
                                            <img
                                                src={URL.createObjectURL(image)}
                                                alt={URL.createObjectURL(image)}
                                                className="h-full w-full object-cover"
                                            />
                                            <Button
                                                className="absolute w-8 h-8 px-0 top-1 right-1"
                                                onClick={() =>
                                                    handleDeleteProductImage(
                                                        image.name,
                                                    )
                                                }
                                            >
                                                <X color="#fff" size={15} />
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="basic-input-label-box">
                                <Label htmlFor="name">상품명</Label>
                                <Input id="name" name="name" type="text" />
                            </div>
                            <div className="basic-input-label-box">
                                <Label htmlFor="description">설명</Label>
                                <Input
                                    id="description"
                                    name="description"
                                    type="text"
                                />
                            </div>
                            <div className="basic-input-label-box">
                                <Label htmlFor="brand">브랜드</Label>
                                <Input id="brand" name="brand" type="text" />
                            </div>
                            <div className="basic-input-label-box">
                                <Label htmlFor="price">가격</Label>
                                <Input id="price" name="price" type="number" />
                            </div>
                            <div className="basic-input-label-box">
                                <Label>카테고리</Label>
                                <CategoryOption
                                    setSelectedItem={setSelectedItem}
                                />
                            </div>
                            <Button className="w-full mt-4" type="submit">
                                등록
                            </Button>
                        </fieldset>
                    </form>
                </CardContent>
            </Card>
        </>
    );
}
