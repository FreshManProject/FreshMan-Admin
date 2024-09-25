import { Button } from '@/components/ui/button';
import { Upload, X } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ProductRegistration() {
    return (
        <>
            <Card x-chunk="dashboard-07-chunk-0">
                <CardHeader className="font-bold text-xl">상품 등록</CardHeader>
                <CardContent>
                    <form className="grid w-full items-start gap-6 overflow-auto">
                        <fieldset className="grid gap-6">
                            <div className="basic-input-label-box">
                                <Label htmlFor="temperature">썸네일</Label>

                                <label className="cursor-pointer flex aspect-square w-5 h-5 items-center justify-center rounded-md border border-dashed">
                                    <Upload className="h-4 w-4 text-muted-foreground" />
                                    <input type="file" className="hidden" />
                                </label>
                                {/* 미리보기 이미지 */}
                                {/* <div className="w-40 h-40 bg-slate-400"></div> */}
                            </div>

                            <div className="basic-input-label-box">
                                <Label htmlFor="temperature">
                                    상품 이미지(여러장 가능)
                                </Label>

                                <label className="cursor-pointer flex aspect-square w-5 h-5 items-center justify-center rounded-md border border-dashed">
                                    <Upload className="h-4 w-4 text-muted-foreground" />
                                    <input type="file" className="hidden" />
                                </label>
                                {/* 미리보기 이미지 */}
                                {/* <ul className="flex gap-2 w-full overflow-x-auto">
                                    <li className="w-40 h-40 bg-slate-400 shrink-0">
                                        <Button className="w-10 h-10 px-0">
                                            <X color="#fff" size={20} />
                                        </Button>
                                    </li>
                                    <li className="w-40 h-40 bg-slate-400 shrink-0">
                                        <Button className="w-10 h-10 px-0">
                                            <X color="#fff" size={20} />
                                        </Button>
                                    </li>
                                </ul> */}
                            </div>

                            <div className="basic-input-label-box">
                                <Label htmlFor="temperature">상품명</Label>
                                <Input id="temperature" type="text" />
                            </div>
                            <div className="basic-input-label-box">
                                <Label htmlFor="top-k">설명</Label>
                                <Input id="top-k" type="text" />
                            </div>
                            <div className="basic-input-label-box">
                                <Label htmlFor="top-k">브랜드</Label>
                                <Input id="top-k" type="text" />
                            </div>
                            <div className="basic-input-label-box">
                                <Label htmlFor="top-p">가격</Label>
                                <Input id="top-p" type="number" />
                            </div>
                        </fieldset>
                    </form>
                    <Button className="w-full mt-4">등록</Button>
                </CardContent>
            </Card>
        </>
    );
}
