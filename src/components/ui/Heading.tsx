import { cva, VariantProps } from 'class-variance-authority'
import { forwardRef, type HTMLAttributes, type FC } from 'react'

import { cn } from '~/lib'

const headingVariants = cva(
  'text-zinc-900 dark:text-zinc-200 text-center font-extrabold leading-tight tracking-tighter',
  {
    variants: {
      size: {
        default: 'text-4xl md:text-5xl lg:text-6xl',
        sm: 'text-2xl md:text-3xl lg:text-4xl',
        lg: 'text-5xl md:text-6xl lg:text-7xl'
      }
    },
    defaultVariants: { size: 'default' }
  }
)

interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const Heading: FC<HeadingProps> = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, ...rest }, ref) => {
    return <h1 ref={ref} {...rest} className={cn(headingVariants({ size }))} />
  }
)

Heading.displayName = 'Heading'

export default Heading
