import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';

const AddField = ({ addToDo }) => {
	const [title, setTitle] = useState('');

	const handleAdd = (title) => {
		if (title.trim()) {
			addToDo(title);
			setTitle('');
		}
	};

	return (
		<div className='pb-7  border-b-2 border-pink-500 '>
			<div className='bg-gray-700 p-3 w-full rounded-2xl flex justify-between'>
				<input
					className='bg-transparent border-none outline-none w-4/5'
					type='text'
					value={title}
					placeholder={'Add a task...'}
					onChange={(e) => setTitle(e.target.value)}
					onKeyPress={(e) => e.key === 'Enter' && handleAdd(title)}
				/>
				<button
					onClick={() => handleAdd(title)}
					className='border-2 rounded-xl border-pink-500 w-8 h-8 bg-pink-500
            text-gray-700
            flex items-center justify-center'>
					<GoPlus size={24} />
				</button>
			</div>
		</div>
	);
};

export default AddField;
