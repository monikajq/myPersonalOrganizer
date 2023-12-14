import React from 'react';
import './resources.css';
import Link from 'next/link';
import { Sidebar } from '@/app/shared/sidebar/sidebar';
import { Header } from '@/app/shared/header/header';

export default function Resources() {
	return (
		<div id='MyResources' className='my-resources-container'>
			<Sidebar />
			<Header />

			<div className='main-content'>
				<h3>My resources</h3>
			</div>
		</div>
	)
}
