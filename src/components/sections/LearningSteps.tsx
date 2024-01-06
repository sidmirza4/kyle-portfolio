import { Box, Container, Flex, Heading, Section, Text } from '@radix-ui/themes'
import React from 'react'

// import LearningStep1Image from '../../../public/learning-step-1.svg'
// import LearningStep2Image from '../../../public/learning-step-2.svg'
// import LearningStep3Image from '../../../public/learning-step-3.svg'
import Image from 'next/image'
import TimTestimonial from '../TimTestimonial'
import TextWithCurlyBraces from '../UI/TextWithCurlyBraces'

const learningSteps = [
	{
		title: 'Choose Your Pack',
		description:
			'Select the ideal package for your level and enjoy the freedom to upgrade to a more advanced option as your skills progress.',
		cover: '/ls-1.svg',
	},
	{
		title: 'Join The Community',
		description:
			'Get instant access to step-by-step training, projects, and our community of 14,000+ devs that will take your JavaScript skills to new heights.',
		cover: '/ls-2.svg',
	},
	{
		title: 'Master JavaScript',
		description:
			'Go from JavaScript beginner to JavaScript pro in 4 weeks and confidently build complex projects from scratch.',
		cover: '/ls-3.svg',
	},
]

const LearningSteps = () => {
	return (
		<Section className="text-brand-text-dark bg-blue-gradient !pt-[44px]">
			<Container>
				<Flex justify="center">
					<TimTestimonial />
				</Flex>

				<Flex justify="center">
					<Heading
						className="capitalize text-ellipsis w-full sm:w-[950px]"
						weight="bold"
						align="center"
						size="9"
					>
						From Basic Concepts To
						<TextWithCurlyBraces>Complex Projects</TextWithCurlyBraces>In 3
						Simple Steps
					</Heading>
				</Flex>

				<Text
					as="p"
					className="font-semibold md:!mt-[35px] !mt-4"
					size={{
						initial: '3',
						md: '5',
					}}
					align="center"
				>
					No more confusion. Just clear, hands-on building.
				</Text>

				<Box className="md:mt-[3.75rem] mt-8">
					<Flex
						justify="between"
						className="flex-col md:flex-row !gap-8 md:gap-4"
					>
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
		<Flex
			gap={{
				initial: '3',
				md: '6',
			}}
			direction="column"
			align="center"
			className="text-center"
		>
			<Image src={stepItem.cover} width={216} height={216} alt="Cover-1" />
			<Heading size="6" as="h4">
				{stepItem.title}
			</Heading>
			<div className="md:w-10/12">
				<Text>{stepItem.description}</Text>
			</div>
		</Flex>
	)
}

export default LearningSteps
