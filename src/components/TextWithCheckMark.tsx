import { Flex, Text } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'

export const TextWithCheckMark = ({
	children,
	checkType = 'tick',
}: {
	children: React.ReactNode
	checkType?: 'tick' | 'circle'
}) => {
	return (
		<Flex gap="4" align="center">
			<Image
				src={checkType === 'tick' ? '/tick.svg' : '/circular-check.svg'}
				alt="check"
				width={checkType === 'tick' ? 20 : 32}
				height={checkType === 'tick' ? 20 : 32}
			/>
			<Text
				as="p"
				size={{
					initial: '3',
					md: '4',
				}}
			>
				{children}
			</Text>
		</Flex>
	)
}
