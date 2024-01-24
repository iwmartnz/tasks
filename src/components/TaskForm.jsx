import { useState } from 'react'
import Button from './Button'
import { Close, Plus } from './Icons'

const TaskForm = ({ task = { title: '', details: '' }, onSubmit, onClose }) => {
	const [taskData, setTaskData] = useState(task)

	const handleChange = (event) => {
		const { name, value } = event.target

		setTaskData((prevData) => {
			return {
				...prevData,
				[name]: value
			}
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(taskData)
		onSubmit(taskData)
		onClose()
	}

	return (
		<form onSubmit={handleSubmit} className="flex h-16 items-center gap-2">
			<input
				type="text"
				name="title"
				autoFocus
				value={taskData.title}
				onChange={handleChange}
				className=" bg-brand-light-gray text-brand-white focus:ring-brand-accent h-12 w-full rounded-xl p-4 focus:outline-none focus:ring-2"
			/>
			<div className=" flex gap-2 px-2">
				<Button onClick={handleSubmit} className=" bg-brand-accent text-brand-black rounded-xl p-3">
					<Plus />
				</Button>
				<Button onClick={onClose} className=" rounded-xl p-3">
					<Close />
				</Button>
			</div>
		</form>
	)
}
export default TaskForm
