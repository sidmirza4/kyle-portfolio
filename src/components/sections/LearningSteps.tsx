import { Box, Container, Flex, Heading, Section, Text } from '@radix-ui/themes'
import React from 'react'

import LearningStep1Image from '../../../public/learning-step-1.svg'
import LearningStep2Image from '../../../public/learning-step-2.svg'
import LearningStep3Image from '../../../public/learning-step-3.svg'
import Image from 'next/image'

const learningSteps = [
	{
		title: 'Choose Your Pack',
		description:
			'Select the ideal package for your level and enjoy the freedom to upgrade to a more advanced option as your skills progress.',
		cover: LearningStep1Image,
	},
	{
		title: 'Join The Community',
		description:
			'Get instant access to step-by-step training, projects, and our community of 14,000+ devs that will take your JavaScript skills to new heights.',
		cover: LearningStep2Image,
	},
	{
		title: 'Master JavaScript',
		description:
			'Go from JavaScript beginner to JavaScript pro in 4 weeks and confidently build complex projects from scratch.',
		cover: LearningStep3Image,
	},
]

const LearningSteps = () => {
	return (
		<Section className="text-brand-text-dark bg-blue-gradient">
			<Container>
				<Heading
					className="!text-heading2 leading-9 capitalize"
					weight="bold"
					align="center"
					size="9"
				>
					From Basic Concepts To In 3 Easy Steps{' '}
					<Text className="text-brand-blue">
						&#123; Complex Projects &#125;
						<br />{' '}
					</Text>
					In 3 Simple Steps
				</Heading>

				<Text as="p" className="font-semibold !mt-8" size="5" align="center">
					No more confusion. Just clear, hands-on building.
				</Text>

				<Box className="mt-[3.75rem]">
					<Flex gap="4" justify="between" className="flex-col md:flex-row">
						{learningSteps.map((ls) => (
							<StepItem stepItem={ls} key={ls.title} />
						))}
					</Flex>
				</Box>
			</Container>
		</Section>
	)
}

const StepItem = ({
	stepItem,
}: {
	stepItem: (typeof learningSteps)[number]
}) => {
	return (
		<Flex gap="6" direction="column" align="center" className="text-center">
			<Image src={stepItem.cover} alt="Cover-1" />
			<Heading size="6">{stepItem.title}</Heading>
			<div className="md:w-10/12">
				<Text>{stepItem.description}</Text>
			</div>
		</Flex>
	)
}

export default LearningSteps
