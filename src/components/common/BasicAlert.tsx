
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from '@radix-ui/react-alert-dialog';
import { AlertDialogHeader } from '../ui/alert-dialog';
import { Button } from '../ui/button';

interface Props {
    onClick: () => void;
    buttonComponent: React.ReactNode;
    message?: string;
    headerTitle?: string;
}

export default function BasicAlert({
    buttonComponent,
    message,
    headerTitle,
    onClick,
}: Props) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>{buttonComponent}</AlertDialogTrigger>
            <AlertDialogContent className="mx-auto w-[calc(100%-40px)] rounded-md">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-title3_b">
                        {headerTitle}
                    </AlertDialogTitle>
                    <AlertDialogDescription>{message}</AlertDialogDescription>
                </AlertDialogHeader>
                <div className="mt-3 flex gap-2 [&>button]:h-14 [&>button]:flex-1 [&>button]:text-body2_b">
                    <AlertDialogCancel asChild>
                        <Button variant="destructive">취소</Button>
                    </AlertDialogCancel>
                    <AlertDialogAction asChild>
                        <Button variant="secondary" onClick={onClick} type="button">
                            확인
                        </Button>
                    </AlertDialogAction>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    );
}
