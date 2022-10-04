import { Typography } from '@mui/material'

type ModalTitleTypes = {
  text: string
}

export function ModalTitle({ text }: ModalTitleTypes) {
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
