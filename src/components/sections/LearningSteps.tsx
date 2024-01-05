import { Box, Container, Flex, Heading, Section, Text } from '@radix-ui/themes'
import React from 'react'

import LearningStep1Image from '../../../public/learning-step-1.svg'
import LearningStep2Image from '../../../public/learning-step-2.svg'
import LearningStep3Image from '../../../public/learning-step-3.svg'
import { JS_SIMPLIFIED_COURSES_URL, TIM_YOUTUBE_URL } from '@/lib/constants'
import Link from 'next/link'
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
		<Section className="static bg-blue-gradient text-brand-text-dark">
			<Box className="flex w-full items-center justify-center">
				<div className="border-[rgba(20, 29,  37, 0.10)] mb-[105px] flex h-[273px] w-[932px] gap-4 rounded-[6.421px] border-[1.07px] bg-[#F6FCFF]">
					{/* <Flex justify="between" className="mb-[6px]"> */}
					{/* <FiveStars /> */}
					<div className="flex-none p-[18px]">
						<Image
							src="/Rectangle 9238.svg"
							alt="youtube"
							width={240.782}
							height={236.501}
						/>
					</div>

					<div className=" flex flex-auto flex-col">
						<div className="mb-auto mt-[57.5px] flex">
							{Array.from({ length: 5 }, (_, i) => (
								<Image
									key={i}
									src="/stars.svg"
									alt="stars"
									width={14.982}
									height={14.982}
								/>
							))}
						</div>

						<Text className="text-sm">
							&#34;Kyle is a phenomenal instructor with an unmatched ability to
							break down complex topics and make even the most challenging
							problems digestible. Not only does he teach you the theory but he
							tests you every step of the way with practical projects and
							exercises that are fun and challenging. Seeing how Kyle designs
							his courses blew me away, the amount of effort and thought into
							the students experience is next to none.&#34;
						</Text>
						<Flex className="mb-[52.59px] flex flex-row gap-4">
							<div className="flex">
								<Link href={TIM_YOUTUBE_URL} target="_blank">
									<Image
										src="/tim-dp.png"
										alt="Tim DP"
										width={26}
										height={26}
									/>
								</Link>
								<p className="ml-[8.84px] mt-[6px] text-[12px] font-semibold capitalize underline">
									Tim Ruscica, YouTuber
								</p>
							</div>
							<Text>
								<Text weight="bold">1.3M+</Text> Subscribers
							</Text>
						</Flex>
					</div>
				</div>
			</Box>
			<Container>
				<Heading
					className="text-ellipsis capitalize"
					weight="bold"
					align="center"
				>
					From Basic Concepts To{' '}
					<Text className="text-brand-blue">
						&#123; Complex Projects &#125;
						<br />{' '}
					</Text>
					In 3 Simple Steps
				</Heading>

				<Text
					as="p"
					className="!mt-4 font-semibold md:!mt-8"
					size={{
						initial: '3',
						md: '5',
					}}
					align="center"
				>
					No more confusion. Just clear, hands-on building.
				</Text>

				<Box className="mt-8 md:mt-[3.75rem]">
					<Flex
						justify="between"
						className="flex-col !gap-8 md:flex-row md:gap-4"
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
			<Image src={stepItem.cover} alt="Cover-1" />
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
