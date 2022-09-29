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
      sx={{ position: 'relative', bottom: 68 }}
      display="flex"
      flexDirection={{ lg: 'row', md: 'row', sm: 'row', xs: 'column' }}
    >
      {children}
    </Grid>
  )
}
