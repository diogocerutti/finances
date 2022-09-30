import { Grid } from '@mui/material'
import { ReactNode } from 'react'

type SubGridTypes = {
  children: ReactNode
  background: string
}

export function SubGrid({ children, background }: SubGridTypes) {
  return (
    <Grid
      item
      width={{ lg: '352px', md: 'auto', sm: 'auto', xs: 'auto' }}
      sx={{
        background: background,
        borderRadius: 1,
        height: 'auto',
        padding: 3
      }}
    >
      {children}
    </Grid>
  )
}
