import {
  TableContainer,
  TableBody,
  TableHead,
  TableRow,
  TextField,
  Stack
} from '@mui/material'
import { MainStack } from './componentsTableData/MainStack'
import { MainTable } from './componentsTableData/MainTable'
import { CustomCell } from './componentsTableData/CustomCell'
import { TransactionModal } from 'components/Home/TransactionModal'
import { getData } from '../../../../../service/gets/getData'
import { useCallback, useEffect, useState } from 'react'
import { Transaction } from '../../../../../global/interfaces/Transaction'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { deleteData } from 'service/deletes/deleteData'

export function TableData() {
  const [data, setData] = useState(Array<Transaction>)
  const [currentData, setCurrentData] = useState<Transaction>()
  const [filteredResults, setFilteredResults] = useState(Array<Transaction>)

  const handleGetData = useCallback(async () => {
    const response = await getData()
    setData(response)
  }, [])

  const [searchInput, setSearchInput] = useState('')

  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => setOpen(false)

  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
      const filteredData = data.filter((item) => {
        return Object.values(item)
          .join('')
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
    } else {
      setFilteredResults(data)
    }
  }

  useEffect(() => {
    // getData().then((data) => setData(data))
    handleGetData()
  }, [handleGetData])

  return (
    <MainStack>
      <TextField
        placeholder="Pesquisar"
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
            {searchInput.length > 1
              ? filteredResults.map((i) => {
                  return (
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
                  )
                })
              : data.map((i) => (
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
        open={open}
        onClose={handleClose}
      />
    </MainStack>
  )
}
