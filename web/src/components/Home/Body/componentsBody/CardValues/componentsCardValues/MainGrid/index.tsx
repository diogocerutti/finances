import { Grid } from '@mui/material'
import { ReactNode } from 'react'

type MainGridTypes = {
  children: ReactNode
}

export function MainGrid({ children }: MainGridTypes) {
  return (
    <Grid
      item
      columnGap={2}
      display="flex"
      flexDirection={{ lg: 'row', md: 'row', sm: 'row', xs: 'column' }}
      width="auto"
    >
      {children}
    </Grid>
  )
}
