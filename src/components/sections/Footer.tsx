import {
	AspectRatio,
	Box,
	Container,
	Flex,
	Heading,
	Section,
	Strong,
	Text,
} from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'
import { TextWithCheckMark } from '../TextWithCheckMark'
import Button from '../UI/Button'

const Footer = () => {
	return (
		<Section className="text-brand-text-dark !py-[6.25rem]">
			<Container>
				<Flex align="center" gap="7">
					<Flex direction="column" gap="6">
						<Heading size="9" className="!text-heading2">
							Looking for a{' '}
							<Text className="text-brand-blue">&#123; JavaScript &#125;</Text>{' '}
							course that&apos;s anything but average?
						</Heading>

						<Text className="font-semibold" size="5" as="p">
							Learn gradually, at your own pace, and master each concept until
							you&apos;re capable of crafting complex projects from scratch.
						</Text>

						<Flex gap="5" direction="column">
							<TextWithCheckMark>
								All the knowledge you need in one course,{' '}
								<Strong>no matter where you&apos;re starting from</Strong>
							</TextWithCheckMark>

							<TextWithCheckMark>
								Practice concepts through exercises and{' '}
								<Strong>learn how to think like a developer</Strong>
							</TextWithCheckMark>

							<TextWithCheckMark>
								Build a solid foundation for a successful{' '}
								<Strong>career as a frontend developer</Strong>
							</TextWithCheckMark>
						</Flex>

						<Button
							rightIcon={
								<Image
									src="/right-arrow.svg"
									alt="arrow"
									width={20}
									height={20}
								/>
							}
							textClassName="uppercase text-brand-white"
						>
							start leaning now
						</Button>
					</Flex>

					<Box width="100%" className="hidden md:block">
						<AspectRatio ratio={624 / 486}>
							<Image
								src="/footer-poster.svg"
								height={486}
								width={624}
								alt="footer"
							/>
						</AspectRatio>
					</Box>
				</Flex>
			</Container>
		</Section>
	)
}

export default Footer
