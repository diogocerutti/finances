import { TableContainer, TableBody, TableHead, TableRow } from '@mui/material'
import { MainStack } from './componentsTableData/MainStack'
import { MainTable } from './componentsTableData/MainTable'
import { CustomCell } from './componentsTableData/CustomCell'
import { TransactionEditModal } from './componentsTableData/TransactionEditModal'
import { getData } from '../../../../../service/gets/getData'
import { useEffect, useState } from 'react'
import { Transaction } from '../../../../../global/interfaces/Transaction'

export function TableData() {
  const [data, setData] = useState(Array<Transaction>)
  const [currentData, setCurrentData] = useState<Transaction>()

  const [open, setOpen] = useState(false)
  const handleOpen = (data: Transaction) => {
    setOpen(true)
    setCurrentData(data)
  }
  const handleClose = () => setOpen(false)

  useEffect(() => {
    getData().then((data) => setData(data))
  }, [])

  return (
    <MainStack>
      <TableContainer sx={{ maxHeight: '322.08px' }}>
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
              <TableRow
                onClick={() => {
                  handleOpen(i)
                }}
                key={i.id}
                sx={{
                  background: '#FFF'
                }}
              >
                <CustomCell color="#363F5F">{i.title}</CustomCell>
                <CustomCell
                  align="left"
                  color={i.type === 'deposit' ? '#33CC95' : '#E52E4D'}
                >
                  {i.type === 'deposit' ? 'R$ ' : '- R$ '}
                  {parseFloat(i.amount.toFixed(2)).toLocaleString('pt-BR', {
                    currency: 'BRL',
                    minimumFractionDigits: 2
                  })}
                </CustomCell>
                <CustomCell align="left" color="#969CB2">
                  {i.category}
                </CustomCell>
                <CustomCell align="left" color="#969CB2">
                  {i.date}
                </CustomCell>
              </TableRow>
            ))}
          </TableBody>
        </MainTable>
      </TableContainer>
      <TransactionEditModal
        props={currentData}
        open={open}
        onClose={handleClose}
      />
    </MainStack>
  )
}
