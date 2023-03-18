import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Heading, Paragraph } from '~/components'

export const metadata: Metadata = {
  title: 'Similarity API | Home',
  description: 'Free & Open-Source text similarity API'
}

const Home: NextPage = () => {
  return (
    <div className='relative flex h-screen items-center justify-center overflow-x-hidden'>
      <div className='container mx-auto h-full w-full max-w-7xl pt-32'>
        <div className='flex h-full flex-col items-center justify-start gap-6 lg:items-start lg:justify-center'>
          <Heading size='lg' className='text-dark-gold dark:text-light-gold'>
            Easily determine <br /> text similarity
          </Heading>
          <Paragraph className='max-w-xl lg:text-left'>
            With the Text Similarity API, you can easily determine the
            similarity between two pieces of text with a free{' '}
            <Link
              href='/login'
              className='text-black underline underline-offset-2 dark:text-light-gold'
            >
              API key
            </Link>
            .
          </Paragraph>
          <div className='relative aspect-square w-full max-w-xl lg:absolute lg:left-1/2 lg:max-w-xl 2xl:max-w-2xl'>
            <Image
              priority
              className='img-shadow object-contain'
              quality={100}
              fill
              src='/typewriter.png'
              alt='typewriter.png'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
