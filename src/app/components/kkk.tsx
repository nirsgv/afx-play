'use client';
import React from 'react';
import { useTheme } from '@/app/context/theme-provider';
import { Grid, List } from 'react-feather';


const Kkk = () => {
	const { theme, toggleDataDisplay } = useTheme();

    return (
			<div>
				<Grid color='#333333' size="24"  onClick={toggleDataDisplay} /> 
				<List color='#333333' size="24"  onClick={toggleDataDisplay} /> 
				{theme.dataDisplay}
			</div>
    )
}

export default Kkk;