'use client'

import { Box, Container, Heading, Section, Text } from '@radix-ui/themes'
import React from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '../UI/accordion'

const faqs = [
	{
		question: 'What do I need to know to take this course?',
		answer:
			"Nothing! You really don't need to know anything about programming before taking this course. The only thing you should know is the basics of HTML since all of the projects in this course will be based on HTML.",
	},
	{
		question: 'How do I access the course after purchasing it?',
		answer:
			'Check your email after purchasing the course. You should receive an email with a link to the course. If you do not receive this email please send me a message at <a href="mailto:kyle@webdevsimplified.com" class="hover:underline text-brand-blue-dark" target="_blank">kyle@webdevsimplified.com</a> and I will help you work it out.',
	},
	{
		question: 'Does this course cover React, Express, jQuery, etc?',
		answer:
			'No. This course is focused 100% on learning JavaScript. This means that no major frameworks or libraries will be used. Smaller libraries will be used for specific projects and things like Parcel, and Jest will be used to explain testing and bundlers, but the focus of this course is solely on JavaScript. If you are interested in learning React check out my complete <a class="hover:underline text-brand-blue-dark" href="https://reactsimplified.com/" target=_blank"" >React course</a>.',
	},
	{
		question: 'When was this course recorded?',
		answer:
			'This course was recorded in March of 2021. That means this course focuses heavily on modern JavaScript concepts such as promises, modules, and bundlers without wasting your time on outdated JavaScript concepts.',
	},
	{
		question: 'What if I buy the course and do not like it?',
		answer:
			'While I am sure that you will love this course, if for any reason you do not, just email me at <a class="hover:underline text-brand-blue-dark" href="mailto:kyle@webdevsimplified.com" target="_blank">kyle@webdevsimplified.com</a> within one year for a full refund.',
	},
	{
		question: 'Can I upgrade my bundle later?',
		answer:
			'Yes! If you would like to update your bundle later just send me an email at <a class="hover:underline text-brand-blue-dark" href="mailto:kyle@webdevsimplified.com" target="_blank">kyle@webdevsimplified.com</a>.',
	},
	{
		question: 'Can I buy a team bundle?',
		answer:
			'Of course! Just send me an email at <a class="hover:underline text-brand-blue-dark" href="mailto:kyle@webdevsimplified.com" target="_blank">kyle@webdevsimplified.com</a> and we can workout a bundle for your entire team.',
	},
	{
		question: 'Any other questions?',
		answer:
			'If you have any more questions about the course email me at <a class="hover:underline text-brand-blue-dark" href="mailto:kyle@webdevsimplified.com" target="_blank">kyle@webdevsimplified.com</a> and I will answer any questions you have.',
	},
	// {
	// 	question: '',
	// 	answer: '',
	// },
	// {
	// 	question: '',
	// 	answer: '',
	// },
]

const FAQ = () => {
	return (
		<Section className="text-brand-white bg-brand-bg-dark">
			<Container>
				<Box
					mb={{
						initial: '4',
						md: '9',
					}}
				>
					<Heading className="md:!mb-8 !mb-4" align="center">
						Frequently Asked{' '}
						<span className="text-brand-blue">&#123; Questions &#125;</span>
					</Heading>

					<Text
						size={{
							initial: '3',
							md: '5',
						}}
						as="p"
						align="center"
					>
						If you need further assistance, feel free to email me at
						kyle@webdevsimplified.com
					</Text>
				</Box>

				{/* FAQ's */}
				<div className="mx-auto max-w-3xl">
					<Accordion type="single" collapsible className="w-full">
						{faqs.map((f) => (
							<>
								<AccordionItem value={f.question} key={f.question}>
									<AccordionTrigger className="text-left !text-3">
										{f.question}
									</AccordionTrigger>
									<AccordionContent>
										<Text dangerouslySetInnerHTML={{ __html: f.answer }} />
									</AccordionContent>
								</AccordionItem>
								<div className="border-b border-[#1C2D38]" />
							</>
						))}
					</Accordion>
				</div>
			</Container>
		</Section>
	)
}

export default FAQ
