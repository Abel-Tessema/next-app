'use client';

import React, {useState} from 'react';
import {CldImage, CldUploadButton} from "next-cloudinary";

interface CloudinaryResult {
  public_id: string
}

function UploadPage() {
  const [publicId, setPublicId] = useState<string>('');

  return (
    <>
      {publicId && <CldImage src={publicId} width={270} height={180} alt='An image'/>}
      <CldUploadButton
        uploadPreset='next-app'
        className='btn btn-primary'
        onSuccess={(results, widget) => {
          console.log('>>>>>' + results.info);
          const info = results.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
        options={{
          sources: ['local'],
          multiple: false,
          maxFiles: 5,
          styles: {
            palette: {
              window: "#ffffff",
              sourceBg: "#f4f4f5",
              windowBorder: "#90a0b3",
              tabIcon: "#000000",
              inactiveTabIcon: "#555a5f",
              menuIcons: "#555a5f",
              link: "#0433ff",
              action: "#339933",
              inProgress: "#0433ff",
              complete: "#339933",
              error: "#cc0000",
              textDark: "#000000",
              textLight: "#fcfffd"
            },
          }
        }}
      >
        Upload Image
      </CldUploadButton>
    </>
  );
}

export default UploadPage;