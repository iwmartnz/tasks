import { useState } from 'react'
import Button from './Button'
import { useTasksContext } from '../context/TasksContext'
import TaskForm from './TaskForm'

const AddTask = () => {
	const { addTask } = useTasksContext()
	const [showForm, setShowForm] = useState(false)

	const handleOpenForm = () => {
		setShowForm(true)
	}
	const handleCloseForm = () => {
		setShowForm(false)
	}

	return (
		<div className="flex flex-col gap-2">
			<Button
				onClick={handleOpenForm}
				onDisabled={showForm}
				onAutoFocus={showForm == false}
				className=" rounded-lg shadow-md"
				background=" bg-brand-dark-gray hover:bg-brand-black/80"
			>
				Add Task
			</Button>
			{showForm && <TaskForm onSubmit={addTask} onClose={handleCloseForm} />}
		</div>
	)
}

export default AddTask
