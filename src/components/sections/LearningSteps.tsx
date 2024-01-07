import { Box, Container, Flex, Heading, Section, Text } from '@radix-ui/themes'
import React from 'react'
import Image from 'next/image'

import TimTestimonial from '../TimTestimonial'
import TextWithCurlyBraces from '../UI/TextWithCurlyBraces'
import WorkflowIcon from '../../../public/icons/workflow.svg'
import TechTribeIcon from '../../../public/icons/tech-tribe.svg'
import JSIcon from '../../../public/icons/js.svg'

const learningSteps = [
	{
		title: 'Choose Your Pack',
		description:
			'Select the ideal package for your level and enjoy the freedom to upgrade to a more advanced option as your skills progress.',
		icon: WorkflowIcon,
	},
	{
		title: 'Join The Community',
		description:
			'Get instant access to step-by-step training, projects, and our community of 14,000+ devs that will take your JavaScript skills to new heights.',
		icon: TechTribeIcon,
	},
	{
		title: 'Master JavaScript',
		description:
			'Go from JavaScript beginner to JavaScript pro in 4 weeks and confidently build complex projects from scratch.',
		icon: JSIcon,
	},
]

const LearningSteps = () => {
	return (
		<Section className="text-brand-text-dark bg-blue-gradient !pt-[44px] !pb-[90px]">
			<Container>
				<Flex justify="center">
					<TimTestimonial />
				</Flex>

				<Flex justify="center">
					<Heading
						className="capitalize whitespace-break-spaces w-full sm:w-[950px]"
						weight="bold"
						align="center"
						size="9"
					>
						From Basic Concepts To{' '}
						<TextWithCurlyBraces>Complex Projects</TextWithCurlyBraces> In 3
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
						align="center"
						className="flex-col md:flex-row !gap-8 md:gap-4"
					>
						{learningSteps.map((ls, i) => (
							<StepItem stepItem={ls} index={i} key={ls.title} />
						))}
					</Flex>
				</Box>
			</Container>
		</Section>
	)
}

const StepItem = ({
	stepItem,
	index,
}: {
	stepItem: (typeof learningSteps)[number]
	index: number
}) => {
	return (
		<Flex direction="column" align="center" className="text-center">
			<div className="h-[13.5rem] w-[13.5rem] rounded-full bg-brand-white flex items-center justify-center shadow-learning-step relative mb-[38px] md:mb-[52px]">
				<Image src={stepItem.icon} alt={stepItem.title} />

				<div className="absolute border-2 border-brand-white bg-brand-blue text-brand-white font-bold w-8 h-8 rounded-full flex items-center justify-center bottom-0 translate-y-1/2">
					<Text>{index + 1}</Text>
				</div>
			</div>

			<Text className="text-heading3 font-bold !mb-5" as="p">
				{stepItem.title}
			</Text>
			<div className="w-full sm:w-1/2 md:w-10/12">
				<Text className="text-brand-light-black">{stepItem.description}</Text>
			</div>
		</Flex>
	)
}

export default LearningSteps
