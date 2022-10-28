import PaidIcon from '@mui/icons-material/Paid'
import { Grid, Typography } from '@mui/material'
import { HeaderGrid } from './components/HeaderGrid'
import { HeaderSubGrid } from './components/HeaderSubGrid'
import { TransactionButton } from './components/TransactionButton'
import { TransactionModal } from '../TransactionModal'
import { useState } from 'react'

type HeaderTypes = {
  handleGetTransactions: () => Promise<void>
}

export function Header({ handleGetTransactions }: HeaderTypes) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <HeaderGrid>
      <HeaderSubGrid>
        <Grid item display="flex" alignItems="center">
          <Grid item sx={{ mr: 1 }}>
            <PaidIcon sx={{ color: '#33CC95', fontSize: '3rem' }} />
          </Grid>
          <Grid item>
            <Typography
              color={'white'}
              sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}
            >
              dt money
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <TransactionButton onClick={handleOpen}>
            Nova transação
          </TransactionButton>
        </Grid>
      </HeaderSubGrid>
      <TransactionModal
        handleGetTransactions={handleGetTransactions}
        type="post"
        open={open}
        onClose={handleClose}
      />
    </HeaderGrid>
  )
}
