import { Container, Flex, Heading, Section, Text } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'

import { TextWithCheckMark } from '../TextWithCheckMark'
import TextWithCurlyBraces from '../UI/TextWithCurlyBraces'

const SimplifiedJS = () => {
	return (
		<Section className="text-brand-text-dark pt-[105px] !pb-[66px] md:!pb-20 bg-blue-gradient px-4 sm:px-14 lg:px-0">
			<Container>
				<Flex direction="column">
					<Flex justify="center">
						<Heading
							align={{
								initial: 'left',
								md: 'center',
							}}
							className="md:w-3/4 !mb-[30px]"
						>
							Supercharge Your Tech Career with{' '}
							<TextWithCurlyBraces>JavaScript</TextWithCurlyBraces> Simplified
						</Heading>
					</Flex>

					<Flex justify="center">
						<Text
							align={{
								initial: 'left',
								md: 'center',
							}}
							size={{
								initial: '3',
								md: '5',
							}}
							as="p"
							className="md:w-[900px] !mb-16"
						>
							After creating 100s of coding videos and going through 1000s of
							your comments, I found the right ingredients to level up this
							program to make your learning curve structured, practical and
							effortless.
						</Text>
					</Flex>
				</Flex>

				<Flex direction="column" className="md:gap-[125px] gap-8">
					<MultiStepSystem />
					<DiscordCommunity />
					<DreamJob />
				</Flex>
			</Container>
		</Section>
	)
}

const MultiStepSystem = () => {
	const StockImage = ({ className }: { className: string }) => {
		return (
			<div className={`basis-1/2 ${className}`}>
				<div className="aspect-auto w-full h-full flex items-center">
					<Image
						src="/images/courses-content.png"
						width={603}
						height={277}
						alt="learn_project"
					/>
				</div>
			</div>
		)
	}

	return (
		<Flex className="flex-col md:flex-row" align="center" gap="9">
			<StockImage className="hidden md:block" />
			<Flex direction="column" className="!gap-4 md:!gap-[26px] basis-1/2">
				<StepHeading>Proven, Multi-Step and Actionable System</StepHeading>

				<Paragraph>
					Learn and combine JavaScript concepts to build any frontend project
					you desire with 6 bonus projects like building a Trello clone, Google
					Calendar clone and more.
				</Paragraph>

				<StockImage className="block md:hidden" />

				<Flex direction="column" gap="4">
					<TextWithCheckMark>
						40 hours of guided content spread across&nbsp;
						<BlueBoldText>150 bite-sized videos.</BlueBoldText>
					</TextWithCheckMark>

					<TextWithCheckMark>
						Obtain&nbsp;
						<BlueBoldText>JavaScript Mastery</BlueBoldText>
						&nbsp;one concept & project at a time.
					</TextWithCheckMark>

					<TextWithCheckMark>
						Gain the context to build&nbsp;
						<BlueBoldText>any project you want in 4 weeks.</BlueBoldText>
					</TextWithCheckMark>
				</Flex>
			</Flex>
		</Flex>
	)
}

const DiscordCommunity = () => {
	const StockImage = ({ className }) => (
		<div className={`basis-1/2 ${className}`}>
			<div className="aspect-auto w-full h-full flex items-center">
				<Image
					src="/images/discord-channel.png"
					width={530}
					height={311}
					alt="learn_project"
				/>
			</div>
		</div>
	)

	return (
		<Flex
			className="flex-col md:flex-row"
			align="center"
			gap="9"
			justify="between"
		>
			<Flex direction="column" gap="4" className="basis-1/2">
				<StepHeading>Join Our Tribe of 14,000+ Dev Wizards</StepHeading>

				<Paragraph>
					Get the right guidance that can save you days and weeks. Our Discord
					community of 14,000+ wizards and mentors makes it effortless for you
					to succeed.
				</Paragraph>

				<StockImage className="block md:hidden" />

				<Flex direction="column" gap="4">
					<TextWithCheckMark>
						<BlueBoldText>Private channel exclusively&nbsp;</BlueBoldText>
						for students of this course.
					</TextWithCheckMark>

					<TextWithCheckMark>
						Get instant support and feedback and&nbsp;
						<BlueBoldText>from senior devs.</BlueBoldText>
					</TextWithCheckMark>

					<TextWithCheckMark>
						<BlueBoldText>Grow your network</BlueBoldText> and create
						friendships for life.
					</TextWithCheckMark>
				</Flex>
			</Flex>

			<StockImage className="hidden md:block" />
		</Flex>
	)
}

const DreamJob = () => {
	const StockImage = ({ className }) => {
		return (
			<div className={`basis-1/2 ${className}`}>
				<div className="aspect-auto w-full h-full flex items-center">
					<Image
						src="/images/dream-job.png"
						width={472}
						height={309}
						alt="learn_project"
					/>
				</div>
			</div>
		)
	}

	return (
		<Flex className="flex-col md:flex-row" align="center" gap="9">
			<StockImage className="hidden md:block" />
			<Flex direction="column" className="!gap-[26px] basis-1/2">
				<StepHeading>Supercharge The Path To Your Dream Job</StepHeading>

				<Paragraph>
					Gain context from other people in the job search. Get expert insights
					from rock stars like Danny Thompson, Eddie Jaoude, Dorian and Jessica.
				</Paragraph>

				<StockImage className="block md:hidden !-mt-10" />

				<Flex direction="column" gap="4" className="!-mt-20 md:!mt-0">
					<TextWithCheckMark>
						Build <BlueBoldText>any project effortlessly</BlueBoldText> in
						record time.
					</TextWithCheckMark>

					<TextWithCheckMark>
						Stack skills for your <BlueBoldText>dream tech job.</BlueBoldText>
					</TextWithCheckMark>

					<TextWithCheckMark>
						<BlueBoldText>Crack the interview</BlueBoldText> and land your dream
						job.
					</TextWithCheckMark>
				</Flex>
			</Flex>
		</Flex>
	)
}

const StepHeading = ({ children }) => {
	return (
		<Text as="p" className="text-5 md:!text-large capitalize font-semibold">
			{children}
		</Text>
	)
}

const Paragraph = ({ children }) => {
	return (
		<Text
			size={{
				initial: '3',
				md: '5',
			}}
			className="!leading-large"
		>
			{children}
		</Text>
	)
}

const BlueBoldText = ({ children }) => {
	return (
		<Text className="text-brand-blue" weight="bold">
			{children}
		</Text>
	)
}

export default SimplifiedJS
