import React, { useState, useEffect } from 'react';
import { getImage } from '../utils/imageStore';

interface CustomImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  photoKey?: string;
  originalFilename?: string;
  defaultSrc: string;
}

export const CustomImage: React.FC<CustomImageProps> = ({
  photoKey,
  originalFilename,
  defaultSrc,
  alt = '',
  className = '',
  ...rest
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(defaultSrc);

  const resolveImage = async () => {
    // 1. Try to find custom uploaded image by photoKey
    if (photoKey) {
      const customByPhotoKey = await getImage(photoKey);
      if (customByPhotoKey) {
        setCurrentSrc(customByPhotoKey);
        return;
      }
    }

    // 2. Try to find custom uploaded image by originalFilename (e.g. '5.jpg')
    if (originalFilename) {
      const customByFilename = await getImage(originalFilename);
      if (customByFilename) {
        setCurrentSrc(customByFilename);
        return;
      }
    }

    // 3. Fallback to defaultSrc
    setCurrentSrc(defaultSrc);
  };

  useEffect(() => {
    resolveImage();

    // Listen for image update events
    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<{ key: string; dataUrl: string | null }>;
      const updatedKey = customEvent.detail?.key?.toLowerCase();
      
      const matchesKey = photoKey && photoKey.toLowerCase() === updatedKey;
      const matchesFile = originalFilename && originalFilename.toLowerCase() === updatedKey;

      if (matchesKey || matchesFile) {
        if (customEvent.detail?.dataUrl) {
          setCurrentSrc(customEvent.detail.dataUrl);
        } else {
          setCurrentSrc(defaultSrc);
        }
      }
    };

    const handleClear = () => {
      setCurrentSrc(defaultSrc);
    };

    window.addEventListener('emmi_image_updated', handleUpdate);
    window.addEventListener('emmi_images_cleared', handleClear);

    return () => {
      window.removeEventListener('emmi_image_updated', handleUpdate);
      window.removeEventListener('emmi_images_cleared', handleClear);
    };
  }, [photoKey, originalFilename, defaultSrc]);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={(e) => {
        // If image fails to load, gracefully fall back to defaultSrc
        if (currentSrc !== defaultSrc) {
          setCurrentSrc(defaultSrc);
        }
      }}
      {...rest}
    />
  );
};
