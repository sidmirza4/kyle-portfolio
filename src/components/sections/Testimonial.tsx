'use client'
import { Container, Flex, Heading, Section, Text } from '@radix-ui/themes'
import Image from 'next/image'
import { HappyCustomers } from '../HappyCustomers'
import Button from '../UI/Button'
import { useSpringCarousel } from 'react-spring-carousel'
import { getBreakpoints } from '@/utils/getBreakpoints'
import { useEffect, useState } from 'react'

const testimonials = [
	{
		profile: '/andrew.png',
		message:
			"Cool, like that. I've used JS self taught for a while - for a long time I defaulted to Query, but I've recently started going back to basics and it's amazing the things that you miss when you're self taught. This is filling in a lot of gaps!",
		name: 'Andrew Sharpe',
	},
	{
		profile: '/fer.png',
		message:
			'Thank you! This course was the perfect refresher a few months after learning react in bootcamp. :)',
		name: 'Fer Wicker',
	},
	{
		profile: '/bart.png',
		message:
			"Thanks for this course Kyle! It gave me the confidence to tackle a junior HTML/CSS project at Frontend Mentor (you can view my solution here: <a target='_blank' class='text-brand-blue font-semibold' href='https://typemaster-landing-page-ten.vercel.app/'>https://typemaster-landing-page-ten.vercel.app/</a>) The code is still bulky, had to rewatch some videos multiple times and I had to google some stuff i didn't yet know, but hey, that's life of a developer I guess ;) Next stop: Javascript simplified :) kind regards,",
		name: 'Bart Erkamp',
	},
]

const Testimonial = () => {
	const [numberOfItemsPerSlide, setNumberOfItemsPerSlide] = useState(1)

	useEffect(() => {
		setNumberOfItemsPerSlide(getNumberOfItemsPerSlide())

		const handleResize = () => {
			setNumberOfItemsPerSlide(getNumberOfItemsPerSlide())
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const getNumberOfItemsPerSlide = () => {
		const { xs, sm, md, lg } = getBreakpoints()
		const width = window.innerWidth
		if (width >= lg) return 3
		if (width >= md) return 2
		if (width >= sm) return 2
		if (width >= xs) return 1
	}

	const { carouselFragment, slideToPrevItem, slideToNextItem } =
		useSpringCarousel({
			gutter: 26,
			itemsPerSlide: numberOfItemsPerSlide,
			withLoop: true,
			initialStartingPosition: 'start',
			items: testimonials.map((testimonial) => {
				return {
					id: testimonial.name,
					renderItem: <TestimonialItem testimonial={testimonial} />,
					renderThumb: <div>Thumb</div>,
				}
			}),
		})

	return (
		<Section className="text-brand-text-dark !py-[6.25rem]">
			<Container>
				<Flex direction="column" gap="9">
					<Flex align="center" direction="column">
						<Heading
							size="9"
							className="!text-heading2 capitalize"
							align="center"
						>
							Real Words From Our Satisfied{' '}
							<span className="text-brand-blue">&#123; Devs &#125;</span>
						</Heading>

						<HappyCustomers transparent />
					</Flex>
					<div className="relative">
						<div className="overflow-hidden pl-px">
							<button
								onClick={slideToPrevItem}
								className="absolute -translate-x-1/2 top-1/2 z-10"
							>
								<Image
									src="/carousel-back.svg"
									alt="arrow"
									width={36}
									height={36}
								/>
							</button>
							{carouselFragment}
							<button
								onClick={slideToNextItem}
								className="absolute translate-x-1/2 right-0 top-1/2 z-10"
							>
								<Image
									src="/carousel-next.svg"
									alt="arrow"
									width={36}
									height={36}
								/>
							</button>
						</div>
					</div>
				</Flex>

				<Flex justify="center" className="mt-[3.75rem]">
					<Button
						textClassName="uppercase text-brand-white"
						rightIcon={
							<Image
								src="/right-arrow.svg"
								alt="arrow"
								width={20}
								height={20}
							/>
						}
					>
						Start Learning Now
					</Button>
				</Flex>
			</Container>
		</Section>
	)
}

const TestimonialItem = ({
	testimonial,
}: {
	testimonial: (typeof testimonials)[0]
}) => {
	return (
		<div className="pt-[44px]">
			<div className="relative border-[#C3D5E5] border bg-brand-white !rounded-[20px] py-[70px] pb-10 px-6">
				<div className="absolute -top-[44px] left-1/2 -translate-x-1/2">
					<Image
						src={testimonial.profile}
						alt="profile"
						width={88}
						height={88}
					/>
				</div>
				<Flex align="center" direction="column" className="!gap-[20px]">
					{/* <FiveStars size={16} /> */}
					<Text
						align="center"
						dangerouslySetInnerHTML={{
							__html: `&ldquo;${testimonial.message}&rdquo;`,
						}}
					/>
					<Heading as="h6" size="3" className="capitalize">
						{testimonial.name}
					</Heading>
					{/* <Flex className="gap-[6px]">
						<Image
							src="/tick-circle.svg"
							alt="tick-circle"
							width={14}
							height={14}
						/>
						<Text size="2" className="text-brand-blue">
							Verified Buyer
						</Text>
					</Flex> */}
				</Flex>
			</div>
		</div>
	)
}

export default Testimonial
