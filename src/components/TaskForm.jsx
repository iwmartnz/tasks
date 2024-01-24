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
		<form onSubmit={handleSubmit} className="flex h-16 items-center gap-1">
			<input
				type="text"
				name="title"
				autoFocus
				value={taskData.title}
				onChange={handleChange}
				className=" bg-brand-light-gray text-brand-white focus:ring-brand-white h-12 w-full rounded-xl p-4 shadow-md focus:outline-none focus:ring-2"
			/>
			<div className=" flex gap-1">
				<Button
					onClick={handleSubmit}
					className=" text-brand-black rounded-xl p-3 shadow-md"
					background="bg-brand-accent"
				>
					<Plus />
				</Button>
				<Button
					onClick={onClose}
					className=" rounded-xl p-3 shadow-md"
					background="bg-brand-dark-gray hover:bg-brand-red"
				>
					<Close />
				</Button>
			</div>
		</form>
	)
}
export default TaskForm
