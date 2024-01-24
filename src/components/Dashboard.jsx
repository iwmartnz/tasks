import AddTask from './AddTask'
import TaskList from './TaskList'

const Dashboard = () => {
	return (
		<main className=" bg-brand-gray mx-auto flex min-h-96 w-full max-w-xl flex-col gap-2 rounded-xl p-4">
			<AddTask />
			<TaskList />
		</main>
	)
}

export default Dashboard
