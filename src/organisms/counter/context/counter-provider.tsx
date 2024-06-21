import { debounce } from '@/shared/utils/debounce'
import { PropsWithChildren, useCallback, useState } from 'react'
import { CounterContext } from './counter-context'

const CounterProvider = ({ children }: PropsWithChildren) => {
	const [count, setCount] = useState(0)

	const increment = useCallback(
		debounce(() => setCount((prev) => prev + 1), 500),
		[]
	)
	const decrement = useCallback(
		debounce(() => setCount((prev) => prev - 1), 500),
		[]
	)

	return (
		<CounterContext.Provider value={{ count, increment, decrement }}>
			{children}
		</CounterContext.Provider>
	)
}

export { CounterProvider }
