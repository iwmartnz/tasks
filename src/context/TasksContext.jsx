import { createContext, useContext } from 'react'
import useTasks from '../hooks/useTasks'

export const TasksContext = createContext(null)

export const TasksProvider = ({ children }) => {
	const { tasks, addTask, deleteTask, completeTask, updateTask } = useTasks()

	return (
		<TasksContext.Provider value={{ tasks, addTask, deleteTask, completeTask, updateTask }}>
			{children}
		</TasksContext.Provider>
	)
}

export const useTasksContext = () => {
	const context = useContext(TasksContext)
	if (!context) {
		throw new Error('useTasksContext mus be used within a TasksContextProvider')
	} else {
		return context
	}
}
