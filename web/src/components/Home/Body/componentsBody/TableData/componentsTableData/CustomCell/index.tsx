import { TableCell } from '@mui/material'
import { ReactNode, MouseEventHandler } from 'react'

type CustomCellTypes = {
  children: ReactNode
  color?: string
  align?: string
  onClick?: MouseEventHandler
  width?: string
}

export function CustomCell({
  children,
  color,
  align,
  onClick,
  width
}: CustomCellTypes) {
  return (
    <TableCell
      onClick={onClick}
      sx={{
        color: color,
        align: align,
        width: { width }
      }}
    >
      {children}
    </TableCell>
  )
}
