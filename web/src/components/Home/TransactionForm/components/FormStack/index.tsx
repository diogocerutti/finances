import { Stack } from '@mui/material'
import { ReactNode, FormEventHandler } from 'react'

type FormStackTypes = {
  children: ReactNode
  onSubmit: FormEventHandler
}

export function FormStack({ children, onSubmit }: FormStackTypes) {
  return (
    <Stack
      component="form"
      onSubmit={onSubmit}
      autoComplete="off"
      spacing={2}
      display={{ lg: 'flex', md: 'flex', sm: 'flex', xs: 'none' }}
      sx={{
        background: '#F0F2F5',
        borderRadius: '5px',
        alignSelf: 'center',
        width: { lg: '576px', md: 'auto', sm: 'auto', xs: 'auto' },
        pt: '64px',
        pb: '64px',
        pr: '48px',
        pl: '48px'
      }}
    >
      {children}
    </Stack>
  )
}
