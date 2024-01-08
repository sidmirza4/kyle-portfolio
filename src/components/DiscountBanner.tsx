import { Strong, Text } from '@radix-ui/themes'
import React from 'react'

const DiscountBanner = () => {
	return (
		<div className="text-brand-white bg-primary-gradient py-5 px-0 md:px-3 overflow-x-hidden">
			<Text
				as="p"
				align="center"
				size="4"
				className="animate-marquee md:animate-none md:whitespace-normal whitespace-nowrap"
			>
				We support Parity Purchasing Power, so if you need it, use code
				<Strong>“PD2-2OAEOGQ”</Strong> to get <Strong>50%</Strong> off
				JavaScript Simplified.
			</Text>
		</div>
	)
}

export default DiscountBanner
