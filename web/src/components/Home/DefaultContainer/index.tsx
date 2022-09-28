import { Grid } from '@mui/material'
import { ReactNode } from 'react'

type DefaultContainerTypes = {
  children: ReactNode
}

export function DefaultContainer({ children }: DefaultContainerTypes) {
  return <Grid container>{children}</Grid>
}
