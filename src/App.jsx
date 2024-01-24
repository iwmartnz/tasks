import Dashboard from './components/Dashboard'
import Header from './components/Header'
import { TasksProvider } from './context/TasksContext'

function App() {
	return (
		<>
			<Header />
			<TasksProvider>
				<Dashboard />
			</TasksProvider>
		</>
	)
}

export default App
