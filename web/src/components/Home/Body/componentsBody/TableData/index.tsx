import { TableContainer, TableBody, TableHead, TableRow } from '@mui/material'
import { MainStack } from './componentsTableData/MainStack'
import { MainTable } from './componentsTableData/MainTable'
import { CustomCell } from './componentsTableData/CustomCell'

export function TableData() {
  return (
    <MainStack>
      <TableContainer>
        <MainTable>
          <TableHead>
            <TableRow>
              <CustomCell color="#969CB2">Título</CustomCell>
              <CustomCell color="#969CB2" align="left">
                Preço
              </CustomCell>
              <CustomCell color="#969CB2" align="left">
                Categoria
              </CustomCell>
              <CustomCell color="#969CB2" align="left">
                Data
              </CustomCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ background: '#FFF' }}>
              <CustomCell>Desenvolvimento</CustomCell>
              <CustomCell align="left">R$ 1.200</CustomCell>
              <CustomCell align="left">Venda</CustomCell>
              <CustomCell align="left">13/10/2022</CustomCell>
            </TableRow>
          </TableBody>
        </MainTable>
      </TableContainer>
    </MainStack>
  )
}
