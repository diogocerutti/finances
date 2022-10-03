import {
  Modal,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Button,
  Typography,
  IconButton
} from '@mui/material'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import CloseIcon from '@mui/icons-material/Close'
import { ReactEventHandler } from 'react'

type TransactionModalTypes = {
  open: boolean
  onClose: ReactEventHandler
}

export function TransactionModal({ open, onClose }: TransactionModalTypes) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <>
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', right: '29%', top: '11%' }}
        >
          <CloseIcon
            sx={{
              color: '#A8A8B3'
            }}
          />
        </IconButton>
        <Stack
          component="form"
          autoComplete="off"
          spacing={2}
          display={{ lg: 'flex', md: 'flex', sm: 'flex', xs: 'none' }}
          sx={{
            background: '#F0F2F5',
            borderRadius: '5px',
            alignSelf: 'center',
            width: { lg: '576px', md: 'auto', sm: 'auto', xs: 'auto' },
            pt: '64px',
            pb: '64px',
            pr: '48px',
            pl: '48px'
          }}
        >
          <Typography
            sx={{
              fontWeight: 'bold',
              fontSize: '24px',
              lineHeight: '36px',
              mb: '16px'
            }}
          >
            Cadastrar transação
          </Typography>

          <TextField
            sx={{ background: '#E7E9EE' }}
            name="name"
            label="Nome"
            variant="outlined"
          />
          <TextField
            sx={{ background: '#E7E9EE' }}
            name="price"
            label="Preço"
            variant="outlined"
          />
          <ToggleButtonGroup exclusive sx={{ justifyContent: 'space-between' }}>
            <ToggleButton value="" sx={{ width: '236px', fontSize: '16px' }}>
              <ArrowCircleUpIcon sx={{ color: '#12A454' }} />
              Entrada
            </ToggleButton>
            <ToggleButton value="" sx={{ width: '236px', fontSize: '16px' }}>
              <ArrowCircleDownIcon sx={{ color: '#E52E4D' }} />
              Saída
            </ToggleButton>
          </ToggleButtonGroup>
          <TextField
            sx={{ background: '#E7E9EE' }}
            name="price"
            label="Categoria"
            variant="outlined"
          />
          <Button
            type="submit"
            sx={{
              background: '#33CC95',
              color: '#FFF',
              height: '64px',
              fontSize: '16px'
            }}
          >
            Cadastrar
          </Button>
        </Stack>
      </>
    </Modal>
  )
}
