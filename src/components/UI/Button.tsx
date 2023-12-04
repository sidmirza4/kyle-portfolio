import { Box, Flex, Text } from '@radix-ui/themes'
import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	outline?: boolean
	rightIcon?: React.ReactNode
	textClassName?: string
	fullWidth?: boolean
}

const Button = (props: ButtonProps) => {
	const {
		children,
		outline = false,
		rightIcon = null,
		textClassName,
		fullWidth = false,
		...rest
	} = props

	return (
		<button
			className={`w-max rounded-5 md:py-4 md:px-12 py-3 px-9 ${
				fullWidth && '!w-full'
			} 
				${
					outline
						? 'border-2 border-brand-orange bg-transparent'
						: 'border-none bg-orange-gradient'
				}
			`}
			{...rest}
		>
			<Flex gap="3" align="center" justify="center">
				<Text
					className={`font-bolder ${textClassName}`}
					size={{
						initial: '3',
						md: '5',
					}}
				>
					{children}
				</Text>

				{rightIcon && <Box>{rightIcon}</Box>}
			</Flex>
		</button>
	)
}

export default Button
