import '@/shared/styles/_globals.css'
import '@/shared/styles/_variables.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
