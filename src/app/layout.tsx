import React from 'react'
import './globals.css'
import '@radix-ui/themes/styles.css'
import './theme.config.css'
import { Theme, ThemePanel } from '@radix-ui/themes'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
	variable: '--font-open-sans',
})

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={openSans.className}>
			<body className="text-white">
				<Theme>
					{children}
					{/* <ThemePanel /> */}
				</Theme>
			</body>
		</html>
	)
}
