import {
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Stack
} from '@mui/material'

export function TableData() {
  return (
    <Stack width={{ lg: '1088px', md: '890px', sm: '590px', xs: '352px' }}>
      <TableContainer>
        <Table
          sx={{
            display: { lg: 'table', md: 'table', sm: 'table', xs: 'none' }
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#969CB3' }}>Título</TableCell>
              <TableCell sx={{ color: '#969CB3' }} align="left">
                Preço
              </TableCell>
              <TableCell sx={{ color: '#969CB3' }} align="left">
                Categoria
              </TableCell>
              <TableCell sx={{ color: '#969CB3' }} align="left">
                Data
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ background: '#FFFFFF' }}>
              <TableCell>a</TableCell>
              <TableCell align="left">a</TableCell>
              <TableCell align="left">a</TableCell>
              <TableCell align="left">a</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  )
}
