import { Grid, Typography } from '@mui/material'
import { MainGrid } from './componentsCardValues/MainGrid'
import { SubGrid } from './componentsCardValues/SubGrid'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import { useEffect } from 'react'
// import { Transaction } from '../../../../../global/interfaces/Transaction'
import { getData } from '../../../../../service/gets/getData'

export function CardValues() {
  useEffect(() => {
    async function getApi() {
      const values = await getData()
      return values
    }
    getApi()
  }, [])

  return (
    <MainGrid>
      <SubGrid background="#FFF">
        <Grid item display="flex" justifyContent="space-between">
          <Typography>Entradas</Typography>
          <ArrowCircleUpIcon sx={{ color: '#33CC95', fontSize: '30px' }} />
        </Grid>
        <Typography fontSize="36px">34234</Typography>
      </SubGrid>
      <SubGrid background="#FFF">
        <Grid item display="flex" justifyContent="space-between">
          <Typography>Saídas</Typography>
          <ArrowCircleDownIcon sx={{ color: '#E52E4D', fontSize: '30px' }} />
        </Grid>
        <Typography fontSize="36px">R$ 1.259,00</Typography>
      </SubGrid>
      <SubGrid background="#33CC95">
        <Grid item display="flex" justifyContent="space-between">
          <Typography color="#FFF">Total</Typography>
          <AttachMoneyIcon sx={{ color: '#FFF', fontSize: '30px' }} />
        </Grid>
        <Typography color="#FFF" fontSize="36px">
          R$ 16.141,00
        </Typography>
      </SubGrid>
    </MainGrid>
  )
}
