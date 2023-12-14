import Link from 'next/link';
import React from 'react';

export function Sidebar() {
	return (
		<nav className='sidebar'>
			<Link href="/" className='link'>Main page</Link>
			<Link href="/resources" className='link'>Resources</Link>
		</nav>
	)
}
