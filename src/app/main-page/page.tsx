import React from 'react';
import Link from 'next/link';
import './main-page.css';

export default function MainPage() {
	return (
		<section id='MainPage' className='main-page-container'>
			<nav className='sidebar'>
				<Link href="/" className='link'>Main page</Link>
				<Link href="/resources" className='link'>Resources</Link>
			</nav>

			<div className='header'>
				<h2>Welcome to your Personal Organizer!</h2>
			</div>

			<div className='main-content'>
			</div>
		</section>
	)
}