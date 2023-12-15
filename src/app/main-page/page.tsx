import './main-page.css';
import { Sidebar } from '@/app/shared/sidebar/sidebar';
import { MyTasks } from '@/app/main-page/my-tasks/my-tasks';

export default function MainPage() {
	return (
		<section id='MainPage' className='main-page-container'>
			<Sidebar />
			<MyTasks/>
		</section>
	);
}