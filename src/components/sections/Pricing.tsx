import React from 'react'
import Image from 'next/image'
import {
	Box,
	Container,
	Flex,
	Heading,
	Section,
	Separator,
	Text,
} from '@radix-ui/themes'
import Button from '../UI/Button'

const packages = [
	{
		name: 'basic',
		price: 149,
		discountedPrice: 127,
		features: [
			'Entire <Strong>JavaScript Simplified - Beginner</Strong> course',
			'Over <Strong>13 hours</Strong> of content across <Strong>74 videos</Strong>',
			'Before and after source code for all projects',
			'Exclusive access to private Discord community',
			'All future updates',
			'3 months of Quokka.js Pro',
			'Lifetime access',
		],
		CTAProps: {
			outline: true,
			rightIcon: (
				<Image
					src="/right-arrow-orange.svg"
					alt="arrow"
					width={20}
					height={20}
				/>
			),
			textClassName: 'uppercase text-brand-orange font-semibold',
		},
	},
	{
		name: 'premium',
		price: 399,
		discountedPrice: 297,
		badge: 'most popular',
		badgeBG: 'bg-brand-blue',
		features: [
			'<Strong>Everything in the Basic Package</Strong>',
			'Just under <Strong>40 hours</Strong> of content across <Strong>150 videos</Strong>',
			'<Strong>Six large bonus projects</Strong>',
			'Four interviews with successful self-taught developers on <Strong>how to land your first job</Strong>',
			'Download all videos for <Strong>offline access</Strong>',
			'Before and after source code for all projects',
			'Exclusive access to private Discord community',
			'All future updates',
			'3 months of Quokka.js Pro',
			'Lifetime access',
		],
		CTAProps: {
			rightIcon: (
				<Image src="/right-arrow.svg" alt="arrow" width={20} height={20} />
			),
			textClassName: 'uppercase text-brand-white',
		},
	},
	{
		name: 'complete',
		price: 299,
		discountedPrice: 197,
		badge: 'best value',
		badgeBG: 'bg-brand-bg-light',
		features: [
			'<Strong>Everything in the Basic Package</Strong>',
			'Over <Strong>27 hours</Strong> of content across <Strong>140 videos</Strong>',
			'Download all videos for <Strong>offline access</Strong>',
			'Before and after source code for all projects',
			'Exclusive access to private Discord community',
			'All future updates',
			'3 months of Quokka.js Pro',
			'Lifetime access',
		],
		CTAProps: {
			outline: true,
			rightIcon: (
				<Image
					src="/right-arrow-orange.svg"
					alt="arrow"
					width={20}
					height={20}
				/>
			),
			textClassName: 'uppercase text-brand-orange font-semibold',
		},
	},
]

const Pricing = () => {
	return (
		<Section className="py-[6.25rem] text-brand-text-dark bg-blue-gradient-reverse">
			<Container>
				<Heading size="9" className="!text-heading2 !mb-20" align="center">
					Everything You Need To Build At Any Level
				</Heading>

				<Flex
					gap="4"
					align="center"
					className="[&>*:nth-child(odd)]:bg-default-gray [&>*:nth-child(2)]:bg-brand-white [&>*:nth-child(2)]:border-8 [&>*:nth-child(2)]:border-brand-blue [&>*:nth-child(2)]:shadow-blue-shadow"
				>
					{packages.map((p) => (
						<PricingCard p={p} key={p.name} />
					))}
				</Flex>
			</Container>
		</Section>
	)
}

const PricingCard = ({ p }: { p: (typeof packages)[number] }) => {
	return (
		<Box
			className={`border 
			border-border-defaut
			rounded-7
			shadow-testimonial-card
			pt-12 px-6 pb-[1.75rem] flex-1 relative`}
		>
			<Text as="p" align="center" className="uppercase" mb="4" weight="bold">
				{p.name} package
			</Text>

			<Flex direction="column" className="gap-[1.75rem]" justify="between">
				<Flex align="center" justify="center" gap="3">
					<Text className="text-placeholder line-through">${p.price}</Text>
					<Text className="text-brand-blue text-[2.265rem]" weight="bold">
						${p.discountedPrice}
					</Text>
				</Flex>

				<Separator />

				<Box className="min-h-[27rem]">
					<Flex className="gap-5" direction="column">
						{p.features.map((f) => (
							<>
								<Flex gap="4">
									<Image src="/tick.svg" alt="check" width={20} height={20} />
									<Text
										as="p"
										size="3"
										dangerouslySetInnerHTML={{ __html: f }}
									/>
								</Flex>
							</>
						))}
					</Flex>
				</Box>

				<Button fullWidth {...p.CTAProps}>
					buy now
				</Button>
			</Flex>

			{/* BADGE */}
			{p.badge && (
				<div
					className={`py-3 px-4 text-[17px] font-bold ${p.badgeBG} inline-block rounded-3 uppercase text-brand-white absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2`}
				>
					{p.badge}
				</div>
			)}
		</Box>
	)
}

export default Pricing
