import { useState } from 'react'
import Task from './Task'
import { useTasksContext } from '../context/TasksContext'
import { Cup } from './Icons'

const TaskList = () => {
	const { tasks } = useTasksContext()
	return (
		<div className=" rounded-2xl">
			{tasks.length > 0 ? (
				<ul className=" flex flex-col gap-2">
					{tasks.map((task) => (
						<li key={task.id} className="">
							<Task task={task} />
						</li>
					))}
				</ul>
			) : (
				<p className=" flex items-center justify-center gap-2 text-xl">
					No tienes tareas pendientes <Cup color="#ff7124" />
				</p>
			)}
		</div>
	)
}

export default TaskList
