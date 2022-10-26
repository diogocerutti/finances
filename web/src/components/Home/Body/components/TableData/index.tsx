import {
  TableContainer,
  TableBody,
  TableHead,
  TableRow,
  TextField,
  Stack
} from '@mui/material'
import { MainStack } from './components/MainStack'
import { MainTable } from './components/MainTable'
import { CustomCell } from './components/CustomCell'
import { TransactionModal } from 'components/Home/TransactionModal'
import { useState } from 'react'
import { Transaction } from '../../../../../global/interfaces/Transaction'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { deleteData } from 'service/deletes/deleteData'

type TableDataTypes = {
  transactions: Transaction[]
  handleGetTransactions: () => void
}

export function TableData({
  transactions,
  handleGetTransactions
}: TableDataTypes) {
  const [currentData, setCurrentData] = useState<Transaction>()

  const [search, setSearch] = useState<{ query: string; list: Transaction[] }>({
    query: '',
    list: []
  })

  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => setOpen(false)

  const searchItems = (searchValue: string) => {
    const results = transactions.filter((item) => {
      if (searchValue === '') {
        return transactions
      } else {
        return item.title.toLowerCase().startsWith(searchValue.toLowerCase(), 0)
      }
    })
    setSearch({
      query: searchValue,
      list: results
    })
  }

  return (
    <MainStack>
      <TextField
        placeholder="Pesquisar por título"
        sx={{ width: '50%', alignSelf: 'center', background: '#FFF' }}
        onChange={(e) => searchItems(e.target.value)}
      >
        Pesquisar
      </TextField>
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
              <CustomCell color="#969CB2" align="left">
                Opções
              </CustomCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {search.query === ''
              ? transactions.map((i) => (
                  <TableRow
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
                      {i.amount &&
                        parseFloat(i.amount.toFixed(2)).toLocaleString(
                          'pt-BR',
                          {
                            currency: 'BRL',
                            minimumFractionDigits: 2
                          }
                        )}
                    </CustomCell>
                    <CustomCell align="left" color="#969CB2">
                      {i.category}
                    </CustomCell>
                    <CustomCell align="left" color="#969CB2">
                      {i.date}
                    </CustomCell>
                    <CustomCell align="left" width="0px">
                      <Stack direction="row" spacing={5}>
                        <EditIcon
                          sx={{ color: '#33CC94' }}
                          onClick={() => {
                            handleOpen()
                            setCurrentData(i)
                          }}
                        />
                        <DeleteIcon
                          onClick={() => {
                            deleteData(i)
                          }}
                          sx={{ color: '#E93376' }}
                        />
                      </Stack>
                    </CustomCell>
                  </TableRow>
                ))
              : search.list.map((i) => (
                  <TableRow
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
                      {i.amount &&
                        parseFloat(i.amount.toFixed(2)).toLocaleString(
                          'pt-BR',
                          {
                            currency: 'BRL',
                            minimumFractionDigits: 2
                          }
                        )}
                    </CustomCell>
                    <CustomCell align="left" color="#969CB2">
                      {i.category}
                    </CustomCell>
                    <CustomCell align="left" color="#969CB2">
                      {i.date}
                    </CustomCell>
                    <CustomCell align="left" width="0px">
                      <Stack direction="row" spacing={5}>
                        <EditIcon
                          sx={{ color: '#33CC94' }}
                          onClick={() => {
                            handleOpen()
                            setCurrentData(i)
                          }}
                        />
                        <DeleteIcon
                          onClick={() => {
                            deleteData(i)
                          }}
                          sx={{ color: '#E93376' }}
                        />
                      </Stack>
                    </CustomCell>
                  </TableRow>
                ))}
          </TableBody>
        </MainTable>
      </TableContainer>
      <TransactionModal
        type="put"
        allFields={currentData}
        handleGetTransactions={handleGetTransactions}
        open={open}
        onClose={handleClose}
      />
    </MainStack>
  )
}
