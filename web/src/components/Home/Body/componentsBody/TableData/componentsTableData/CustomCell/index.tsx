import { TableCell } from '@mui/material'
import { ReactNode } from 'react'

type CustomCellTypes = {
  children: ReactNode
  color?: string
  align?: string
}

export function CustomCell({ children, color, align }: CustomCellTypes) {
  return (
    <TableCell
      sx={{
        color: color,
        align: align
      }}
    >
      {children}
    </TableCell>
  )
}
