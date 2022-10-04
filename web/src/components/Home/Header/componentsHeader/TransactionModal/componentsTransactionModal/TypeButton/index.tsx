import { Button } from '@mui/material'
import { MouseEventHandler, ReactNode } from 'react'

type TypeButtonTypes = {
  onClick: MouseEventHandler
  background: string
  children: ReactNode
}

export function TypeButton({ onClick, background, children }: TypeButtonTypes) {
  return (
    <Button
      onClick={onClick}
      sx={{
        width: '236px',
        fontSize: '16px',
        height: '64px',
        background: background,
        color: '#363F5F'
      }}
    >
      {children}
    </Button>
  )
}
