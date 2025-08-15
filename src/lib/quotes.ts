'use client';

interface Quote {
  content: string;
  author: string;
}

interface ApiError {
  error: string;
}

export const getRandomQuote = async (): Promise<Quote> => {
  try {
    const response = await fetch('/api/quotes', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store',
    });
    
    const data = await response.json();

    if (!response.ok) {
      throw new Error((data as ApiError).error || 'Failed to fetch quote');
    }

    return data as Quote;
  } catch (error) {
    console.error('Error fetching quote:', error);
    throw new Error(error instanceof Error ? error.message : 'Error loading quote. Please try again.');
  }
};