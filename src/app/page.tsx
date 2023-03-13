import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1 className='mb-4 text-3xl font-bold text-red-600 underline'>
        Hello world!
      </h1>
    </main>
  )
}
