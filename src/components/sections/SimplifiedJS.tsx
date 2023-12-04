import { Container, Flex, Heading, Section, Text } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'

import { TextWithCheckMark } from '../TextWithCheckMark'

const SimplifiedJS = () => {
	return (
		<Section className="text-brand-text-dark !py-[6.25rem] bg-blue-gradient">
			<Container>
				<Flex direction="column" gap="5" mb="9">
					<Heading className="!text-heading2" size="9" align="center">
						With{' '}
						<Text className="text-brand-blue">&#123; JavsScript &#125;</Text>{' '}
						Simplified, Your Learning Curve Becomes Structured, Practical &
						Gradual
					</Heading>

					<Text align="center" size="5" as="p">
						Sure, tutorials give you a glimpse into JavaScript and may offer a
						theoretical
						<br /> foundation, but my course builds skills THAT YOU CAN ACTUALLY
						USE.
					</Text>
				</Flex>

				<Flex direction="column" className="gap-16">
					<Flex align="center" gap="9">
						<div className="min-w-[50%] hidden md:block">
							<div className="aspect-square w-full h-full flex items-center">
								<Image
									src="/learn-project.png"
									width={512}
									height={512}
									alt="learn_project"
								/>
							</div>
						</div>
						<Flex direction="column" className="!gap-[26px]">
							<Heading as="h4" size="8" className="capitalize">
								Build with JavaScript Like a Pro with Easy, Step-by-Step
								Training
							</Heading>

							<Text size="5">
								Learning JavaScript is a lot like learning to speak a new
								language. It doesn&apos;t matter how many words you know, if you
								never learn to combine them into sentences and paragraphs you
								cannot use them to communicate. Similarly, in JavaScript,
								grasping concepts like variables or loops isn&apos;t enough. To
								build projects on your own, you need to go beyond learning
								individual concepts and instead learn how to connect those
								concepts and start thinking like a developer.
							</Text>

							<Flex direction="column" gap="4">
								<TextWithCheckMark>
									40-hour, 150-video course for a
									<Text className="text-brand-blue" weight="bold">
										full-on learning experience
									</Text>
								</TextWithCheckMark>

								<TextWithCheckMark>
									Master the essential JavaScript
									<Text className="text-brand-blue" weight="bold">
										concepts one at a time
									</Text>
								</TextWithCheckMark>

								<TextWithCheckMark>
									Connect those concepts until you have the{' '}
									<Text className="text-brand-blue" weight="bold">
										skills to build any project you want
									</Text>
								</TextWithCheckMark>
							</Flex>
						</Flex>
					</Flex>

					<Flex align="center" gap="9">
						<Flex direction="column" gap="4">
							<Heading as="h4" size="8" className="capitalize">
								Join a Supportive Discord Community of 14,000 Developers
							</Heading>

							<Text size="5">
								Learning to code can sometimes feel like a solo journey, but it
								doesn&apos;t have to be. When you start my course, you also gain
								access to a Discord community where you can meet like-minded
								learners, experienced developers, and mentors.
							</Text>

							<Flex direction="column" gap="4">
								<TextWithCheckMark>
									Private channel exclusively for members of{' '}
									<Text className="text-brand-blue" weight="bold">
										JavaScript Simplified
									</Text>
								</TextWithCheckMark>

								<TextWithCheckMark>
									<Text className="text-brand-blue" weight="bold">
										Available 24/7,
									</Text>{' '}
									just a click away whenever you need help or support
								</TextWithCheckMark>

								<TextWithCheckMark>
									Engage in discussions, ask questions, get feedback, and{' '}
									<Text className="text-brand-blue" weight="bold">
										receive career advice
									</Text>
								</TextWithCheckMark>
							</Flex>
						</Flex>

						<div className="min-w-[50%] hidden md:block">
							<div className="aspect-auto w-full h-full flex items-center justify-end">
								<Image
									src="/helpful-community.png"
									width={570}
									height={440}
									alt="learn_project"
								/>
							</div>
						</div>
					</Flex>

					<Flex align="center" gap="9">
						<div className="min-w-[50%] hidden md:block">
							<div className="aspect-auto w-full h-full flex items-center">
								<Image
									src="/land-job.png"
									width={577}
									height={452}
									alt="learn_project"
								/>
							</div>
						</div>
						<Flex direction="column" className="!gap-[26px]">
							<Heading as="h4" size="8" className="capitalize">
								Expert Insights for Landing A Job
							</Heading>

							<Text size="5">
								Securing your first dev job is challenging, especially for
								self-taught individuals. My course brings you exclusive
								interviews with seasoned developers like{' '}
								<Text className="text-brand-blue" weight="bold">
									Danny Thompson
								</Text>{' '}
								and{' '}
								<Text className="text-brand-blue" weight="bold">
									Eddie Jaoude
								</Text>{' '}
								, who share their strategies for landing that crucial first dev
								role, along with invaluable tips and tricks to increase
								interview opportunities and more. and being self-taught
								doesn&#39;t make it any easier. That is why I interviewed
								incredible developers like{' '}
							</Text>

							<Flex direction="column" gap="4">
								<TextWithCheckMark>
									Gain skills that give you a competitive edge in{' '}
									<Text className="text-brand-blue" weight="bold">
										job applications
									</Text>
								</TextWithCheckMark>

								<TextWithCheckMark>
									Learn concepts most developers discover only after{' '}
									<Text className="text-brand-blue" weight="bold">
										landing their first job
									</Text>
								</TextWithCheckMark>

								<TextWithCheckMark>
									Access tips and tricks to{' '}
									<Text className="text-brand-blue" weight="bold">
										secure more interviews
									</Text>{' '}
									and ace them successfully
								</TextWithCheckMark>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			</Container>
		</Section>
	)
}

export default SimplifiedJS
