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
		<Container className="border-b border-[#ffffff21] border-opacity-10 bg-[#141D25] px-8 py-[15px] !text-brand-white md:px-5 md:py-6 xl:px-0">
			<Flex justify="between" align="center">
				{/* <div className="md:hidden shrink">
					<Popover>
						<PopoverTrigger>
							<Image src={Hamburger} alt="hamburger" />
						</PopoverTrigger>
						<PopoverContent className="rounded-7 border-none text-brand-white bg-brand-bg-light">
							
							<div className="mt-2">
								<LoginButton />
							</div>
						</PopoverContent>
					</Popover>
				</div> */}

				<div className="md:mx-0">
					<Image
						src="/logo.png"
						width={82}
						height={62}
						alt="logo"
						className="h-[46px] w-[62px] transition-all duration-300 ease-in-out md:h-[62px] md:w-[82px]"
					/>
				</div>
				{/* <div className="hidden md:block">
					<NavbarLinks />
				</div> */}

				<div>
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
					src="/Button.svg"
					alt="login"
					height={45}
					width={296}
					className="ml-4 hidden transition-all duration-300 ease-in-out md:ml-0 md:block"
				/>
			</Flex>
		</Link>
	)
}

// const navbarLinks = [
// 	{
// 		name: 'Home',
// 		href: '#hero',
// 	},
// 	{
// 		name: 'About',
// 		href: '#about',
// 	},
// 	{
// 		name: 'Benefits',
// 		href: '#benefits',
// 	},
// 	{
// 		name: "What's Included",
// 		href: '#included',
// 	},
// 	{
// 		name: 'Packages',
// 		href: '#packages',
// 	},
// ]

// const NavbarLinks = () => {
// 	return (
// 		<ul className="flex sm:space-x-8 flex-col sm:flex-row gap-y-4 sm:gap-y-0">
// 			{navbarLinks.map((link) => (
// 				<li key={link.name}>
// 					<Link href={link.href}>
// 						<Text>{link.name}</Text>
// 					</Link>
// 				</li>
// 			))}
// 		</ul>
// 	)
// }

export default Navbar
