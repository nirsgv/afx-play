'use client';
import React from 'react';
import Image from 'next/image';
import { Track } from '@/common-types';
import Link from 'next/link';

const Item = ({ ARTIST_NAME, TRACK_TITLE, YEAR, GENRES, LINKS, ID, ALBUM_ID }: Track) => {
  return (
    <div className="bg-gray-50 rounded-xl pt-[1.8rem] px-[1.2rem]">
      <div className="">
        <div className="flex justify-between px-4">
          <p className="flex flex-col">
            <span className="track__artist-name">{ARTIST_NAME}</span>
            <span className="track__track-title">{TRACK_TITLE}</span>
            <span className="track__album-title">{`${YEAR}`}</span>
          </p>

          <Image
            src={`/album_covers/200x200pp/${encodeURIComponent(ALBUM_ID)}.jpg`}
            alt={''}
            width={100}
            height={100}
            className="w-20 h-20 p-0 bg-transparent shadow-md rounded-full overflow-hidden relative"
          />
        </div>

        {/* <Tags className="track__track-tags" tags={GENRES} tagCb={(tag) => filterByTagCb(tag)}/> */}
      </div>

      {/* <List baseClassName={"internal-links"}>
                <Links className="track__track-links" links={LINKS} platform={'YOUTUBE'} 
								setPlayerItem={setPlayerItem} ID={ID} />
                <MoreInfoButton ID={ID}/>
            </List> */}
      <Link href={`track/${encodeURIComponent(ID)}`}>
        <span>More Info</span>
      </Link>
    </div>
  );
};

export default Item;
