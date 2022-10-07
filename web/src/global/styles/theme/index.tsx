import { createTheme } from '@mui/material/styles'
import { ptBR } from '@mui/material/locale'

import '../../fonts/index.css'

export const defaultTheme = createTheme(
  {
    typography: {
      fontFamily: 'Poppins Regular, sans-seriff',
      button: {
        fontFamily: 'Poppins Regular, sans-serif',
        textTransform: 'none'
      }
    },
    components: {
      MuiTableHead: {}
    }
  },
  ptBR
)
