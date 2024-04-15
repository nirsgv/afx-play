'use client';
import React from 'react';
import Image from 'next/image';
import { Track } from '@/common-types';
import Link from 'next/link'
import { Star } from 'react-feather';


const ListTrack = ({         			
	ARTIST_NAME,
	TRACK_TITLE,
	YEAR,
	GENRES,
	LINKS,
	ID,
	ALBUM_ID }: Track) => {
    return (
        <div className={`w-full flex p-2 bg-gray-50 rounded-xl`}>
					<div className="flex gap-x-4">
							<Image src={`/album_covers/200x200pp/${encodeURIComponent(ALBUM_ID)}.jpg`}
										alt={''}
										width={70}
										height={70}
										className='p-0 bg-transparent shadow-md rounded-full overflow-hidden relative'
							/>
							<p className="flex flex-col">
									<span className="">{TRACK_TITLE}</span>
									<span className="-name">{ARTIST_NAME}</span>
									<span className="">{`${YEAR}`}</span>
							</p>
					</div>
					<Link href={`track/${encodeURIComponent(ID)}`}>
						<span>More Info</span>
					</Link>
					<div className="actions">
						<Star color='brown' size="24" strokeWidth={1} fill="brown"/> 
					</div>
        </div>
    )
}

export default ListTrack;