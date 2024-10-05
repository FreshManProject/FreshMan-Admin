import { Button } from '@/components/ui/button';

interface Props {
    title: string;
    onSubmit?: () => void;
}
export default function HeaderTitle({ title, onSubmit }: Props) {
    return (
        <header className="flex justify-between items-center pt-6">
            <h1 className="text-3xl font-semibold">{title}</h1>
            {onSubmit && <Button onClick={onSubmit}>상품 등록</Button>}
        </header>
    );
}
