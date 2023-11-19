import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import LearningSteps from '@/components/sections/LearningSteps'
import Intro from '@/components/sections/Intro'

export default function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<LearningSteps />
			<Intro />
		</div>
	)
}
