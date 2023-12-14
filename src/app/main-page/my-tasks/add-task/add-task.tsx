'use client'

import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './add-task.css';
import { Task, TaskPriority, TaskSize, TaskStatus } from '@/shared/model/task.model';

interface AddTaskProps {
	onTaskCreated: (task: Task) => void;
}

export function AddTask({ onTaskCreated }: AddTaskProps) {
	const [taskName, setTaskName] = useState<string>('');
	const [taskStatus, setTaskStatus] = useState<TaskStatus | undefined>();
	const [taskPriority, setTaskPriority] = useState<TaskPriority | undefined>();
	const [taskSize, setTaskSize] = useState<TaskSize | undefined>();
	const [taskDetails, setTaskDetails] = useState<string>('');

	const onCreateTaskBtnClick = () => {
		if (taskStatus && taskName && taskPriority && taskSize) {
			onTaskCreated({
				status: taskStatus,
				name: taskName,
				priority: taskPriority,
				size: taskSize,
				details: taskDetails
			});
		}
	}

	return (
		<section id='AddTask' className='add-task-container'>
			<h2>Add new task</h2>

			<Form className='add-task-form'>
				<Form.Group className="mb-6">
					<Form.Control value={taskName} placeholder="Task name" onChange={(e) => setTaskName(e.target.value)} />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Select className="mb-3" value={taskStatus} onChange={(e) => setTaskStatus(e.target.value as TaskStatus)} aria-label="Dropdown menu with task status to select">
						<option>Set task status</option>
						{Object.values(TaskStatus).map((taskStatusItem) => (
							<option key={taskStatusItem} value={taskStatusItem}>{taskStatusItem}</option>
						))}
					</Form.Select>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Select className="mb-3" value={taskPriority} onChange={(e) => setTaskPriority(e.target.value as TaskPriority)} aria-label="Dropdown menu with task priorities to select">
						<option>Set task priority</option>
						{Object.values(TaskPriority).map((taskPriority) => (
							<option key={taskPriority} value={taskPriority}>{taskPriority}</option>
						))}
					</Form.Select>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Select className="mb-3" value={taskSize} onChange={(e) => setTaskSize(e.target.value as TaskSize)} aria-label="Dropdown menu with task size to select">
						<option>Set task size</option>
						{Object.values(TaskSize).map((taskSize) => (
							<option key={taskSize}  value={taskSize}>{taskSize}</option>
						))}
					</Form.Select>
				</Form.Group>

				<Form.Group className="mb-5">
					<Form.Control value={taskDetails} placeholder="Put task details here" onChange={(e) => setTaskDetails(e.target.value)} />
				</Form.Group>

				<Button variant="primary" type="button" className='add-task-btn' onClick={onCreateTaskBtnClick}>
					Create task
				</Button>
			</Form>
		</section>
	)
}
