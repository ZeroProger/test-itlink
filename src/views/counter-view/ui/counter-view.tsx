import { Count, Decrement, Increment } from '@/organisms/counter'
import styles from './styles.module.scss'

export function CounterView() {
	return (
		<div className={styles.view}>
			<Count />
			<Increment />
			<Decrement />
		</div>
	)
}
