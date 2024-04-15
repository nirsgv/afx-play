import React from 'react';
import TracksMultiDisplay from '@/app/components/tracks-multi-display';

async function getData() {
  const res = await fetch('http://localhost:3000/api/tracks');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const tracks = async () => {
  const data = await getData();
  console.log({ data, len: data.length });
  return (
    <div className="px-10 py-6">
      <TracksMultiDisplay tracks={data} />
    </div>
  );
};

export default tracks;
