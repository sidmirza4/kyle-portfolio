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
		<section className="text-brand-text-dark pl-[125px] bg-[url('/kyle.png')] bg-no-repeat bg-right bg-contain">
			<div className="">
				<Flex direction="column" gap="6" className="md:w-[50%] py-20">
					<Box>
						<HappyCustomers />
						<Heading
							className="!text-heading2"
							weight="bold"
							as="h2"
							size="9"
							mt="5"
						>
							It&apos; Not About What You Learn, But HOW
							<br /> You Learn
							<Text className="text-brand-blue">
								{' '}
								&#123; JavaScript &#125;
							</Text>{' '}
						</Heading>
					</Box>

					<Text as="p" size="5" className="font-semibold">
						Hey there! I&apos;m Kyle Cook, and not too long ago, I walked in
						your shoes — driven, motivated to bring my coding dreams to life. I
						tried countless, maybe even thousands of JavaScript tutorials hoping
						to find my way in the coding world.
					</Text>

					<Text>
						But reality hit hard, and I started questioning if coding was really
						for me. I was stuck, constantly Googling basic issues, thinking I
						was the problem. It wasn&apos;t until later that I realized that
						something was off.. The tutorials I followed lacked the essential
						concepts I needed to truly grasp JavaScript. My practice methods
						were even worse, causing 99% frustration and 1% progress..... Read
						more
					</Text>

					<Button
						textClassName="uppercase text-brand-white"
						rightIcon={<Image src={RightArrow} alt="arrow" />}
					>
						Start learning now
					</Button>
				</Flex>
			</div>
			{/* <div className="basis-[830px] shrink-0 relative">
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
				</div> */}
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
