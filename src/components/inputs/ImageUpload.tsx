"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  var cloudinary: any;
}

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
  profile?: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value, profile }) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );
  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="g9nkxpc8"
      options={{
        maxFiles: 1
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className={`
              relative 
              cursor-pointer 
              hover:opacity-70 
              transition 
              border-neutral-300 
              flex 
              flex-col 
              justify-center 
              items-center 
              gap-4 
              text-neutral-600
              ${profile ? "w-32 h-32 avatar mx-auto rounded-full" : "border-dashed border-2 p-16 rounded-lg"}
            `}
          >
            <TbPhotoPlus size={40} />
            <div className="font-semibold text-lg text-center">Click to upload an image</div>
            {value && (
              <div className={`${profile ? "rounded-full" : ""} absolute inset-0 w-full h-full`}>
                <Image alt="Upload" fill style={{ objectFit: "cover" }} src={value} />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
