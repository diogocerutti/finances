import { ThemeProvider } from '@mui/material/styles'
import { defaultTheme } from './global/styles/theme'
import { CssBaseline } from '@mui/material'
import Home from './template/Home'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  )
}
