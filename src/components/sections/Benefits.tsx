import {
	Container,
	Flex,
	Heading,
	Section,
	Text,
	Box,
	Grid,
} from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'
import Button from '../UI/Button'

const benefits = [
	{
		title: 'Master the Art of Building Any Project',
		description:
			'No more Googling for basic information. Break free from guided projects and learn everything you need to create diverse apps on your own.',
		icon: '/build.svg',
	},
	{
		title: 'Learn How to Think Like a Developer',
		description:
			"Sharpen your problem-solving skills and cultivate a developer's mindset through numerous exercises and projects.",
		icon: '/mind.svg',
	},
	{
		title: 'Achieve Better Work-Life Balance',
		description:
			'Gain the ability to work remotely, freelance, or explore various job opportunities for a better work-life balance.',
		icon: '/thumb.svg',
	},
	{
		title: 'Boost Your Coding Confidence',
		description:
			'Say goodbye to frustration and become a confident JavaScript developer ready to tackle any coding challenge.',
		icon: '/coder.svg',
	},
	{
		title: 'Develop Job-Ready Skills',
		description:
			'Build skills that make you a valuable asset in the job market, potentially leading to better job opportunities and increased earning potential.',
		icon: '/job.svg',
	},
	{
		title: 'Increase Your Earning Potential',
		description:
			'Acquire in-demand skills that can open doors to higher-paying opportunities in the rapidly evolving tech industry.',
		icon: '/earning.svg',
	},
	{
		title: 'Enjoy More Flexibility',
		description:
			'Choose how and where you work and shape a professional life that aligns with your own schedule and preferences.',
		icon: '/calendar.svg',
	},
	{
		title: 'Join a Thriving Community',
		description:
			'Interact with over 14,000 developers, expand your professional network, and unlock opportunities for collaboration and mentorship.',
		icon: '/community.svg',
	},
]

const Benefits = () => {
	return (
		<Section className="py-[6.25rem] bg-blue-gradient-reverse text-brand-text-dark">
			<Container>
				<Flex direction="column" gap="9">
					<Box>
						<Heading
							className="!text-heading2 !mb-[1.875rem]"
							weight="bold"
							as="h2"
							size="9"
							align="center"
						>
							Top Benefits
						</Heading>

						<Text align="center" size="5" as="div">
							Explore the multitude of perks that come with JavaScript
							Simplified
						</Text>
					</Box>

					<Grid columns="2" width="auto" gapX="7" gapY="6">
						{benefits.map((b) => (
							<BenefitItem benefit={b} key={b.title} />
						))}
					</Grid>

					<Flex justify="center">
						<Button
							rightIcon={
								<Image
									src="/right-arrow.svg"
									alt="arrow"
									width={20}
									height={20}
								/>
							}
							textClassName="uppercase !text-brand-white"
						>
							start leaning now
						</Button>
					</Flex>
				</Flex>
			</Container>
		</Section>
	)
}

const BenefitItem = ({ benefit }: { benefit: (typeof benefits)[number] }) => {
	return (
		<Flex className="p-5 rounded-7 border border-border-defaut" align="center">
			<Flex className="gap-[.625rem]" align="center">
				<Image
					src={benefit.icon}
					height={100}
					width={100}
					alt={benefit.title}
				/>
				<Box>
					<Heading className="!text-heading4" size="6" mb="4">
						{benefit.title}
					</Heading>
					<Text>{benefit.description}</Text>
				</Box>
			</Flex>
		</Flex>
	)
}

export default Benefits
