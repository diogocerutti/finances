import PaidIcon from '@mui/icons-material/Paid'
import { Grid, Typography } from '@mui/material'
import { HeaderGrid } from './componentsHeader/HeaderGrid'
import { HeaderSubGrid } from './componentsHeader/HeaderSubGrid'
import { TransactionButton } from './componentsHeader/TransactionButton'
import { TransactionModal } from '../TransactionModal'
import { useState } from 'react'

export function Header() {
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
        allFields={{
          title: '',
          category: '',
          amount: 0,
          date: '',
          type: 'deposit'
        }}
        type="post"
        open={open}
        onClose={handleClose}
      />
    </HeaderGrid>
  )
}
