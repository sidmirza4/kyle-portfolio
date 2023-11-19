import { Flex, Text } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'

export const TextWithCheckMark = ({ children }) => {
	return (
		<Flex gap="4">
			<Image src="/tick.svg" alt="check" width={20} height={20} />
			<Text as="p" size="4">
				{children}
			</Text>
		</Flex>
	)
}
