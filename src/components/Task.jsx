import { useState } from 'react'
import Button from './Button'
import Checkbox from './Checkbox'
import TaskForm from './TaskForm'
import { Close, Details, Edit } from './Icons'
import { useTasksContext } from '../context/TasksContext'

const Task = ({ task }) => {
	const { completeTask, deleteTask, updateTask } = useTasksContext()

	const [showForm, setShowForm] = useState(false)

	const handleOpenForm = () => {
		setShowForm(true)
	}
	const handleCloseForm = () => {
		setShowForm(false)
	}

	return (
		<>
			{showForm ? (
				<TaskForm task={task} onSubmit={updateTask} onClose={handleCloseForm} />
			) : (
				<div
					onDoubleClick={handleOpenForm}
					className=" hover:bg-brand-black/20 group flex min-h-16 items-center justify-between rounded-xl p-2"
				>
					{/* Mark as complete checkbox */}
					<Checkbox
						onChange={() => {
							completeTask(task)
						}}
						isChecked={task.done}
					/>
					{/* task info*/}
					<div
						className={`flex flex-1 flex-col pl-4 ${task.done && ' text-neutral-600 line-through'}`}
					>
						<span>{task.title}</span>
						{task.details && (
							<p
								className={` ${
									task.done && ' text-neutral-600'
								} flex items-center gap-2 pl-2 text-sm text-neutral-400 `}
							>
								<span>
									<Details />
								</span>
								{task.details}
							</p>
						)}
					</div>
					<Button
						onClick={() => {
							deleteTask(task)
						}}
						className=" rounded-md"
						padding="p-1"
						background=" bg-brand-light-gray hover:bg-brand-red"
					>
						<Close />
					</Button>
				</div>
			)}
		</>
	)
}

export default Task
