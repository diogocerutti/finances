import { Button } from '@mui/material'
import { ReactNode, MouseEventHandler } from 'react'

type TransactionButtonTypes = {
  children: ReactNode
  onClick: MouseEventHandler
}

export function TransactionButton({
  children,
  onClick
}: TransactionButtonTypes) {
  return (
    <Button
      onClick={onClick}
      sx={{
        background: '#6933FF',
        color: 'white',
        fontSize: '16px',
        width: '195px',
        height: '48px',
        fontWeight: 600
      }}
    >
      {children}
    </Button>
  )
}
