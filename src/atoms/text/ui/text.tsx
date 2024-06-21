import clsx from 'clsx'
import { PropsWithChildren } from 'react'
import styles from './styles.module.scss'

interface TextProps extends PropsWithChildren {
	className?: string
}

const Text = ({ children, className }: TextProps) => {
	return <span className={clsx(styles.text, className)}>{children}</span>
}

export { Text }
