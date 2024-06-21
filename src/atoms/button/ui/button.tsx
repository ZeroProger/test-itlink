import clsx from 'clsx'
import React from 'react'
import styles from './styles.module.scss'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ className, children, ...props }: ButtonProps) => {
	return (
		<button className={clsx(styles.button, className)} {...props}>
			{children}
		</button>
	)
}

export { Button }
