import { Strong, Text } from '@radix-ui/themes'
import React from 'react'
import FiveStars from './UI/FiveStars'

export const HappyCustomers = ({ transparent }: { transparent?: boolean }) => {
	return (
		<div
			className={`flex ${
				transparent ? 'bg-transparent' : 'bg-brand-bg-light'
			} w-max px-[14px] py-[11px] rounded-[7px] gap-[7px]`}
		>
			<FiveStars />
			<Text
				className={`${
					transparent ? 'text-brand-text-dark' : 'text-brand-white'
				}`}
			>
				<Strong>4.9/5</Strong> Based on <Strong>100+</Strong> Happy Customers
			</Text>
		</div>
	)
}
