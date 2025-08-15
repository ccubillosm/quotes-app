import { NextResponse } from 'next/server';

// Quotes locales como fallback
const FALLBACK_QUOTES = [
  { content: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { content: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
  { content: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  { content: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
  { content: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" },
  { content: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
  { content: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { content: "Life is what happens to us while we are making other plans.", author: "Allen Saunders" },
  { content: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { content: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" }
];

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    // Seleccionar una cita aleatoria del array
    const randomQuote = FALLBACK_QUOTES[Math.floor(Math.random() * FALLBACK_QUOTES.length)];
    
    return NextResponse.json(randomQuote);
  } catch (error) {
    console.error('Error in quotes API route:', error);
    return NextResponse.json(
      { error: 'Internal server error in quotes API' },
      { status: 500 }
    );
  }
}