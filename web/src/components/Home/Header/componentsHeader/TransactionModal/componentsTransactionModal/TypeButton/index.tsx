import { Button } from '@mui/material'
import { MouseEventHandler, ReactNode } from 'react'
import { Controller, Control } from 'react-hook-form'
import { FormSubmit } from '../../../../../../../global/interfaces/FormSubmit'

type TypeButtonTypes = {
  onClick: MouseEventHandler
  backgroundOp: string
  children: ReactNode
  control: Control<FormSubmit>
  name: 'title' | 'type' | 'category' | 'amount'
}

export function TypeButton({
  onClick,
  backgroundOp,
  children,
  control,
  name
}: TypeButtonTypes) {
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
            background: backgroundOp,
            color: '#363F5F'
          }}
        >
          {children}
        </Button>
      )}
    />
  )
}
