import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'

import { Providers } from '~/components'
import { cn } from '~/lib'
import '~/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html
      lang='en'
      className={cn('bg-slate-50 text-slate-900 antialiased', inter.className)}
    >
      <body className='min-h-screen bg-slate-50 antialiased dark:bg-slate-900'>
        <Providers>{children}</Providers>
        {/* Allow for more height on mobile devices */}
        <div className='h-40 md:hidden' />
      </body>
    </html>
  )
}

export default RootLayout
