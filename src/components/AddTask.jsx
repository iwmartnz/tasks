import { useState } from 'react'
import Button from './Button'
import { Plus } from './Icons'
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
				className=" rounded-md shadow-md"
			>
				Add Task
			</Button>
			{showForm && <TaskForm onSubmit={addTask} onClose={handleCloseForm} />}
		</div>
	)
}

export default AddTask
