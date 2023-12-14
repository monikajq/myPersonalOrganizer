import React from 'react';
import './resources.css';
import { Sidebar } from '@/app/shared/sidebar/sidebar';
import { Header } from '@/app/shared/header/header';
import { UploadResources } from '@/app/resources/upload-resources/upload-resources';

export default function Resources() {
	return (
		<div id='MyResources' className='my-resources-container'>
			<Sidebar />
			<Header />

			<div className='main-content'>
				<h3>My resources</h3>

				<UploadResources />
			</div>
		</div>
	)
}
