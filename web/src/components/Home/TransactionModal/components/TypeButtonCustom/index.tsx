import { Button } from '@mui/material'
import { MouseEventHandler, ReactNode } from 'react'
import { Controller, Control } from 'react-hook-form'
import { Transaction } from '../../../../../global/interfaces/Transaction'

type TypeButtonCustomTypes = {
  onClick: MouseEventHandler
  background: string
  children: ReactNode
  control: Control<Transaction>
  name: 'title' | 'type' | 'category' | 'amount'
}

export function TypeButtonCustom({
  onClick,
  background,
  children,
  control,
  name
}: TypeButtonCustomTypes) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Button
          {...field}
          onClick={onClick}
          sx={{
            width: '236px',
            fontSize: '16px',
            height: '64px',
            background,
            color: '#363F5F',
            fontWeight: 400,
            border: 1,
            borderColor: '#A8A8B3'
          }}
        >
          {children}
        </Button>
      )}
    />
  )
}
