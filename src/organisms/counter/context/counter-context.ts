import { createContext, useContext } from 'react'

interface CounterContextType {
	count: number
	increment: () => void
	decrement: () => void
}

const CounterContext = createContext<CounterContextType | undefined>(undefined)

const useCounter = () => {
	const context = useContext(CounterContext)

	if (!context) {
		throw new Error('useCounter must be used within a CounterProvider')
	}

	return context
}

export { CounterContext, useCounter }
