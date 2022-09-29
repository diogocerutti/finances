import { Grid } from '@mui/material'
import { ReactNode } from 'react'

type SubGridTypes = {
  children: ReactNode
}

export function SubGrid({ children }: SubGridTypes) {
  return (
    <Grid
      item
      width={{ lg: '352px', md: '286px', sm: '186px', xs: '352px' }}
      sx={{
        background: 'white',
        borderRadius: 1,
        height: '136px'
      }}
      justifyContent="center"
      display="flex"
    >
      {children}
    </Grid>
  )
}
