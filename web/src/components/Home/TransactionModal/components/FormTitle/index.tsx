import { Typography } from '@mui/material'

type FormTitleTypes = {
  text: string
}

export function FormTitle({ text }: FormTitleTypes) {
  return (
    <Typography
      sx={{
        fontWeight: 'bold',
        fontSize: '24px',
        lineHeight: '36px',
        mb: '16px'
      }}
    >
      {text}
    </Typography>
  )
}
