import { type ForwardedRef, forwardRef } from 'react';
import { MdOutlinePhotoCamera } from 'react-icons/md';
import { X } from 'lucide-react';
import { UseFormRegister } from 'react-hook-form';
import { Button } from '../ui/button';

interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register?: UseFormRegister<any>;
    // inputFileRef: React.RefObject<HTMLInputElement>;
    previewImage: string | null;
    handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleImageRemove: () => void;
}
const UploadPhoto = forwardRef(
    (
        { register, previewImage, handleImageUpload, handleImageRemove }: Props,
        ref: ForwardedRef<HTMLInputElement>,
    ) => {
        console.log(ref);
        return (
            <div className="mt-4 flex gap-x-2">
                <div>
                    <label
                        htmlFor="picture"
                        className="flex h-20 w-20 flex-col items-center justify-center rounded border border-gray300"
                    >
                        <MdOutlinePhotoCamera className="h-10 w-10" />
                        <span className="text-body3">사진 업로드</span>
                    </label>
                    <input
                        {...(register ? register('image') : {})}
                        id="picture"
                        type="file"
                        ref={ref}
                        className="hidden"
                        onChange={handleImageUpload}
                        accept="image/*"
                    />
                </div>
                {previewImage && (
                    <div className="relative">
                        <div className="flex h-20 w-20 justify-end overflow-hidden rounded bg-gray-200">
                            <img
                                src={previewImage}
                                alt="문의 이미지"
                                className="h-full w-full object-cover"
                            />

                            <Button
                                className="absolute right-0 top-0 -mr-1 -mt-1 h-6 w-6 rounded-full bg-bk p-0"
                                onClick={handleImageRemove}
                            >
                                <X className="h-4 w-4 text-white" />
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        );
    },
);
UploadPhoto.displayName = 'UploadPhoto';

export default UploadPhoto;
