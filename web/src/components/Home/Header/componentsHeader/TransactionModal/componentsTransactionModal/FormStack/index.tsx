import { Stack } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import { ReactNode } from 'react'

type FormStackTypes = {
  children: ReactNode
}

export function FormStack({ children }: FormStackTypes) {
  const { handleSubmit, control } = useForm()

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit((data) => console.log(data))}
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
