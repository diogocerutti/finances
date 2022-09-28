import { Grid } from '@mui/material'
import { Values } from './componentsBody/Values'
import { TableData } from './componentsBody/TableData'

export function Body() {
  return (
    <Grid container justifyContent="center" sx={{ background: '#E5E5E5' }}>
      <Values />
      <TableData />
    </Grid>
  )
}
