import { cn } from '@/lib/utils'
import { Box, Flex, Text } from '@radix-ui/themes'
import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	outline?: boolean
	rightIcon?: React.ReactNode
	textClassName?: string
	fullWidth?: boolean
	size?: 'sm' | 'md' | 'lg'
}

const Button = (props: ButtonProps) => {
	const {
		children,
		outline = false,
		rightIcon = null,
		textClassName,
		fullWidth = false,
		className,
		size = 'lg',
		...rest
	} = props

	return (
		<button
			className={cn(
				`rounded-5`,
				`${fullWidth && '!w-full'} 
					${
						outline
							? 'border-2 border-brand-orange bg-transparent'
							: 'border-none bg-orange-gradient'
					}
				${className}`,
				{
					'px-7 py-[14px]': size === 'md',
					'px-5 py-2': size === 'sm',
					'px-9 py-5': size === 'lg',
				}
			)}
			{...rest}
		>
			<Flex gap="3" align="center" justify="center">
				<Text
					className={cn(
						`font-bolder`,
						{
							'text-3': size === 'md',
							'text-2': size === 'sm',
							'text-5': size === 'lg',
						},
						`${textClassName}`
					)}
				>
					{children}
				</Text>

				{rightIcon && <Box>{rightIcon}</Box>}
			</Flex>
		</button>
	)
}

export default Button
