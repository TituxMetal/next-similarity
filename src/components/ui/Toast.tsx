'use client'

import { forwardRef, type HTMLAttributes } from 'react'
import hotToast, { Toaster } from 'react-hot-toast'

import { cn } from '~/lib'

interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  visible: boolean
}

export const Toast = ({ visible, className, ...props }: ToastProps) => {
  return (
    <div
      className={cn(
        'min-h-16 mb-2 flex w-[350px] flex-col items-start gap-1 rounded-md bg-white px-6 py-4 shadow-lg',
        visible && 'animate-in slide-in-from-bottom-5',
        className
      )}
      {...props}
    />
  )
}

interface ToastTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

Toast.Title = forwardRef<HTMLHeadingElement, ToastTitleProps>(
  ({ className, ...props }, ref) => {
    Toast.Title.displayName = 'ToastTitle'

    return (
      <p
        className={cn('text-sm font-medium', className)}
        ref={ref}
        {...props}
      />
    )
  }
)

interface ToastDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

Toast.Description = forwardRef<HTMLParagraphElement, ToastDescriptionProps>(
  ({ className, ...props }, ref) => {
    Toast.Description.displayName = 'ToastDescription'

    return (
      <p className={cn('text-sm opacity-80', className)} ref={ref} {...props} />
    )
  }
)

interface ToastOpts {
  title?: string
  message: string
  type?: 'success' | 'error' | 'default'
  duration?: number
}

export const toast = (opts: ToastOpts) => {
  const { title, message, type = 'default', duration = 3000 } = opts

  return hotToast.custom(
    ({ visible }) => (
      <Toast
        visible={visible}
        className={cn({
          'bg-red-600 text-white': type === 'error',
          'bg-black text-white': type === 'success'
        })}
      >
        <Toast.Title>{title}</Toast.Title>
        {message && <Toast.Description>{message}</Toast.Description>}
      </Toast>
    ),
    { duration }
  )
}

export default Toaster
