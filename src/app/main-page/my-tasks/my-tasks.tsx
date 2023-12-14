'use client'

import React, { useState } from 'react';
import './my-tasks.css';
import { Task } from '@/shared/model/task.model';

export function MyTasks() {
	const [tasks, setTasks] = useState<Task[]>([]);

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
		</section>
	)
}