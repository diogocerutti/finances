import { Stack } from '@mui/material'
import { ReactNode } from 'react'

type MainStackTypes = {
  children: ReactNode
}

export function MainStack({ children }: MainStackTypes) {
  return (
    <Stack width={{ lg: '1088px', md: '890px', sm: '590px', xs: '352px' }}>
      {children}
    </Stack>
  )
}
