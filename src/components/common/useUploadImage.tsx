import imageCompression from 'browser-images-compression';
import { useState } from 'react';

export default function useUploadPhoto() {
    // const inputFileRef = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const handleImageUpload = async (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const file = e.target.files?.[0];
        if (!file) return;
        // 파일 저장
        console.log(file, '파일저장');
        setFile(file);

        const fileRead = new FileReader();
        fileRead.onload = () => {
            if (typeof fileRead.result !== 'string') return;
            setPreviewImage(fileRead.result);
        };

        fileRead.readAsDataURL(file);

        const options = {
            initialQuality: 0.5,
        };

        try {
            const compressedFile = await imageCompression(file, options);
            // 원본 파일과 압축된 파일의 크기 비교
            console.log(
                'Original file size:',
                Math.ceil(file.size / 1000),
                'KB',
            );
            console.log(
                'Compressed file size:',
                Math.ceil(compressedFile.size / 1000),
                'KB',
            );
        } catch (error) {
            console.log(error);
        }
    };

    const handleImageRemove = () => {
        setPreviewImage(null);
        setFile(null);
    };

    return {
        file,
        // inputFileRef,
        handleImageUpload,
        handleImageRemove,
        previewImage,
    };
}