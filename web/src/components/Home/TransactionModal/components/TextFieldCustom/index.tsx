import { TextField } from '@mui/material'
import { Controller, Control } from 'react-hook-form'
import { Transaction } from '../../../../../global/interfaces/Transaction'

type TextFieldCustomTypes = {
  name: 'title' | 'amount' | 'category'
  label: string
  control: Control<Transaction>
  placeholder?: string
}

export function TextFieldCustom({
  name,
  label,
  control,
  placeholder
}: TextFieldCustomTypes) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          sx={{ background: '#E7E9EE' }}
          label={label}
          variant="outlined"
          error={!!error}
          helperText={error?.message}
          placeholder={placeholder}
          FormHelperTextProps={{
            sx: { background: '#F0F2F5', margin: 0 }
          }}
        />
      )}
    />
  )
}
