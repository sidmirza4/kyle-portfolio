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
import { JS_SIMPLIFIED_LOGIN } from '@/lib/constants'

const Navbar = () => {
	return (
		<Container className="bg-[#141D25] border-b border-[#ffffff21] border-opacity-10 md:py-6 py-[15px] md:px-5 px-8 xl:px-0 !text-brand-white">
			<Flex justify="between" align="center">
				<div className="md:hidden shrink">
					<Popover>
						<PopoverTrigger>
							<Image src={Hamburger} alt="hamburger" />
						</PopoverTrigger>
						<PopoverContent className="rounded-7 border-none text-brand-white bg-brand-bg-light">
							<NavbarLinks />
							<div className="mt-2">
								<LoginButton />
							</div>
						</PopoverContent>
					</Popover>
				</div>

				<div className="mx-auto md:mx-0">
					<Image src="/logo.png" width={82} height={62} alt="logo" />
				</div>
				<div className="hidden md:block">
					<NavbarLinks />
				</div>

				<div className="hidden md:block">
					<LoginButton />
				</div>
			</Flex>
		</Container>
	)
}

const LoginButton = () => {
	return (
		<Link href={JS_SIMPLIFIED_LOGIN} target="_blank">
			<Flex gap="4" align="center">
				<Text>Login</Text>
				<Image
					src="/login.svg"
					alt="login"
					height={30}
					width={30}
					className="ml-4 md:ml-0"
				/>
			</Flex>
		</Link>
	)
}

const navbarLinks = [
	{
		name: 'Home',
		href: '#hero',
	},
	{
		name: 'About',
		href: '#about',
	},
	{
		name: 'Benefits',
		href: '#benefits',
	},
	{
		name: "What's Included",
		href: '#included',
	},
	{
		name: 'Packages',
		href: '#packages',
	},
]

const NavbarLinks = () => {
	return (
		<ul className="flex sm:space-x-8 flex-col sm:flex-row gap-y-4 sm:gap-y-0">
			{navbarLinks.map((link) => (
				<li key={link.name}>
					<Link href={link.href}>
						<Text>{link.name}</Text>
					</Link>
				</li>
			))}
		</ul>
	)
}

export default Navbar
