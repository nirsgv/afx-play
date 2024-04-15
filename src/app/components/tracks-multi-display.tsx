'use client';
import React from 'react';
import { Track } from '@/common-types';
import Item from './item';
import { useTheme } from '@/app/context/theme-provider';
interface Props {
	tracks: Track[];
}

const TracksMultiDisplay = ({ tracks }: Props) => {
	const { theme } = useTheme();
		const isList = theme.dataDisplay === 'list';
    return (
				<div>
				<h1>{JSON.stringify(theme)}</h1>
				<ul className="grid grid-cols-4 gap-y-[3.4rem] gap-x-[2.2rem]">
          {tracks.map((track: Track) => (
            <li key={`${track.ID}${Math.random()}`} className='flex flex-col border border-gray-200 overflow-hidden rounded-md'>
              {isList ? <Item {...track} /> :  <Item {...track} />}
            </li>
          ))}
        </ul>
				</div>
    )
}

export default TracksMultiDisplay;