import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'

import { Navbar, Providers } from '~/components'
import Toaster from '~/components/ui/Toast'
import '~/styles/globals.css'

const inter = Inter({
  preload: false,
  subsets: ['latin'],
  weight: ['300', '500', '700', '900'],
  variable: '--font-inter'
})

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-slate-900`}
      >
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          <Toaster position='bottom-right' />
          <main>{children}</main>
        </Providers>
        {/* Allow for more height on mobile devices */}
        <div className='h-40 md:hidden' />
      </body>
    </html>
  )
}

export default RootLayout
