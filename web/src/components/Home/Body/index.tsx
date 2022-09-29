import { Grid } from '@mui/material'
import { CardValues } from './componentsBody/CardValues'
import { TableData } from './componentsBody/TableData'

export function Body() {
  return (
    <Grid container justifyContent="center" sx={{ background: '#E5E5E5' }}>
      <CardValues />
      <TableData />
    </Grid>
  )
}
