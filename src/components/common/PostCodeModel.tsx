import DaumPostCode from 'react-daum-postcode';
import { useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { RegisterUserFormData } from '@/types/validation/yupRegister';
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer';

interface Props {
    setAddress: UseFormSetValue<RegisterUserFormData>;
}

export default function PostCodeModal({ setAddress }: Props) {
    const [postCodeIsOpen, setPostCodeIsOpen] = useState(false);

    return (
        <Drawer
            open={postCodeIsOpen}
            onOpenChange={(open) => setPostCodeIsOpen(open)}
        >
            <DrawerTrigger
                className="ml-3 w-24 rounded-xl bg-bk text-body1 text-white"
                onClick={() => setPostCodeIsOpen(true)}
            >
                우편번호
            </DrawerTrigger>
            <DrawerContent>
                <DaumPostCode
                    onComplete={(data) => {
                        setAddress('address', data.address, {
                            shouldValidate: false,
                        });
                        setPostCodeIsOpen(false);
                    }}
                />
            </DrawerContent>
        </Drawer>
    );
}
