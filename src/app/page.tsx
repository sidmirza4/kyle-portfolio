import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import LearningSteps from '@/components/sections/LearningSteps'
import Intro from '@/components/sections/Intro'
import SimplifiedJS from '@/components/sections/SimplifiedJS'
import Testimonial from '@/components/sections/Testimonial'
import Benefits from '@/components/sections/Benefits'
import Included from '@/components/sections/Included'
import Pricing from '@/components/sections/Pricing'
import FAQ from '@/components/sections/FAQ'
import Footer from '@/components/sections/Footer'

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<LearningSteps />
			<Intro />
			<Benefits />
			<Testimonial />
			<Included />
			<SimplifiedJS />
			<Pricing />
			<FAQ />
			<Footer />
		</>
	)
}
