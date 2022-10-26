import { Stack } from '@mui/material'
import { ReactNode } from 'react'

type MainStackTypes = {
  children: ReactNode
}

export function MainStack({ children }: MainStackTypes) {
  return <Stack width="auto">{children}</Stack>
}
