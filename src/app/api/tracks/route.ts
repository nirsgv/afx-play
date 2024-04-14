import { NextRequest, NextResponse } from 'next/server';

async function getData() {
  try {
    const res = await fetch('https://www.afx-played.info/api/tracks');
    if (!res.ok) {
      console.error('API request failed:', res.status, res.statusText);
      return new Response(`Failed to fetch data: ${res.status} ${res.statusText}`, { status: res.status });
    }
    const data = await res.json();
    return new NextResponse(JSON.stringify(data), {
      status: 200, // OK
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export const GET = async (request: NextRequest) => {
  // Ensure the getData function is called and its response is returned
  return await getData();
};
