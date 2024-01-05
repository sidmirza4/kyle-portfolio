import {
	AspectRatio,
	Box,
	Container,
	Flex,
	Heading,
	Section,
	Text,
} from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'
import Button from '../UI/Button'
import TimDP from '../../../public/tim-dp.png'
import { HappyCustomers } from '../HappyCustomers'
import { TextWithCheckMark } from '../TextWithCheckMark'
import Link from 'next/link'
import { JS_SIMPLIFIED_LOGIN } from '@/lib/constants'

const Hero = () => {
	return (
		<Section
			id="hero"
			style={{
				backgroundImage: 'url(/hero-bg.png)',
				backgroundSize: 'cover',
			}}
		>
			{' '}
			<Box mb="5" className={`flex justify-center`}>
				<HappyCustomers />
			</Box>
			<Container>
				<Flex gap="8" align="center">
					<Box>
						<div className="flex flex-col flex-wrap content-center gap-9 font-mono">
							<Heading
								className="text-left font-bold capitalize text-brand-white md:text-center"
								size="9"
							>
								Build Any{' '}
								<span className="text-brand-blue">&#123;JavaScript&#125;</span>{' '}
								project
								<br /> and land your dream Tech job
							</Heading>

							<div className="flex-col md:flex">
								<div className="md:order-2">
									<div className=" my-10 flex w-full items-center justify-center">
										<div className="relative ">
											<Image
												src="/5H2_bBtmDBE-HD 2.svg"
												alt="24 Hours left Image"
												width={572}
												height={321.75}
												className="h-[176.253px] w-[313.339px] md:h-[321.75px] md:w-[572px]"
											/>

											<Link href={JS_SIMPLIFIED_LOGIN} target="_blank">
												<Image
													src="/Group 1484579320.svg"
													alt="Play button"
													width={69}
													height={69}
													className="absolute bottom-[69.89px] left-[136.95px] h-[37.798px] w-[37.798px] md:bottom-[125.75px] md:left-[250px] md:h-[69px] md:w-[69px] "
												/>
											</Link>
										</div>
									</div>
								</div>

								<div className="md:order-1">
									<Box className="w-5/5 text-justify md:text-center">
										<Text
											className="font-semibold"
											size={{
												initial: '3',
												md: '4',
											}}
										>
											JavaScript Simplified is a multi-step system for my
											community of 14,000+
											<br /> developers to build their dream projects and land
											their dream jobs.
										</Text>

										<Flex
											gap="4"
											mt="7"
											justify-content="space-around"
											className="flex-col text-left md:flex-row"
										>
											<TextWithCheckMark>
												Get instant results with
												<Text className="font-bolder"> easy-to-implement </Text>
												training and projects
											</TextWithCheckMark>

											<TextWithCheckMark>
												Cut the guesswork in my community of
												<Text className="font-bolder"> 14,000 developers</Text>
											</TextWithCheckMark>

											<TextWithCheckMark>
												Save time and money with{' '}
												<Text className="font-bolder">
													proven workflows and expert guidance
												</Text>
											</TextWithCheckMark>
										</Flex>
									</Box>
								</div>
							</div>

							<div className="flex justify-center">
								<Link href="path-to-play-video" target="_blank">
									<Image
										src="/Button.svg"
										alt="login"
										height={45}
										width={296}
										className="ml-4 md:ml-0 "
									/>
								</Link>
							</div>

							{/* <HeroTestimonial /> */}
						</div>
					</Box>

					{/* <Box className="hidden lg:block min-w-[45%]">
						<AspectRatio ratio={690 / 700}>
							<Image
								src="/hero-image.png"
								height={700}
								width={690}
								alt="hero"
							/>
						</AspectRatio>
					</Box> */}
				</Flex>
			</Container>
		</Section>
	)
}

// const HeroTestimonial = () => {
// 	return (
// 		<Flex gap="4" className="flex-col md:flex-row">
// 			<Flex
// 				className="shrink-0"
// 				align={{
// 					initial: 'center',
// 					md: 'start',
// 				}}
// 				gap="5"
// 			>
// 				<Link href={TIM_YOUTUBE_URL} target="_blank">
// 					<Image src={TimDP} alt="tim" />
// 				</Link>
// 				<div className="block md:hidden">
// 					<Flex gap="3">
// 						<Image src="/youtube.svg" alt="youtube" width={19} height={19} />
// 						<Text size="1">
// 							<Text weight="bold">1.3M+</Text> Subscribers
// 						</Text>
// 					</Flex>
// 				</div>
// 			</Flex>
// 		</Flex>
// 	)
// }

export default Hero
