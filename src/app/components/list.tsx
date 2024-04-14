'use client';
import React from 'react';
import Item from './item';
import { Track } from '@/common-types';


const List = (data: Track[]) => {
    return (<div>{data ? (	<ul>
		{data.map((track: Track) =>(		<li>
			<Item key={track.ID} {...track} />
		</li>))}
	</ul>) : <ul></ul>}
</div>
    )
}

export default List;