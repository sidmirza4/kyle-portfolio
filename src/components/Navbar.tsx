import { Container, Flex, Text } from '@radix-ui/themes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
} from '@/components/UI/popover'

import Hamburger from '../../public/hamburger.svg'

const Navbar = () => {
	return (
		<Container className="bg-[#141D25] border-b border-[#ffffff21] border-opacity-10 py-6 px-5 xl:px-0">
			<Flex justify="between" align="center">
				<div className="sm:hidden shrink">
					<Popover>
						<PopoverTrigger>
							<Image src={Hamburger} alt="hamburger" />
						</PopoverTrigger>
						<PopoverContent className="rounded-7 border-none bg-brand-white text-brand-text-dark">
							<NavbarLinks />
						</PopoverContent>
					</Popover>
				</div>

				<Image src="/logo.png" width={82} height={62} alt="logo" />
				<div className="hidden sm:block">
					<NavbarLinks />
				</div>
			</Flex>
		</Container>
	)
}

const navbarLinks = [
	{
		name: 'Home',
		href: '/',
	},
	{
		name: 'About',
		href: '/about',
	},
	{
		name: 'Benefits',
		href: '/benefits',
	},
	{
		name: "What's Included",
		href: '/included',
	},
	{
		name: 'Packages',
		href: '/packages',
	},
]

const NavbarLinks = () => {
	return (
		<ul className="flex sm:space-x-8 flex-col sm:flex-row gap-y-4 sm:gap-y-0">
			{navbarLinks.map((link) => (
				<li key={link.name} className="hover:bg-default-gray">
					<Link href={link.href}>
						<Text>{link.name}</Text>
					</Link>
				</li>
			))}
		</ul>
	)
}

export default Navbar
