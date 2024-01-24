import { useReducer } from 'react'

const initialTasks = [
	{
		id: 0,
		title: 'Agregar una nueva tarea',
		importance: 'regular',
		done: true
	},
	{
		id: 1,
		title: 'Hacer doble click para editar una tarea',
		importance: 'regular',
		done: true
	},
	{
		id: 2,
		title: 'Contratar a Israel :)',
		importance: 'regular',
		done: false
	}
]

const tasksReducer = (tasks, action) => {
	switch (action.type) {
		case 'added': {
			if (action.title === '' || action.title.startsWith(' ')) {
				return tasks
			} else {
				return [
					{
						id: crypto.randomUUID(),
						title: action.title,
						details: action.details,
						done: false
					},
					...tasks
				]
			}
		}
		case 'deleted': {
			return tasks.filter((task) => task.id !== action.id)
		}
		case 'completed': {
			return tasks.map((task) => {
				if (task.id === action.id) {
					return { ...task, done: !action.done }
				} else {
					return task
				}
			})
		}
		case 'updated': {
			return tasks.map((task) => {
				if (task.id === action.id) {
					console.log(action)
					return { ...task, ...action }
				} else {
					return task
				}
			})
		}
	}
}

export default function useTasks() {
	const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

	const addTask = (newTask) => {
		dispatch({
			type: 'added',
			id: crypto.randomUUID,
			title: newTask.title,
			details: newTask.details,
			done: false
		})
	}
	const deleteTask = (task) => {
		dispatch({
			type: 'deleted',
			id: task.id
		})
	}
	const completeTask = (task) => {
		dispatch({
			type: 'completed',
			id: task.id,
			done: task.done
		})
	}
	const updateTask = (task) => {
		dispatch({
			type: 'updated',
			id: task.id,
			title: task.title
		})
	}

	return { tasks, addTask, deleteTask, completeTask, updateTask }
}
