import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import Header from './components/Header'
import { TasksProvider } from './context/TasksContext'

function App() {
	return (
		<>
			<Header />
			<TasksProvider>
				<Dashboard />
			</TasksProvider>
			<Footer />
		</>
	)
}

export default App
