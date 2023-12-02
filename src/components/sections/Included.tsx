import { Box, Container, Heading, Section, Tabs, Text } from '@radix-ui/themes'
import React from 'react'

const tabsData = [
	{
		value: 'Beginner Course',
		heading: 'Beginner Course',
		description: '',
		video: '',
	},
	{
		value: 'Advance Course',
		heading: 'Advance Course',
		description: '',
		video: '',
	},
	{
		value: 'Multiple Projects',
		heading: 'Multiple Projects',
		description: '',
		video: '',
	},
	{
		value: 'Countless Exercises',
		heading: 'Countless Exercises',
		description: '',
		video: '',
	},
	{
		value: 'Helpful Community',
		heading: 'Helpful Community',
		description: '',
		video: '',
	},
	{
		value: 'Tips For Landing A Job',
		heading: 'Tips For Landing A Job',
		description: '',
		video: '',
	},

	{
		value: 'Free Quokka.js Pro For 3 Months',
		heading: 'Free Quokka.js Pro For 3 Months',
		description: '',
		video: '',
	},
]

const { Root, Trigger, List } = Tabs

const Included = () => {
	return (
		<Section className="bg-brand-bg-dark text-brand-white">
			<Container>
				<Box mb="9">
					<Heading align="center" size="9" className="!text-heading2" mb="6">
						What&apos;s{' '}
						<span className="text-brand-blue-dark">
							&#123; Included? &#125;
						</span>
					</Heading>

					<Text as="div" align="center">
						No fluff, just the good stuff. Get actionable insights and support
						as you go from JavaScript beginner to JavaScript pro.
					</Text>
				</Box>

				{/* TABS */}
				{/* <Root defaultValue={tabsData[0].value}>
					<List>
						{tabsData.map((t) => (
							<Trigger key={t.value} value={t.value}>
								{t.value}
							</Trigger>
						))}
					</List>
				</Root> */}
			</Container>
		</Section>
	)
}

export default Included
