import { Strong, Text } from '@radix-ui/themes'
import React from 'react'
import Image from 'next/image'

export const HappyCustomers = ({
	transparent,
	dpWidth,
}: {
	transparent?: boolean
	dpWidth?: number
}) => {
	return (
		<div
			className={`flex items-center flex-wrap ${
				transparent ? 'bg-transparent' : 'bg-brand-bg-light'
			} w-max px-[14px] py-[11px] rounded-[7px] gap-[7px]`}
		>
			<Image src="/clubbedDPs.png" alt="DP" width={dpWidth || 86} height={22} />
			<Text
				className={`${transparent ? 'text-brand-text-dark' : 'text-brand-white'}
				${dpWidth ? 'text-[14px] sm:text-[20px]' : 'text-[14px]'}
				`}
			>
				{' '}
				Trusted By <Strong>2400+</Strong> Students
			</Text>
		</div>
	)
}
