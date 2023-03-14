import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef, HTMLAttributes, type FC } from 'react'

import { cn } from '~/lib'

const paragraphVariants = cva(
  'max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center',
  {
    variants: {
      size: {
        default: 'text-base sm:text-lg',
        sm: 'text-sm sm:text-base',
        lg: 'text-lg sm:text-xl'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
)

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph: FC<ParagraphProps> = forwardRef<
  HTMLParagraphElement,
  ParagraphProps
>(({ className, size, ...rest }, ref) => {
  return (
    <p
      ref={ref}
      {...rest}
      className={cn(paragraphVariants({ size, className }))}
    />
  )
})

Paragraph.displayName = 'Paragraph'

export default Paragraph
