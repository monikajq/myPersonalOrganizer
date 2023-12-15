export enum TaskStatus {
	TODO = 'To do',
	IN_PROGRESS = 'In progress',
	DONE = 'Done',
	CANCELED = 'Canceled'
}

export enum TaskPriority {
	HIGH = 'High',
	MEDIUM = 'Medium',
	LOW = 'Low'
}

export enum TaskSize {
	XS = 'XS',
	S = 'S',
	M = 'M',
	L = 'L',
	XL = 'XL',
}

export interface Task {
	status: TaskStatus;
	name: string;
	priority: TaskPriority;
	size: TaskSize;
	details: string;
}
