import { Text } from '@/atoms/text'
import { ButtonText } from '@/molecules/button-text'
import { useCounter } from '../'

export function Count() {
	const { count } = useCounter()

	return <Text>{count}</Text>
}

export function Increment() {
	const { increment } = useCounter()

	return <ButtonText text="increment" onClick={increment} />
}

export function Decrement() {
	const { decrement } = useCounter()

	return <ButtonText text="decrement" onClick={decrement} />
}
