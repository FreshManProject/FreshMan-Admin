import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
export default function CategoryPage() {
    return (
        <>
            <Card x-chunk="dashboard-07-chunk-0">
                <CardHeader className="font-bold text-xl">카테고리</CardHeader>
                {/* list of categories */}
                <CardContent>
                    <Button
                        className="w-full mt-4"
                        // onClick={handleSubmit}
                    >
                        추가
                    </Button>
                </CardContent>
            </Card>
        </>
    );
}
