import {
	AspectRatio,
	Box,
	Container,
	Flex,
	Heading,
	Section,
	Text,
} from '@radix-ui/themes'
import React from 'react'

import LearningStep1Image from '../../../public/learning-step-1.svg'
import LearningStep2Image from '../../../public/learning-step-2.svg'
import LearningStep3Image from '../../../public/learning-step-3.svg'
import Wave from '../../../public/wave.png'
import Image from 'next/image'

const LearningSteps = () => {
	return (
		<Section className="text-brand-text-dark bg-blue-gradient">
			<Container>
				<Heading
					as="h2"
					className="!text-heading2 leading-9"
					weight="bold"
					align="center"
					size="9"
				>
					Start Learning{' '}
					<Text className="text-brand-blue">
						&#123; JavaScript &#125;
						<br />{' '}
					</Text>
					In 3 Simple Steps
				</Heading>

				<Text as="p" className="font-semibold !mt-8" size="5" align="center">
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
				</Text>
			</Container>
		</Section>
	)
}

export default LearningSteps
