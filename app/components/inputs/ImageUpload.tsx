'use client';
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import React from 'react';
import { useCallback } from 'react';
import { TbPhotoPlus } from 'react-icons/tb';

declare global {
  interface Window {
    cloudinary: any;
  }
}

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
  altText: string; // New prop for alt text
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  value,
  altText,
}) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      uploadPreset="mb9mtvef"
      onUpload={handleUpload}
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }: any) => {
        return (
          <div
            onClick={() => open?.()}
            className="
              relative
              cursor-pointer
              hover:opacity-70
              transition
              border-dashed 
              border-2 
              p-20 
              border-neutral-300
              flex
              flex-col
              justify-center
              items-center
              gap-4
              text-neutral-600
            "
          >
            <TbPhotoPlus size={50} />
            <div className="font-semibold text-lg">Click to upload</div>
            {value && (
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={value}
                  alt={altText || 'House'} // Use altText, fallback to 'House' if altText is not provided
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
