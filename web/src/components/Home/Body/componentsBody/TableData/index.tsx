import { TableContainer, TableBody, TableHead, TableRow } from '@mui/material'
import { MainStack } from './componentsTableData/MainStack'
import { MainTable } from './componentsTableData/MainTable'
import { CustomCell } from './componentsTableData/CustomCell'
import { getData } from '../../../../../service/gets/getData'
import { useEffect, useState } from 'react'
import { Transaction } from '../../../../../global/interfaces/Transaction'

export function TableData() {
  const [data, setData] = useState(Array<Transaction>)

  useEffect(() => {
    getData().then((data) => setData(data))
  }, [])

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
            {data.map((i) => (
              <TableRow key={i.id} sx={{ background: '#FFF' }}>
                <CustomCell>{i.title}</CustomCell>
                <CustomCell
                  align="left"
                  color={i.type === 'deposit' ? '#33CC95' : '#E52E4D'}
                >
                  {i.amount}
                </CustomCell>
                <CustomCell align="left">{i.category}</CustomCell>
                <CustomCell align="left">{i.date}</CustomCell>
              </TableRow>
            ))}
          </TableBody>
        </MainTable>
      </TableContainer>
    </MainStack>
  )
}
