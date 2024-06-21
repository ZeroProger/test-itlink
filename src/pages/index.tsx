import { CounterProvider } from '@/organisms/counter'
import { CounterView } from '@/views/counter-view'
import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<title>Counter with usage AtomicDesign</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<CounterProvider>
					<CounterView />
				</CounterProvider>
			</main>
		</>
	)
}
