import { Grid, Stack } from '@mui/material'
import { CardValues } from './components/CardValues'
import { TableData } from './components/TableData'
import { Transaction } from 'global/interfaces/Transaction'

type BodyTypes = {
  transactions: Transaction[]
  handleGetTransactions: () => void
}

export function Body({ transactions, handleGetTransactions }: BodyTypes) {
  return (
    <Grid
      container
      justifyContent="center"
      sx={{ background: '#E5E5E5', height: 'auto' }}
    >
      <Stack
        spacing={5}
        sx={{
          position: 'relative',
          bottom: '68px'
        }}
      >
        <CardValues transactions={transactions} />
        <TableData
          transactions={transactions}
          handleGetTransactions={handleGetTransactions}
        />
      </Stack>
    </Grid>
  )
}
