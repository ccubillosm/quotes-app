'use client';

import type { UnsplashPhoto } from '@/types';

interface ApiError {
  error: string;
}

export const getRandomPhoto = async (): Promise<UnsplashPhoto> => {
  try {
    const response = await fetch('/api/unsplash', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store',
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error((data as ApiError).error || 'Failed to fetch image');
    }

    return data as UnsplashPhoto;
  } catch (error) {
    console.error('Error fetching photo:', error);
    throw new Error(error instanceof Error ? error.message : 'Error loading image. Please try again.');
  }
};