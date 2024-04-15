'use client';
import React from 'react';
import { Track } from '@/common-types';
import ListTrack from './list-track';
import GridTrack from './grid-track';
import { useTheme } from '@/app/context/theme-provider';
interface Props {
  tracks: Track[];
}

const TracksMultiDisplay = ({ tracks }: Props) => {
  const { theme } = useTheme();
  const isList = theme.dataDisplay === 'list';
  const gridItemStyle = 'grid-cols-4  gap-y-[2rem] gap-x-[2.2rem]';
  const listItemStyle = 'grid-cols-1 gap-y-[1rem]';

  return (
    <div>
      <ul className={`grid ${isList ? listItemStyle : gridItemStyle} `}>
        {tracks.map((track: Track) => (
          <li key={`${track.ID}${Math.random()}`} className="flex flex-col overflow-hidden">
            {isList ? <ListTrack {...track} /> : <GridTrack {...track} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TracksMultiDisplay;
