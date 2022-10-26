import { TableCell } from '@mui/material'
import { ReactNode, MouseEventHandler } from 'react'

type CustomCellTypes = {
  children: ReactNode
  color?: string
  align?: 'inherit' | 'left' | 'right' | 'center' | 'justify' | undefined
  onClick?: MouseEventHandler
  width?: string
  padding?: string
}

export function CustomCell({
  children,
  color,
  align,
  onClick,
  width,
  padding
}: CustomCellTypes) {
  return (
    <TableCell
      onClick={onClick}
      align={align}
      sx={{
        color: { color },
        width: { width },
        padding: { padding }
      }}
    >
      {children}
    </TableCell>
  )
}
