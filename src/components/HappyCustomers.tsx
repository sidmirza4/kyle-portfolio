import { Strong, Text } from '@radix-ui/themes'
import React from 'react'
import FiveStars from './UI/FiveStars'
import Image from 'next/image'

export const HappyCustomers = ({ transparent }: { transparent?: boolean }) => {
	return (
		<div
			className={`flex ${
				transparent ? 'bg-transparent' : 'bg-brand-bg-light'
			} w-max px-[14px] py-[11px] rounded-[7px] gap-[7px]`}
		>
			<Image src="/clubbedDPs.svg" alt="DP" width={86} height={22} />
			<Text
				className={`${
					transparent ? 'text-brand-text-dark' : 'text-brand-white'
				}`}
			>
				{' '}
				Trusted By <Strong>2400+</Strong> Students
			</Text>
		</div>
	)
}
