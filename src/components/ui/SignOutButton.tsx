'use client'

import { signOut } from 'next-auth/react'
import { useState, type FC } from 'react'

import { Button } from './Button'
import { toast } from './Toast'

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const signUserOut = async () => {
    setIsLoading(true)

    try {
      await signOut()
    } catch (error) {
      toast({
        title: 'Error signing out',
        message: 'Please try again later',
        type: 'error'
      })
    }
  }

  return (
    <Button onClick={signUserOut} isLoading={isLoading}>
      Sign out
    </Button>
  )
}

export default SignOutButton
