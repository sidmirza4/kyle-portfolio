import { Container, Flex, Text } from '@radix-ui/themes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
	return (
		<Container className="bg-[#141D25] border-b border-[#ffffff21] border-opacity-10 py-6">
			<Flex justify="between" align="center">
				<Image src="/logo.png" width={82} height={62} alt="logo" />
				<NavbarLinks />
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
		<ul className="flex space-x-8">
			{navbarLinks.map((link) => (
				<li key={link.name}>
					<Link
						href={link.href}
						style={{
							color: 'white',
						}}
					>
						<Text>{link.name}</Text>
					</Link>
				</li>
			))}
		</ul>
	)
}

export default Navbar
