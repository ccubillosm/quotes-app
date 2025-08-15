import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    // Usar Lorem Picsum como alternativa a Unsplash
    const width = 1200;
    const height = 800;
    const randomId = Math.floor(Math.random() * 1000);
    
    const imageUrl = `https://picsum.photos/id/${randomId}/${width}/${height}`;
    const authorUrl = 'https://picsum.photos';

    return NextResponse.json({
      id: randomId.toString(),
      urls: {
        regular: imageUrl,
        small: imageUrl,
      },
      alt_description: 'Beautiful random image',
      user: {
        name: 'Lorem Picsum',
        links: {
          html: authorUrl,
        },
      },
    });
  } catch (error) {
    console.error('Error in image API route:', error);
    return NextResponse.json(
      { error: 'Internal server error in image API' },
      { status: 500 }
    );
  }
}