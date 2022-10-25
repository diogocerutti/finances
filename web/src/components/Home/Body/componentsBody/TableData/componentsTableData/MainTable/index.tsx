import { Table } from '@mui/material'
import { ReactNode } from 'react'

type MainTableTypes = {
  children: ReactNode
}

export function MainTable({ children }: MainTableTypes) {
  return (
    <Table
      sx={{
        display: { lg: 'table', md: 'table', sm: 'table', xs: 'none' },
        borderCollapse: 'separate',
        borderSpacing: '0px 8px'
      }}
    >
      {children}
    </Table>
  )
}
