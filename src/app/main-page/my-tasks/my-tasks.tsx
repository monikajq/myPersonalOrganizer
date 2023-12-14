'use client'

import React, { useEffect, useState } from 'react';
import './my-tasks.css';
import { Task } from '@/shared/model/task.model';
import { AddTask } from '@/app/main-page/my-tasks/add-task/add-task';

export function MyTasks() {
	const [tasks, setTasks] = useState<Task[]>([]);

	const onTaskCreated = (task: Task) => {
		console.log('onTaskCreated');
		setTasks([
			...tasks,
			task
		]);
	};

	// const mockTasks: Task[] = [{
	// 	status: TaskStatus.TODO,
	// 	name: 'Task 1',
	// 	priority: TaskPriority.HIGH,
	// 	size: TaskSize.L,
	// 	details: 'Task 1 details'
	// }, {
	// 	status: TaskStatus.IN_PROGRESS,
	// 	name: 'Task 2',
	// 	priority: TaskPriority.MEDIUM,
	// 	size: TaskSize.M,
	// 	details: 'Task 2 details'
	// }, {
	// 	status: TaskStatus.DONE,
	// 	name: 'Task 3',
	// 	priority: TaskPriority.HIGH,
	// 	size: TaskSize.S,
	// 	details: 'Task 3 details'
	// }];
	//
	// useEffect(() => {
	// 	setTasks(mockTasks);
	// }, []);

	return (
		<section className='my-tasks-container'>
			<h2>My tasks</h2>

			{tasks.length > 0 ? (
				<table>
					<thead>
						<tr>
							<th>Status</th>
							<th>Task</th>
							<th>Priority</th>
							<th>Size</th>
							<th>Details</th>
						</tr>
					</thead>

					<tbody>
						{tasks.map((task, index) => (
							<tr key={`${index} ${task.name}`}>
								<td>{task.status}</td>
								<td>{task.name}</td>
								<td>{task.priority}</td>
								<td>{task.size}</td>
								<td>{task.details}</td>
							</tr>
						))}
					</tbody>
				</table>
			): (<span>No pending tasks</span>)}

			<AddTask onTaskCreated={onTaskCreated} />
		</section>
	)
}