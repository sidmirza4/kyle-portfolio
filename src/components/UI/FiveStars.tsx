import { Flex } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'

const FiveStars = ({ size = 14 }: { size?: number }) => {
	return (
		<Flex>
			{new Array(5).fill('_').map((_, i) => (
				<Image src="/star.svg" alt="star" key={i} width={size} height={size} />
			))}
		</Flex>
	)
}

export default FiveStars
