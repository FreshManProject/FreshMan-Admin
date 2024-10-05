import { Button } from '@/components/ui/button';
import { Upload, X } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { usePostProduct } from '@/hooks/product';

export default function ProductRegistration() {
    const [thumbnail, setThumbnail] = useState<File>();
    const [productImages, setProductImages] = useState<File[]>([]);
    // const [name, setName] = useState<string>();
    const { mutateProduct } = usePostProduct();

    function handleThumbnailChange(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            setThumbnail(e.target.files[0]);
        }
    }

    function handleProductImage(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        console.log(e.target.files);
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

        const newImages = [...productImages.filter((image) => image.name !== fileName)];
        console.log(newImages);

        setProductImages(newImages);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();

        const productName =
            (document.getElementById('product-name') as HTMLInputElement)
                ?.value || '';
        const description =
            (document.getElementById('description') as HTMLInputElement)
                ?.value || '';
        const brand =
            (document.getElementById('brand') as HTMLInputElement)?.value || '';
        const price =
            (document.getElementById('price') as HTMLInputElement)?.value || '';

        formData.append('name', productName);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('brand', brand);

        if (thumbnail) {
            formData.append('thumbnailimage', thumbnail); // Single file
        }
        formData.append('categorySeq', '0');
        //carts count어디에
        //categorySeq 필수 인지

        productImages.forEach((image, index) => {
            formData.append(`mainimages[${index}]`, image); // Multiple files with indexed keys
        });

        // Trigger the mutation to send the form data
        mutateProduct(formData);
    };

    return (
        <>
            <Card x-chunk="dashboard-07-chunk-0">
                <CardHeader className="font-bold text-xl">상품 등록</CardHeader>
                <CardContent>
                    <form className="grid w-full items-start gap-6 overflow-auto">
                        <fieldset className="grid gap-6">
                            <div className="basic-input-label-box">
                                <Label htmlFor="thumbnail">썸네일</Label>
                                <label className="cursor-pointer flex aspect-square w-5 h-5 items-center justify-center rounded-md border border-dashed">
                                    <Upload className="h-4 w-4 text-muted-foreground" />
                                    <input
                                        type="file"
                                        onChange={handleThumbnailChange}
                                        className="hidden"
                                    />
                                </label>
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
                                <Label htmlFor="product-images">
                                    상품 이미지(최대 5개)
                                </Label>

                                <label className="cursor-pointer flex aspect-square w-5 h-5 items-center justify-center rounded-md border border-dashed">
                                    <Upload className="h-4 w-4 text-muted-foreground" />
                                    <input
                                        type="file"
                                        className="hidden"
                                        multiple
                                        onChange={handleProductImage}
                                    />
                                </label>
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
                                <Label htmlFor="product-name">상품명</Label>
                                <Input id="product-name" type="text" />
                            </div>
                            <div className="basic-input-label-box">
                                <Label htmlFor="description">설명</Label>
                                <Input id="description" type="text" />
                            </div>
                            <div className="basic-input-label-box">
                                <Label htmlFor="brand">브랜드</Label>
                                <Input id="brand" type="text" />
                            </div>
                            <div className="basic-input-label-box">
                                <Label htmlFor="price">가격</Label>
                                <Input id="price" type="number" />
                            </div>
                        </fieldset>
                    </form>
                    <Button className="w-full mt-4" onClick={handleSubmit}>
                        등록
                    </Button>
                </CardContent>
            </Card>
        </>
    );
}
