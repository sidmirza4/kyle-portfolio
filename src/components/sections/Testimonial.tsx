'use client'
import { Container, Flex, Heading, Section, Text } from '@radix-ui/themes'
import Image from 'next/image'
import FiveStars from '../UI/FiveStars'
import { HappyCustomers } from '../HappyCustomers'
import Button from '../UI/Button'
import { useSpringCarousel } from 'react-spring-carousel'
import { getBreakpoints } from '@/utils/getBreakpoints'
import { useEffect, useState } from 'react'

const testimonials = [
	{
		profile: '/caleb.png',
		message:
			"Kyle's content goes beyond the average in both quality and depth. With his dedication to excellence, there's no better option when it comes to learning web development.",
		name: 'Caleb Curry',
	},
	{
		profile: '/claudio.png',
		message:
			"Although I have a fundamental understanding of JavaScript, I learned a lot from the advanced sections of this course. Honestly, it's the most comprehensive JavaScript course I've ever seen",
		name: 'Claudio Bernasconi',
	},
	{
		profile: '/jesse.png',
		message:
			'Learning JavaScript can be daunting. Fortunately, Kyle is an amazing teacher. Not only will you learn JavaScript, but also how to think like a developer.',
		name: 'Jesse Hall',
	},
	{
		profile: '/caleb.png',
		message:
			"Kyle's content goes beyond the average in both quality and depth. With his dedication to excellence, there's no better option when it comes to learning web development.",
		name: 'Caleb Curry',
	},
	{
		profile: '/claudio.png',
		message:
			"Although I have a fundamental understanding of JavaScript, I learned a lot from the advanced sections of this course. Honestly, it's the most comprehensive JavaScript course I've ever seen",
		name: 'Claudio Bernasconi',
	},
	{
		profile: '/jesse.png',
		message:
			'Learning JavaScript can be daunting. Fortunately, Kyle is an amazing teacher. Not only will you learn JavaScript, but also how to think like a developer.',
		name: 'Jesse Hall',
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
			initialStartingPosition: 'center',
			items: testimonials.map((testimonial) => {
				return {
					id: testimonial.name,
					renderItem: <TestimonialItem testimonial={testimonial} />,
					renderThumb: <div>Thumb</div>,
				}
			}),
		})

	return (
		<Section className="text-brand-text-dark bg-blue-gradient">
			<Container>
				<Flex direction="column" gap="9">
					<Flex align="center" direction="column">
						<Heading
							as="h2"
							size="9"
							className="!text-heading2 capitalize"
							align="center"
						>
							hear it from out happly customers
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
					<FiveStars size={16} />
					<Text align="center">&quot;{testimonial.message}&quot;</Text>
					<Heading as="h6" size="3" className="capitalize">
						{testimonial.name}
					</Heading>
					<Flex className="gap-[6px]">
						<Image
							src="/tick-circle.svg"
							alt="tick-circle"
							width={14}
							height={14}
						/>
						<Text size="2" className="text-brand-blue">
							Verified Buyer
						</Text>
					</Flex>
				</Flex>
			</div>
		</div>
	)
}

export default Testimonial
