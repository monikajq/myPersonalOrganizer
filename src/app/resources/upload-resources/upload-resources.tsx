'use client'

import React, { useState } from 'react';

export function UploadResources() {
	const [fileNames, setFileNames] = useState<string[]>([]);

	const addFileToResources = (name: string) => {
		setFileNames([
			...fileNames,
			name
		]);
	};

	return (
		<section>
			<div className='upload-btn-container'>
				<input type="file" id="input" className='upload-btn' multiple  onChange={(e) => addFileToResources(e.target.value)} />
			</div>

			{fileNames.map((fileName, index) => (
				<p key={`${fileName} ${index}`}>{fileName.split('\\').pop()}</p>
			))}
		</section>
	);
}
