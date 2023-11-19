import {
	AspectRatio,
	Box,
	Container,
	Flex,
	Grid,
	Heading,
	Section,
	Text,
} from '@radix-ui/themes'
import React from 'react'
import RightArrow from '../../../public/right-arrow.svg'
import KyleProfileImage from '../../../public/kyle.png'

import { HappyCustomers } from '../HappyCustomers'
import Button from '../UI/Button'
import Image from 'next/image'
import FiveStars from '../UI/FiveStars'

const Intro = () => {
	return (
		<section className="text-brand-text-dark">
			<Flex align="center">
				<div className="basis-auto pl-[125px]">
					<Flex direction="column" gap="6">
						<Box>
							<HappyCustomers />
							<Heading
								className="!text-heading2"
								weight="bold"
								as="h2"
								size="9"
								mt="5"
							>
								Teaching You How To Connect <br />{' '}
								<Text className="text-brand-blue">
									{' '}
									&#123; JavaScript &#125;
								</Text>{' '}
								Concepts
							</Heading>
						</Box>

						<Text as="p" size="5" className="font-semibold">
							Hi! My name is Kyle Cook! I have been a full stack web developer
							since 2015 and I love JavaScript, but it wasn&#39;t always like
							that.
						</Text>

						<Text>
							I went through a four-year Computer Engineering program and
							learned nothing about web development, so I spent countless nights
							studying on my own and building fun projects in JavaScript.
							Eventually I was able to learn enough JavaScript to comfortably
							build any project I could think of and now my passion is sharing
							that knowledge with you.
						</Text>

						<Button
							textClassName="uppercase text-brand-white"
							rightIcon={<Image src={RightArrow} alt="arrow" />}
						>
							Start learning now
						</Button>
					</Flex>
				</div>
				<div className="basis-[830px] shrink-0 relative">
					<Image src={KyleProfileImage} alt="Kyle" />
					<TestimonialBox
						profile="/test-dp.png"
						className="bg-[#EEF9FF] absolute top-[433px] right-[127px]"
					>
						“When I watch tutorials it all makes sense, but when I try to do it
						on my own I get stuck.”
					</TestimonialBox>

					<TestimonialBox
						profile="/kyle-dp.png"
						className="bg-[#FFF] absolute top-[540px] bottom-[88px]"
					>
						“When I watch tutorials it all makes sense, but when I try to do it
						on my own I get stuck.”
					</TestimonialBox>
				</div>
			</Flex>
		</section>
	)
}

const TestimonialBox = ({
	profile,
	children,
	className,
}: {
	profile: string
	children: React.ReactNode
	className?: string
}) => {
	return (
		<div
			className={`flex rounded-[10px] gap-[10px] p-5 ${className} max-w-[462px] drop-shadow-lg`}
		>
			<div className="shrink-0">
				<Image src={profile} alt="profile" width={55} height={55} />
			</div>
			<div className="flex flex-col gap-1.5">
				<FiveStars size={12} />
				<Text size="1" className="!text-[#5D514F]">
					{children}
				</Text>
			</div>
		</div>
	)
}

export default Intro
