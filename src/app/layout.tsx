import '../scss/index.scss'

import type { Metadata } from 'next'
import { metaDataOptions } from '@/utils/metadata'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: {
		default: '',
		template: '%s | ',
	},
	description: '',
	...metaDataOptions,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
