import React from 'react';
import './main-page.css';
import { Sidebar } from '@/app/shared/sidebar/sidebar';
import { Header } from '@/app/shared/header/header';
import { MyTasks } from '@/app/main-page/my-tasks/my-tasks';

export default function MainPage() {
	return (
		<section id='MainPage' className='main-page-container'>
			<Sidebar />
			<Header />

			<div className='main-content'>
				<MyTasks />
			</div>
		</section>
	)
}