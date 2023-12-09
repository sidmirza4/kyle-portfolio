'use client'
import { Container, Flex, Heading, Section, Text } from '@radix-ui/themes'
import Image from 'next/image'
import { HappyCustomers } from '../HappyCustomers'
import Button from '../UI/Button'
import { useSpringCarousel } from 'react-spring-carousel'
import { getBreakpoints } from '@/utils/getBreakpoints'
import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { JS_SIMPLIFIED_COURSES_URL } from '@/lib/constants'

const testimonials = [
	{
		message: `Kyle, this is worth the price of admission. That was the best explanation you are ever going to see on array methods.
			There are 15-20 videos on each of those online and its very difficult to grasp.
			Even bootcamps and the like wont do as good as job teaching this
			When you explain something it sticks and it's tangible.`,
		name: 'Sean Barr',
	},
	{
		message: `loving and learning a bunch from this course! aside from breaking down concepts in easily digestible bits, you offer fun mini exercises in each subsection and reassurance that some things *are* hard, which are things i haven't experienced with other JS courses. i was about to give up on programming until I found your course!! thank you`,
		name: 'Vera Lam',
	},
	{
		message: `I've not been active in the chat of the course, but after finishing it want to thank you for everything and how you simplified concepts that, at least while self-learning, are so complicated.<br />
		At first, when I opened the before document I was overwhelmed. Then, after 2/3 days of coding in my free time, l've been able to make it work with all the functionalities without watching the video (neither the finished code!).`,
		name: 'Bart Erkamp',
	},
	{
		message: `Although I have a fundamental understanding of JavaScript, I learned a lot from the advanced sections of this course. Honestly, it's the most comprehensive JavaScript course I've ever seen.`,
		name: 'Claudio Bernasconi',
	},
	{
		message: `Kyle's content goes beyond the average in both quality and depth. With his dedication to excellence, there's no better option when it comes to learning web development.`,
		name: 'Caleb Curry',
	},
	{
		message: `JavaScript Simplified is concise, to the point, and full of fun projects which constantly had me putting together what I had learned in challenging ways.`,
		name: 'Brent Morton',
	},
]

const CarouselPrevItemButton = (props: React.ButtonHTMLAttributes<{}>) => {
	return (
		<button
			onClick={props.onClick}
			className={cn('absolute z-10', props.className)}
		>
			<Image src="/carousel-back.svg" alt="arrow" width={36} height={36} />
		</button>
	)
}

const CarouselNextItemButton = (props: React.ButtonHTMLAttributes<{}>) => {
	return (
		<button
			onClick={props.onClick}
			className={cn('absolute z-10', props.className)}
		>
			<Image src="/carousel-next.svg" alt="arrow" width={36} height={36} />
		</button>
	)
}

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
		<Section className="text-brand-text-dark">
			<Container>
				<Flex direction="column">
					<Flex align="center" direction="column">
						<Heading className="capitalize !mb-1" align="center">
							Real Words From Our Satisfied{' '}
							<span className="text-brand-blue">&#123; Devs &#125;</span>
						</Heading>

						<HappyCustomers transparent dpWidth={137} />
					</Flex>
					<div className="relative">
						<div className="pl-px overflow-x-hidden">
							<CarouselPrevItemButton
								onClick={slideToPrevItem}
								className="-translate-x-1/2 top-1/2"
							/>
							<div className="py-[3.75rem]">
								{carouselFragment}
								{/* <Flex className="!gap-5" align="center" justify="center">
									<CarouselPrevItemButton
										onClick={slideToPrevItem}
										className="block md:hidden relative"
									/>
									<CarouselNextItemButton
										onClick={slideToNextItem}
										className="block md:hidden relative"
									/>
								</Flex> */}
							</div>
							<CarouselNextItemButton
								onClick={slideToNextItem}
								className="translate-x-1/2 right-0 top-1/2"
							/>
						</div>
					</div>
				</Flex>

				<Flex justify="center">
					<Link href={JS_SIMPLIFIED_COURSES_URL} target="_blank">
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
					</Link>
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
		<div>
			<div className="relative border-[#C3D5E5] border bg-brand-white !rounded-[20px] py-9 px-6 shadow-testimonial-card">
				{/* <div className="absolute -top-[44px] left-1/2 -translate-x-1/2">
					<Image
						src={testimonial.profile}
						alt="profile"
						width={88}
						height={88}
					/>
				</div> */}
				<Flex align="center" direction="column" className="!gap-[20px]">
					{/* <FiveStars size={16} /> */}
					<Text
						align="center"
						dangerouslySetInnerHTML={{
							__html: `&ldquo;${testimonial.message}&rdquo;`,
						}}
					/>
					<Heading className="capitalize" size="4" as="h5">
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
