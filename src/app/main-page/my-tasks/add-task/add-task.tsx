'use client'

import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './add-task.css';
import { TaskPriority, TaskSize, TaskStatus } from '@/shared/model/task.model';

export function AddTask() {

	return (
		<section id='AddTask' className='add-task-container'>
			<h2>Add new task</h2>

			<Form className='add-task-form'>
				<Form.Group className="mb-6">
					<Form.Control value={'taskName'} placeholder="Task name" onChange={(e) => {}} />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Select className="mb-3" value={'taskStatus'} onChange={(e) => {}} aria-label="Dropdown menu with task status to select">
					</Form.Select>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Select className="mb-3" value={'taskPriority'} onChange={(e) => {}} aria-label="Dropdown menu with task priorities to select">
						<option>Set task priority</option>
					</Form.Select>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Select className="mb-3" value={'taskSize'} onChange={(e) => {}} aria-label="Dropdown menu with task size to select">
						<option>Set task size</option>
					</Form.Select>
				</Form.Group>

				<Form.Group className="mb-5">
					<Form.Control value={'taskDetails'} placeholder="Put task details here" onChange={() => {}} />
				</Form.Group>

				<Button variant="primary" type="button" className='add-task-btn' onClick={() => {}}>
					Create task
				</Button>
			</Form>
		</section>
	)
}
