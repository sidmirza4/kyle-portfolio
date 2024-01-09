import React from 'react'
import './globals.css'
import '@radix-ui/themes/styles.css'
import '../theme.config.css'
import { Theme, ThemePanel } from '@radix-ui/themes'
import { Lato } from 'next/font/google'

import localFont from 'next/font/local'
import { cn } from '@/lib/utils'
import Head from 'next/head'

const ligConsolata = localFont({
	src: [
		{
			path: '../static/fonts/Ligconsolata-Regular.woff',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../static/fonts/Ligconsolata-Bold.woff',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--font-lig-consolata',
})

const lato = Lato({
	subsets: ['latin'],
	weight: ['100', '300', '400', '700', '900'],
	variable: '--font-lato',
})

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={cn(ligConsolata.variable, lato.variable)}>
			<head>
				<title>JavaScript Simplified</title>
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content="https://javascriptsimplified.com/open-graph.jpg"
				/>
				<meta property="og:url" content="https://javascriptsimplified.com" />
				<meta
					name="description"
					property="og:description"
					content="Learn how to think like a developer and build any project you can dream of by taking action instead of just following along with tutorials."
				/>
				<meta property="og:title" content="JavaScript Simplified" />
				<meta
					data-react-helmet="true"
					name="twitter:description"
					content="Learn how to think like a developer and build any project you can dream of by taking action instead of just following along with tutorials."
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="@devsimplified" />
				<meta name="twitter:site" content="@devsimplified" />
			</head>

			<body className="text-brand-white">
				<Theme>
					{children}
					{/* <ThemePanel /> */}
				</Theme>
			</body>
		</html>
	)
}
