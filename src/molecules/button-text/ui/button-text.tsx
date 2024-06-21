import { Button } from '@/atoms/button'
import { Text } from '@/atoms/text'
import { memo } from 'react'

interface ButtonTextProps {
	text: string
	onClick: React.MouseEventHandler<HTMLButtonElement>
}

const ButtonText = memo(function ButtonText({ text, onClick }: ButtonTextProps) {
	return (
		<Button onClick={onClick}>
			<Text>{text}</Text>
		</Button>
	)
})

export { ButtonText }
