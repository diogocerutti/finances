import { Grid, Typography } from '@mui/material'
import { MainGrid } from './components/MainGrid'
import { SubGrid } from './components/SubGrid'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import { Transaction } from '../../../../../global/interfaces/Transaction'

type CardValuesTypes = {
  transactions: Transaction[]
}

export function CardValues({ transactions }: CardValuesTypes) {
  const deposits =
    transactions &&
    transactions
      .filter((i) => i.type === 'deposit')
      .reduce((sum, current) => sum + current?.amount, 0)

  const withdraws = transactions
    .filter((i) => i.type === 'withdraw')
    .reduce((sum, current) => sum + current?.amount, 0)

  const total = deposits - withdraws

  return (
    <MainGrid>
      <SubGrid background="#FFF">
        <Grid item display="flex" justifyContent="space-between">
          <Typography>Entradas</Typography>
          <ArrowCircleUpIcon sx={{ color: '#33CC95', fontSize: '30px' }} />
        </Grid>
        <Typography fontSize="36px">
          R${' '}
          {parseFloat(deposits.toFixed(2)).toLocaleString('pt-BR', {
            currency: 'BRL',
            minimumFractionDigits: 2
          })}
        </Typography>
      </SubGrid>
      <SubGrid background="#FFF">
        <Grid item display="flex" justifyContent="space-between">
          <Typography>Saídas</Typography>
          <ArrowCircleDownIcon sx={{ color: '#E52E4D', fontSize: '30px' }} />
        </Grid>
        <Typography fontSize="36px">
          R${' '}
          {parseFloat(withdraws.toFixed(2)).toLocaleString('pt-BR', {
            currency: 'BRL',
            minimumFractionDigits: 2
          })}
        </Typography>
      </SubGrid>
      <SubGrid background={total > 0 ? '#33CC95' : '#E52E4D'}>
        <Grid item display="flex" justifyContent="space-between">
          <Typography color="#FFF">Total</Typography>
          <AttachMoneyIcon sx={{ color: '#FFF', fontSize: '30px' }} />
        </Grid>
        <Typography color="#FFF" fontSize="36px">
          R${' '}
          {parseFloat(total.toFixed(2)).toLocaleString('pt-BR', {
            currency: 'BRL',
            minimumFractionDigits: 2
          })}
        </Typography>
      </SubGrid>
    </MainGrid>
  )
}
