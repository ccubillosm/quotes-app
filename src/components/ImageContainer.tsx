import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import type { UnsplashPhoto } from '@/types';

interface ImageContainerProps {
  photo: UnsplashPhoto | null;
  isLoading: boolean;
  error?: Error | null;
}

export default function ImageContainer({ photo, isLoading, error }: ImageContainerProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      className="image-container relative w-full h-[400px] md:h-screen rounded-lg overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {photo && !error ? (
        <>
          <Image
            src={photo.urls.regular}
            alt={photo.alt_description || 'Inspirational background'}
            fill
            className="object-cover"
            sizes="100vw"
            priority
            onLoadingComplete={() => setImageLoaded(true)}
          />
          {imageLoaded && (
            <motion.div
              className="absolute bottom-2 right-2 text-xs text-white dark:text-gray-100 bg-black/50 dark:bg-black/70 px-2 py-1 rounded backdrop-blur-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Photo by{' '}
              <a
                href={photo.user.links.html}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-200 dark:hover:text-gray-300 transition-colors"
              >
                {photo.user.name}
              </a>{' '}
              on{' '}
              <a
                href="https://unsplash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-200 dark:hover:text-gray-300 transition-colors"
              >
                Unsplash
              </a>
            </motion.div>
          )}
        </>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-white dark:text-gray-100">
          {isLoading ? 'Loading...' : error ? error.message : 'No image available'}
        </div>
      )}
    </motion.div>
  );
}