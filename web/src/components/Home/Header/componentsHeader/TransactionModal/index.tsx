import { Modal, Grid } from '@mui/material'
import { ReactEventHandler } from 'react'

type TransactionModalTypes = {
  open: boolean
  onClose: ReactEventHandler
}

export function TransactionModal({ open, onClose }: TransactionModalTypes) {
  return (
    <Modal open={open} onClose={onClose}>
      <Grid container sx={{ background: '#F0F2F5' }}>
        <Grid
          item
          width={{ lg: '576px', md: 'auto', sm: 'auto' }}
          display={{ lg: 'flex', md: 'flex', sm: 'flex', xs: 'none' }}
        >
          aaa
        </Grid>
      </Grid>
    </Modal>
  )
}
