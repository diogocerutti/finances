import { Grid } from '@mui/material'
import { ReactNode } from 'react'

type HeaderSubGridTypes = {
  children: ReactNode
}

export function HeaderSubGrid({ children }: HeaderSubGridTypes) {
  return (
    <Grid
      item
      sx={{
        mt: 4
      }}
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      width={{ lg: '1120px', md: '922px', sm: '622px', xs: '384px' }}
    >
      {children}
    </Grid>
  )
}
