'use client'
import './add-task.css';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Task, TaskPriority, TaskSize, TaskStatus } from '@/shared/task.model';

interface AddTaskProps {
	setTaskCallback: (task: Task) => void;
}

export function AddTask({ setTaskCallback }: AddTaskProps) {
	const [name, setName] = useState<string>('');
	const [status, setStatus] = useState<TaskStatus | undefined>(undefined);
	const [priority, setPriority] = useState<TaskPriority | undefined>(undefined);
	const [size, setSize] = useState<TaskSize | undefined>(undefined);
	const [details, setDetails] = useState<string>('');

	const onAddTaskClick = (): void => {
		if (status && name && priority && size && details) {
			setTaskCallback({
				status: status,
				name: name,
				priority: priority,
				size: size,
				details: details
			});
		}
	}

	return (
		<section id='AddTask' className='add-task-container'>
			<h2>Add new task</h2>

			<Form className='add-task-form'>
				<Form.Group className="mb-6">
					<Form.Control value={name} placeholder="Task name" onChange={(e) => setName(e.target.value)} />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Select className="mb-3" value={status} onChange={(e) => setStatus(e.target.value as TaskStatus)} aria-label="Dropdown menu with task status to select">
						<option>Set task status</option>
						{Object.values(TaskStatus).map((taskStatus) => (
							<option key={taskStatus} value={taskStatus}>{taskStatus}</option>
						))}
					</Form.Select>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Select className="mb-3" value={priority} onChange={(e) => setPriority(e.target.value as TaskPriority)} aria-label="Dropdown menu with task priorities to select">
						<option>Set task priority</option>
						{Object.values(TaskPriority).map((taskPriority) => (
							<option key={taskPriority} value={taskPriority}>{taskPriority}</option>
						))}
					</Form.Select>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Select className="mb-3" value={size} onChange={(e) => setSize(e.target.value as TaskSize)} aria-label="Dropdown menu with task size to select">
						<option>Set task size</option>
						{Object.values(TaskSize).map((taskSize) => (
							<option key={taskSize} value={taskSize}>{taskSize}</option>
						))}
					</Form.Select>
				</Form.Group>

				<Form.Group className="mb-5">
					<Form.Control value={details} placeholder="Put task details here" onChange={(e) => setDetails(e.target.value)} />
				</Form.Group>

				<Button variant="primary" type="button" className='add-task-btn' onClick={onAddTaskClick}>
					Create task
				</Button>
			</Form>
		</section>
	)
}