import { Container, Flex, Heading, Section, Text } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'

import LearnProjectImage from '../../../public/learn-project.svg'
import HelpfulCommunity from '../../../public/helpful-community.svg'
import LendJobImage from '../../../public/land-job.svg'
import { TextWithCheckMark } from '../TextWithCheckMark'

const SimplifiedJS = () => {
	return (
		<Section className="text-brand-text-dark">
			<Container>
				<Flex direction="column" gap="5" mb="9">
					<Heading as="h2" className="!text-heading2" size="9" align="center">
						This is Where{' '}
						<Text className="text-brand-blue">&#123; JavsScript &#125;</Text>
						<br /> Simplified Really Shines
					</Heading>

					<Text align="center" size="5" as="p">
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
						officia
						<br /> deserunt mollit anim id est laborum
					</Text>
				</Flex>

				<Flex align="center" gap="9">
					<Image src={LearnProjectImage} alt="learn_project" />
					<Flex direction="column" className="!gap-[26px]">
						<Heading as="h4" size="8" className="capitalize">
							learn how to build any project
						</Heading>

						<Text size="5">
							In order to learn JavaScript you must practice a lot! That is why
							in JavaScript Simplified there are tons of exercises throughout
							nearly every video in the course.
						</Text>

						<Flex direction="column" gap="4">
							<TextWithCheckMark>
								How to think like a{' '}
								<Text className="text-brand-blue">developer</Text>
							</TextWithCheckMark>

							<TextWithCheckMark>
								Teaching you how to connect with{' '}
								<Text className="text-brand-blue">JavScript concepts</Text>
							</TextWithCheckMark>

							<TextWithCheckMark>
								Private{' '}
								<Text className="text-brand-blue">Discord community</Text>
							</TextWithCheckMark>
						</Flex>
					</Flex>
				</Flex>

				<Flex align="center" gap="9">
					<Flex direction="column" gap="4">
						<Heading as="h4" size="8" className="capitalize">
							helpful community
						</Heading>

						<Text size="5">
							When you get stuck, sometimes the best help is simply another
							person. This is why I have a private Discord community
							specifically for the members of JavaScript Simplified.
						</Text>

						<Text>
							In this community you can ask other course members as well as me
							any of your JavaScript questions, and since the community is
							fairly active you will almost always get a quick response. Nothing
							beats one-on-one communication with another person.
						</Text>
					</Flex>

					<Image src={HelpfulCommunity} alt="helpful_community" />
				</Flex>

				<Flex align="center" gap="9">
					<Image src={LendJobImage} alt="land_job" />
					<Flex direction="column" className="!gap-[26px]">
						<Heading as="h4" size="8" className="capitalize">
							Tips For Landing A Job
						</Heading>

						<Text size="5">
							Landing your first job as a web developer is{' '}
							<Text className="text-brand-blue" weight="bold">
								really hard
							</Text>{' '}
							and being self-taught doesn&#39;t make it any easier. That is why
							I interviewed incredible developers like{' '}
							<Text className="text-brand-blue" weight="bold">
								Danny Thompson
							</Text>
							, and{' '}
							<Text className="text-brand-blue" weight="bold">
								Eddie Jaoude
							</Text>{' '}
							to figure out how they landed their first developer jobs.
						</Text>

						<Flex direction="column" gap="4">
							<TextWithCheckMark>
								How to think like a{' '}
								<Text className="text-brand-blue">developer</Text>
							</TextWithCheckMark>

							<TextWithCheckMark>
								Teaching you how to connect with{' '}
								<Text className="text-brand-blue">JavScript concepts</Text>
							</TextWithCheckMark>

							<TextWithCheckMark>
								Private{' '}
								<Text className="text-brand-blue">Discord community</Text>
							</TextWithCheckMark>
						</Flex>
					</Flex>
				</Flex>
			</Container>
		</Section>
	)
}

export default SimplifiedJS
