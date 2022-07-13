import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import AddField from './AddField/AddField';
import ToDoItem from './Item/ToDoItem';

function Home() {
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(true);

	const changeToDo = async (id) => {
		try {
			setLoading(true);

			const isCompleted = todos.filter((todo) => todo.id === id)[0].isCompleted;

			setTodos(
				todos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)),
			);

			await axios.put(`https://62ce6167826a88972dfa8395.mockapi.io/todos/${id}`, {
				isCompleted: !isCompleted,
			});
			setLoading(false);
		} catch (err) {
			alert('Ошибка задания');
			console.error(err);
		}
	};

	const removeToDo = async (id) => {
		try {
			setLoading(true);
			setTodos(todos.filter((todo) => todo.id !== id));
			await axios.delete(`https://62ce6167826a88972dfa8395.mockapi.io/todos/${id}`);
			setLoading(false);
		} catch (err) {
			alert('Ошибка при удалении задания');
			console.error(err);
		}
	};

	const addToDo = async (title) => {
		try {
			setLoading(true);
			const todoBody = { title, isCompleted: false };
			//crutch for mockapi, to get mockapi ID for each todo
			await axios.post(`https://62ce6167826a88972dfa8395.mockapi.io/todos/`, todoBody);
			const { data } = await axios.get(`https://62ce6167826a88972dfa8395.mockapi.io/todos`);
			//todo returns with id prop
			const todo = data[data.length - 1];
			setTodos([todo, ...todos]);
			setLoading(false);
		} catch (err) {
			alert('Ошибка при добавлении задания');
			console.error(err);
		}
	};

	useEffect(() => {
		async function fetchData() {
			try {
				const { data } = await axios.get(`https://62ce6167826a88972dfa8395.mockapi.io/todos`);
				setTodos(data.reverse());
				setLoading(false);
			} catch (error) {
				alert('Oшибка при запросе данных');
				console.error(error);
			}
		}

		fetchData();
	}, []);

	return (
		<div className=' text-white md:w-3/5 w-full mx-auto'>
			<h1 className='font-bold text-4xl text-center mb-9'>To Do List</h1>
			<AddField addToDo={addToDo} />
			<div className='w-full h-7 p-2'>
				{loading && <ThreeDots height='15' width='2000' color='white' ariaLabel='loading' />}
			</div>
			{todos.length > 0 ? (
				todos.map((todo) => (
					<ToDoItem todo={todo} key={todo.id} change={changeToDo} remove={removeToDo} />
				))
			) : (
				<>{!loading && <h2 className='font-bold text-2xl text-center'>No Tasks</h2>}</>
			)}
		</div>
	);
}

export default Home;
