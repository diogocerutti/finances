import { Grid } from '@mui/material'
import { ReactNode } from 'react'

type HeaderGridTypes = {
  children: ReactNode
}

export function HeaderGrid({ children }: HeaderGridTypes) {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      sx={{
        background: '#5429CC',
        height: '212px',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      {children}
    </Grid>
  )
}
