'use client';

import { useState } from 'react';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ImageContainer from '@/components/ImageContainer';
import QuoteCard from '@/components/QuoteCard';
import GenerateButton from '@/components/GenerateButton';
import { getRandomQuote } from '@/lib/quotes';
import { getRandomPhoto } from '@/lib/unsplash';
import type { Quote, UnsplashPhoto } from '@/types';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 0,
      refetchOnWindowFocus: false,
    },
  },
});

function HomePage() {
  const [refreshKey, setRefreshKey] = useState(0);

  const { 
    data: quote, 
    isLoading: quoteLoading,
    error: quoteError,
    isError: isQuoteError
  } = useQuery<Quote>({
    queryKey: ['quote', refreshKey],
    queryFn: getRandomQuote,
  });

  const { 
    data: photo, 
    isLoading: photoLoading,
    error: photoError,
    isError: isPhotoError
  } = useQuery<UnsplashPhoto>({
    queryKey: ['photo', refreshKey],
    queryFn: () => getRandomPhoto(),
  });

  const handleGenerate = () => {
    setRefreshKey(prev => prev + 1);
  };

  const isLoading = quoteLoading || photoLoading;
  const error = quoteError || photoError;
  const isError = isQuoteError || isPhotoError;

  return (
    <main className="relative min-h-screen w-full">
      <ImageContainer 
        photo={photo} 
        isLoading={isLoading} 
        error={isError ? error as Error : null}
      />
      <QuoteCard 
        quote={quote} 
        isLoading={isLoading} 
        error={isError ? error as Error : null}
      />
      <GenerateButton 
        onClick={handleGenerate} 
        isLoading={isLoading} 
      />
    </main>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );
}