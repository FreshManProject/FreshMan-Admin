import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';

type ICategoryRegister = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function CategoryRegister({ onClick }: ICategoryRegister) {
    return (
        <>
            <form>
                <fieldset className="flex gap-2 bg-transparent">
                    <Input
                        id="category"
                        type="text"
                        className="bg-transparent max-h-7"
                    />
                    <button className="p-0 rounded-full" onClick={onClick}>
                        <X size={15} />
                    </button>
                </fieldset>
            </form>
        </>
    );
}
