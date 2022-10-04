import { Button } from '@mui/material'
import { ReactNode } from 'react'

type SubmitButtonTypes = {
  children: ReactNode
}

export function SubmitButton({ children }: SubmitButtonTypes) {
  return (
    <Button
      type="submit"
      sx={{
        background: '#33CC95',
        color: '#FFF',
        height: '64px',
        fontSize: '16px'
      }}
    >
      {children}
    </Button>
  )
}
