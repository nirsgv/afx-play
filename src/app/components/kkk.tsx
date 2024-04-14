'use client';
import React from 'react';
import { useView } from '../context/view-context';
import { Grid, List } from 'react-feather';


const Kkk = () => {
	const { viewMode, toggleViewMode } = useView();

    return (
			<div>
				<Grid color='#333333' size="24"  onClick={toggleViewMode} /> 
				<List color='#333333' size="24"  /> 
				{viewMode}
			</div>
    )
}

export default Kkk;