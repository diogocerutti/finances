import {
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material'
import { MainStack } from './componentsTableData/MainStack'
import { MainTable } from './componentsTableData/MainTable'

export function TableData() {
  return (
    <MainStack>
      <TableContainer>
        <MainTable>
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
        </MainTable>
      </TableContainer>
    </MainStack>
  )
}
