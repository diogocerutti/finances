import { Button } from '@mui/material'
import { ReactNode } from 'react'

type SubmitButtonCustomTypes = {
  children: ReactNode
}

export function SubmitButtonCustom({ children }: SubmitButtonCustomTypes) {
  return (
    <Button
      type="submit"
      sx={{
        background: '#33CC95',
        color: '#FFF',
        height: '64px',
        fontSize: '16px',
        fontWeight: 600
      }}
    >
      {children}
    </Button>
  )
}
