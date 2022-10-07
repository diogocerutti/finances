import { Grid, Stack } from '@mui/material'
import { CardValues } from './componentsBody/CardValues'
import { TableData } from './componentsBody/TableData'

export function Body() {
  return (
    <Grid
      container
      justifyContent="center"
      sx={{ background: '#E5E5E5', height: 'auto', maxHeight: '454.08px' }}
    >
      <Stack
        spacing={5}
        sx={{
          position: 'relative',
          bottom: '68px'
        }}
      >
        <CardValues />
        <TableData />
      </Stack>
    </Grid>
  )
}
