import React from 'react';
import './main-page.css';
import { Sidebar } from '@/app/shared/sidebar/sidebar';
import { Header } from '@/app/shared/header/header';

export default function MainPage() {
	return (
		<section id='MainPage' className='main-page-container'>
			<Sidebar />
			<Header />

			<div className='main-content'>
			</div>
		</section>
	)
}