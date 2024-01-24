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
				<div className=" flex flex-col items-center justify-center pt-8">
					<Cup color="#ff7124" height="40" width="40" />
					<p className="max-w-52 text-center text-lg">You have no pending tasks</p>
				</div>
			)}
		</div>
	)
}

export default TaskList
