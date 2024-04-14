import React from 'react'
import { Track } from '@/common-types';
import Item from '@/app/components/item';

async function getData() {
	const res = await fetch('http://localhost:3000/api/tracks');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}


const tracks = async () => {
	const data = await getData();
	console.log({data, len: data.length})
	return (
    <div>
      {data.length > 0 ? (
        <ul className="grid grid-cols-4 gap-y-[3.4rem] gap-x-[2.2rem]">
          {data.map((track: Track) => (
            <li key={track.ID} className='flex flex-col border border-gray-200 overflow-hidden rounded-md'>
              <Item {...track} />
            </li>
          ))}
        </ul>
      ) : <p>Loading...</p>}
    </div>

	)
}

export default tracks
