import { Flex } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'

const FiveStars = () => {
	return (
		<Flex>
			{new Array(5).fill('_').map((_, i) => (
				<Image src="/star.svg" alt="star" key={i} width={14} height={14} />
			))}
		</Flex>
	)
}

export default FiveStars
