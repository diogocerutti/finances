import { Table } from '@mui/material'
import { ReactNode } from 'react'

type MainTableTypes = {
  children: ReactNode
}

export function MainTable({ children }: MainTableTypes) {
  return (
    <Table
      sx={{
        display: { lg: 'table', md: 'table', sm: 'table', xs: 'none' }
      }}
    >
      {children}
    </Table>
  )
}
