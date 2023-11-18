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
import FiveStars from '../UI/FiveStars'
import Button from '../UI/Button'
import TimDP from '../../../public/tim-dp.png'

const Hero = () => {
	return (
		<Section
			style={{
				backgroundImage: 'url(/hero-bg.png)',
				backgroundSize: 'cover',
			}}
		>
			<Container>
				<Flex gap="8" align="center">
					<Box>
						<Box mb="5">
							<HappyCustomers />
						</Box>
						<div className="flex flex-col gap-9">
							<Heading className="text-brand-white" size="9">
								Stop Getting Stuck, Become A JavaScript
								<br /> &#123;{' '}
								<span className="text-brand-blue-dark">Developer</span> &#125;
							</Heading>

							<Box className="w-4/5">
								<Text className="font-semibold" size="5">
									Learn how to think like a developer and build any project you
									can dream of by taking action instead of just following along
									with tutorials.
								</Text>

								<Flex direction="column" gap="4" mt="7">
									<TextWithCheckMark>
										Over <Text className="font-bolder">13 hours</Text> of
										content across 74 videos
									</TextWithCheckMark>

									<TextWithCheckMark>
										Exlusive access to{' '}
										<Text className="font-bolder">
											private Discord community
										</Text>
									</TextWithCheckMark>

									<TextWithCheckMark>
										Download all videos{' '}
										<Text className="font-bolder">for offline access</Text>
									</TextWithCheckMark>
								</Flex>
							</Box>

							<Button
								rightIcon={
									<Image
										src="/right-arrow.svg"
										alt="arrow"
										width={20}
										height={20}
									/>
								}
								textClassName="uppercase"
							>
								start leaning now
							</Button>

							<HeroTestimonial />
						</div>
					</Box>

					<Box width="100%">
						<AspectRatio ratio={662 / 672}>
							<Image
								src="/hero-image.png"
								height={672}
								width={662}
								alt="hero"
							/>
						</AspectRatio>
					</Box>
				</Flex>
			</Container>
		</Section>
	)
}

const HappyCustomers = () => {
	return (
		<div className="flex bg-brand-bg-light w-max px-[14px] py-[11px] rounded-[7px] gap-[7px]">
			<FiveStars />
			<Text className="text-brand-white">
				<Strong>4.9/5</Strong> Based on <Strong>100+</Strong> Happy Customers
			</Text>
		</div>
	)
}

const TextWithCheckMark = ({ children }) => {
	return (
		<Flex gap="4">
			<Image src="/tick.svg" alt="check" width={20} height={20} />
			<Text as="p" size="4">
				{children}
			</Text>
		</Flex>
	)
}

const HeroTestimonial = () => {
	return (
		<Flex gap="4">
			<Box className="shrink-0">
				<Image src={TimDP} alt="tim" />
			</Box>
			<Box>
				<Flex justify="between" className="mb-[6px]">
					<FiveStars />
					<Flex gap="3">
						<Image src="/youtube.svg" alt="youtube" width={19} height={19} />
						<Text size="1">
							<Text weight="bold">1.3M+</Text> Subscribers
						</Text>
					</Flex>
				</Flex>
				<Text size="1">
					&#34;Kyle is a phenomenal instructor with an unmatched ability to
					break down complex topics and make even the most challenging problems
					digestible. Not only does he teach you the theory but he tests you
					every step of the way with practical projects and exercises that are
					fun and challenging. Seeing how Kyle designs his courses blew me away,
					the amount of effort and thought into the students experience is next
					to none.&#34;
				</Text>
				<p className="text-[9px] mt-[6px]">Tim Ruscica, YouTuber</p>
			</Box>
		</Flex>
	)
}

export default Hero
